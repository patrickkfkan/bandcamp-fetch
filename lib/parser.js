const cheerio = require('cheerio');
const {decode} = require('html-entities');
const utils = require('./utils.js');
const {URL} = require('url');

// https://github.com/masterT/bandcamp-scraper/blob/master/lib/htmlParser.js
function assignProps(objFrom, objTo, propNames) {
    propNames.forEach( propName => {
        objTo[propName] = objFrom[propName];
    })
    return objTo;
}

function parseDiscoverResults(json, opts) {
    if (typeof json === 'object' && Array.isArray(json.items)) {
        const results = {
            items: []
        };
        json.items.forEach(function (item) {
            if (item.type === 'a') {
                const album = {
                    type: 'album',
                    name: item.primary_text,
                    url: '',
                    imageUrl: '',
                    genre: item.genre_text,
                    artist: {
                        name: item.secondary_text
                    },
                    location: item.location_text,
                    featuredTrack: ''
                };
                if (item.url_hints) {
                    album.artist.url = item.url_hints.custom_domain || 'https://' + item.url_hints.subdomain + '.bandcamp.com';
                }
                if (album.artist.url) {
                    album.url = album.artist.url + '/album/' + item.url_hints.slug;
                }
                if (item.art_id) {
                    album.imageUrl = opts.imageBaseUrl + '/img/a' + item.art_id + '_' + opts.albumImageFormat.id + '.jpg';
                }
                if (item.featured_track) {
                    album.featuredTrack = {
                        name: item.featured_track.title,
                        duration: item.featured_track.duration || null,
                        streamUrl: item.featured_track.file || null
                    };
                }
                if (item.bio_image) {
                    album.artist.imageUrl = opts.imageBaseUrl + '/img/' + item.bio_image.image_id + '_' + opts.artistImageFormat.id + '.jpg';
                }
                results.items.push(album);
            }
        })
        results.total = json.total_count;
        return results;
    }
    else {
        console.log('Failed to parse discover results');
        return null;
    }
}

function parseDiscoverOptions(html) {
    const $ = cheerio.load(html);
    const blob = $('#pagedata[data-blob]').attr('data-blob');
    const parsed = JSON.parse(blob);
    if (typeof parsed === 'object' &&
        typeof parsed.discover_2015 === 'object' &&
        typeof parsed.discover_2015.options === 'object') {
        const options = parsed.discover_2015.options
        const result = {
            genres: [],
            subgenres: [],
            sortBys: [],
            artistRecommendationTypes: [],
            locations: [],
            formats: [],
            times: []
        }
        if (Array.isArray(options.r)) {
            result.artistRecommendationTypes = options.r.map( r => assignProps(r, {}, ['value', 'name']) );
        }
        if (Array.isArray(options.l)) {
            result.locations = options.l.map( l => assignProps(l, {}, ['value', 'name']) );
        }
        if (Array.isArray(options.w)) {
            result.times = options.w.map( w => assignProps(w, {}, ['value', 'name', 'title']) );
        }
        if (Array.isArray(options.f)) {
            result.formats = options.f.map( f => assignProps(f, {}, ['value', 'name']) );
        }
        if (Array.isArray(options.s)) {
            result.sortBys = options.s.map( s => assignProps(s, {}, ['value', 'name']) );
        }
        if (typeof options.t === 'object') {
            for (const [genre, subgenres] of Object.entries(options.t)) {
                if (Array.isArray(subgenres)) {
                    result.subgenres[genre] = subgenres.map(function (sg) {
                        return assignProps(sg, {}, ['value', 'name'])
                    })
                }
            }
        }
        if (Array.isArray(options.g)) {
            result.genres = options.g.map( g => assignProps(g, {}, ['value', 'name']) );
        }
        return result;
    }
    else {
        console.log('Failed to parse discover options');
        return null;
    }
}

function parseImageConstants(html) {
    const $ = cheerio.load(html);
    const vars = decode($('script[data-vars]').attr('data-vars'));
    const parsed = JSON.parse(vars);
    if (typeof parsed === 'object' && parsed.client_template_globals) {
        return {
            baseUrl: parsed.client_template_globals.image_siteroot_https,
            formats: parsed.client_template_globals.image_formats
        };
    }
    else {
        console.log('Failed to parse image constants');
        return null;
    }
}

function parseAlbumInfo(html, opts) {
    const $ = cheerio.load(html);
    const rawBasic = $('script[type="application/ld+json"]').html();
    const rawExtra = decode($('script[data-tralbum]').attr('data-tralbum'));

    const basic = JSON.parse(rawBasic);
    const extra = JSON.parse(rawExtra);
    if (typeof extra === 'object' && typeof basic === 'object') {
        const album = {
            type: 'album',
            name: basic.name,
            url: basic['@id'],
            numTracks: basic.numTracks,
            imageUrl: utils.reformatImageUrl(basic.image, opts.albumImageFormat),
            keywords: basic.keywords,
            description: basic.description,
            releaseDate: extra.album_release_date,
            artist: {
                name: basic.byArtist.name,
                url: basic.byArtist['@id'],
                description: basic.byArtist.description,
                imageUrl: utils.reformatImageUrl(basic.byArtist.image, opts.artistImageFormat)
            },
            releases: [],
            tracks: []
        };
        if (Array.isArray(basic.albumRelease)) {
            basic.albumRelease.forEach( release => {
                album.releases.push({
                    name: release.name,
                    url: release.url,
                    format: release.musicReleaseFormat,
                    description: release.description,
                    imageUrl: utils.reformatImageUrl(release.image, opts.albumImageFormat)
                });
            });
        }
        if (Array.isArray(basic.track.itemListElement)) {
            const _getStreamUrl = (url) => {
                let file = null;
                if (Array.isArray(extra.trackinfo)) {
                    extra.trackinfo.every( track => {
                        if (url.endsWith(track.title_link)) {
                            file = track.file['mp3-128'];
                            return false;
                        }
                        return true;
                    });
                }
                return file;
            }
            basic.track.itemListElement.forEach( track => {
                album.tracks.push({
                    position: track.position,
                    name: track.item.name,
                    url: track.item.url,
                    duration: track.item.duration_secs,
                    streamUrl: _getStreamUrl(track.item.url)
                });
            });
        }
        if (opts.includeRawData) {
            album.raw = { basic, extra };
        }

        return album;
    }
    else {
        console.log('Failed to parse album info');
        return null;
    }
}

function parseTrackInfo(html, opts) {
    const $ = cheerio.load(html);
    const rawBasic = $('script[type="application/ld+json"]').html();
    const rawExtra = decode($('script[data-tralbum]').attr('data-tralbum'));

    const basic = JSON.parse(rawBasic);
    const extra = JSON.parse(rawExtra);
    if (typeof extra === 'object' && typeof basic === 'object') {
        const track = {
            type: 'track',
            name: basic.name,
            url: basic.url,
            imageUrl: opts.imageBaseUrl + '/img/a' + extra.art_id + '_' + opts.albumImageFormat.id + '.jpg',
            releaseDate: extra.current.release_date,
            duration: basic.duration_secs,
            streamUrl: extra.trackinfo[0].file['mp3-128'],
            artist: {
                name: basic.byArtist.name,
                url: basic.byArtist['@id'],
                description: basic.byArtist.description,
                imageUrl: utils.reformatImageUrl(basic.byArtist.image, opts.artistImageFormat)
            },
            album: null
        }
        if (basic.inAlbum) {
            track.album = {
                name: basic.inAlbum.name,
                url: basic.inAlbum['@id'],
                releaseDate: extra.album_release_date
            }
            track.releaseDate = extra.album_release_date;
        }
        if (opts.includeRawData) {
            track.raw = { basic, extra };
        }
        
        return track;
    }
    else {
        console.log('Failed to parse track info');
        return null;
    }
}

function parseDiscography(html, opts) {
    const $ = cheerio.load(html);
    const allLinks = $('a');
    const items = {};
    const isLabel = $('a[href="/artists"]').length;
    const defaultArtistName = $('#band-name-location').find('.title').text();
    allLinks.each( (index, link) => {
        link = $(link);
        const href = link.attr('href');
        if (typeof href !== 'string' || href === '') {
            return true;
        }
        let host, pathname;
        // regex taken from:
        // https://github.com/masterT/bandcamp-scraper/blob/master/lib/htmlParser.js
        if (/^\/(track|album)\/(.+)$/.exec(href)) { // relative url starting with '/track' or '/album'
            host = opts.artistOrLabelUrl;
            pathname = href;
        }
        else { // full url (label discography)
            try {
                const _url = utils.splitUrl(href);
                if (/^\/(track|album)\/(.+)$/.exec(_url.path)) {
                    host = _url.base;
                    pathname = _url.path;
                }
            } catch (e) {
                return true;
            }
        }
        if (host !== undefined && pathname !== undefined) {
            const url = utils.getUrl(pathname, host);
            if (items[url] === undefined) {
                items[url] = {
                    type: pathname.startsWith('/track/') ? 'track' : 'album'
                };
            }
            // Link element wraps around img and title
            const img = link.find('img');
            if (img.length) {
                let imgSrc = img.attr('data-original') || img.attr('src');
                items[url].imageUrl = utils.reformatImageUrl(imgSrc, opts.imageFormat);
            }
            const title = link.find('.title');
            if (title.length) {
                // For labels, title element contains artist name (when it doesn't, then artist = label).
                // For artists, title element may also contain an artist name which overrides the default
                const artistName = title.find('.artist-override');
                if (artistName.length) {
                    const artist = artistName.text().trim();
                    artistName.remove();
                    items[url].artist = artist;
                }
                else {
                    items[url].artist = defaultArtistName;
                }
                items[url].name = title.text().trim();
            }
            
            if (!img.length && !title.length) {
                items[url].name = link.text().trim();
            }
        }
    });
    const results = [];
    for (const [url, props] of Object.entries(items)) {
        const item = {
            url,
            type: props.type,
            name: props.name || '',
            imageUrl: props.imageUrl || null,
            artist: props.artist || defaultArtistName
        };
        results.push(item);
    }
    return results;
}

function parseArtistOrLabelInfo(html, opts) {
    const $ = cheerio.load(html);

    let bioText = $('#bio-text');
    let bioTextMore = bioText.find('.peekaboo-text');
    let description;
    if (bioTextMore.length) {       
        bioTextMore.find('.lightweightBreak').remove();
        bioText.find('.peekaboo-text, .peekaboo-link').remove();
        description = (bioText.html().trim() + ' ' + bioTextMore.html()).trim();
    }
    else {
        description = bioText.html().trim();
    }
    description = utils.stripLineBreaks(description);
    description = utils.brToNewLine(description);
    description = utils.stripTags(description);
    description = decode(description);

    let isLabel = $('a[href="/artists"]').length;
    let label = null;
    if (!isLabel) {
        let labelLink = $('a.back-to-label-link');
        if (labelLink.length) {
            let linkText = labelLink.find('.back-link-text').html();
            label = {
                name: utils.substrAfter(linkText, '<br>') || utils.substrBefore(linkText, ' に戻る') || utils.substrBefore(linkText, ' のアイテムをもっと聴く'),
                url: utils.splitUrl(labelLink.attr('href')).base
            };
        }
    }

    const result = {
        type: isLabel ? 'label' : 'artist',
        name: $('#band-name-location').find('.title').text(),
        url: opts.artistOrLabelUrl,
        description: description,
        location: $('#band-name-location').find('.location').text(),
        imageUrl: utils.reformatImageUrl($('img.band-photo').attr('src'), opts.imageFormat)
    };
    if (!isLabel) {
        result.label = label;
    }
    return result;
}

function parseLabelArtists(html, opts) {
    const $ = cheerio.load(html);
    const artistsList = $('li.artists-grid-item');
    const results = [];
    artistsList.each( (index, artistListItem) => {
        artistListItem = $(artistListItem);
        const img = artistListItem.find('img');
        const imgSrc = img.attr('data-original') || img.attr('src');
        const artist = {
            name: artistListItem.find('.artists-grid-name').text(),
            url: utils.splitUrl(artistListItem.find('a').attr('href')).base,
            location: artistListItem.find('.artists-grid-location').text(),
            imageUrl: utils.reformatImageUrl(imgSrc, opts.imageFormat)
        };
        results.push(artist);
    });
    return results;
}

function parseSearchResults(html, opts) {
    const $ = cheerio.load(html);
    const resultsList = $('li.searchresult');
    const results = [];
    resultsList.each( (index, resultListItem) => {
        resultListItem = $(resultListItem);
        const resultInfo = resultListItem.find('.result-info');
        const resultType = resultInfo.children('.itemtype').text().trim().toLowerCase();
        const imgSrc = $('.art img', resultListItem).attr('src');
        const heading = $('.heading a', resultInfo);
        const result = {
            type: resultType,
            name: heading.text().trim(),
            url: resultInfo.find('.itemurl').text().trim(),
            imageUrl: utils.reformatImageUrl(imgSrc, resultType === 'album' || resultType === 'track' ? opts.albumImageFormat : opts.artistImageFormat)
        };
        resultInfo.find('.subhead, .genre, .tags, .released, .length').each( (index, info) => {
            info = $(info);
            if (info.hasClass('subhead')) {
                if (resultType === 'artist' || resultType === 'label') {
                    result.location = info.text().trim();
                }
                else if (resultType === 'album' || resultType === 'track') {
                    const infoText = info.text();
                    const artist = utils.substrAfter(infoText, 'by ');
                    if (artist) {
                        result.artist = artist.trim();

                        if (resultType === 'track') {
                            let album = utils.substrBefore(infoText, ' by');
                            if (album) {
                                album = utils.substrAfter(album, 'from ');
                                if (album) {
                                    result.album = album.trim();
                                }
                            }
                        }
                    }
                }
                return true;
            }
            if (info.hasClass('genre')) {
                const genre = utils.substrAfter(info.text(), 'genre: ');
                if (genre) {
                    result.genre = genre.trim();
                }
                return true;
            }
            if (info.hasClass('tags')) {
                const tags = utils.substrAfter(info.text(), 'tags:');
                if (tags) {
                    result.tags = utils.stripLineBreaks(utils.stripMultipleWhitespaces(tags)).trim();
                }
                return true;
            }
            if (info.hasClass('released')) {
                const released = utils.substrAfter(info.text(), 'released ');
                if (released) {
                    result.releasedDate = released.trim();
                }
                return true;
            }
            if (info.hasClass('length')) {
                const lengthParts = info.text().split(',');
                const tracksText = lengthParts[0];
                const minutesText = lengthParts[1];
                const numTracks = tracksText ? utils.substrBefore(tracksText, 'tracks') : null;
                if (numTracks) {
                    result.numTracks = parseInt(numTracks, 10);
                }
                const minutes = minutesText ? utils.substrBefore(minutesText, 'minutes') : null;
                if (minutes) {
                    result.duration = parseInt(minutes, 10) * 60;
                }
            }
        });
        results.push(result);
    });

    let totalPages = parseInt($('.pagelist').find('.pagenum').last().text(), 10);
    if (isNaN(totalPages)) {
        totalPages = 1;
    }

    return {
        items: results,
        totalPages
    };
}

function parseAlbumHighlightsByTag(html, opts) {
    const $ = cheerio.load(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);
    const collections = [];
    if (typeof parsed === 'object' && parsed.hub && 
        parsed.hub.tabs && parsed.hub.tabs[0].collections) {
        
        parsed.hub.tabs[0].collections.forEach( collection => {
            const collectionRes = {
                name: collection.name,
                title: collection.render.title,
                items: []
            };
            collection.items.forEach( item => {
                if (item.item_type === 'a') {
                    const album = {
                        type: 'album',
                        name: item.title,
                        url: item.tralbum_url,
                        imageUrl: '',
                        genre: item.genre,
                        artist: {
                            name: item.artist,
                            url: item.band_url
                        }
                    };
                    if (item.art_id) {
                        album.imageUrl = opts.imageBaseUrl + '/img/a' + item.art_id + '_' + opts.imageFormat.id + '.jpg';
                    }
                    if (item.featured_track_title) {
                        album.featuredTrack = {
                            name: item.featured_track_title,
                            streamUrl: item.audio_url['mp3-128']
                        };
                    }
                    collectionRes.items.push(album);
                }
            });
            if (collectionRes.items.length) {
                collections.push(collectionRes);
            }
        });
    }
    return collections;
}

function parseTags(html) {
    const $ = cheerio.load(html);
    const _parseCloud = (id) => {
        const cloud = $(`#${id}`);
        const tagsInCloud = [];
        cloud.find('a.tag').each( (index, link) => {
            link = $(link);
            tagsInCloud.push({
                name: link.text(),
                url: utils.getUrl(link.attr('href'))
            });
        });
        return tagsInCloud;
    };

    return {
        tags: _parseCloud('tags_cloud'),
        locations: _parseCloud('locations_cloud')
    };
}

module.exports = {
    parseDiscoverResults,
    parseDiscoverOptions,
    parseImageConstants,
    parseAlbumInfo,
    parseTrackInfo,
    parseDiscography,
    parseArtistOrLabelInfo,
    parseLabelArtists,
    parseSearchResults,
    parseAlbumHighlightsByTag,
    parseTags
};