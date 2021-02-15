const cheerio = require('cheerio');
const {decode} = require('html-entities');
const utils = require('./utils.js');
const {EOL} = require('os');
const safeEval = require('safe-eval');

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
                    album.artist.url = 'https://' + item.url_hints.subdomain + '.bandcamp.com';
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
            subgenres: {},
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
                const releaseItem = {
                    name: release.name,
                    url: null,
                    format: release.musicReleaseFormat,
                    description: release.description || '',
                    imageUrl: utils.reformatImageUrl(release.image, opts.albumImageFormat)
                }
                if (release.url) {
                    releaseItem.url = !utils.isAbsoluteUrl(release.url) ? utils.getUrl(release.url, album.url) : release.url;
                }
                album.releases.push(releaseItem);
            });
        }
        if (Array.isArray(basic.track.itemListElement)) {
            basic.track.itemListElement.forEach( track => {
                let trackUrl = track.item['@id'];
                if (!utils.isAbsoluteUrl(trackUrl)) {
                    trackUrl = utils.getUrl(trackUrl, album.url);
                }
                album.tracks.push({
                    position: track.position,
                    name: track.item.name,
                    url: trackUrl,
                    duration: getAdditionalPropertyValue(track.item, 'duration_secs'),
                    streamUrl: getAdditionalPropertyValue(track.item, 'file_mp3-128') || null
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
    // Some tracks don't have a dedicated '/track' url,
    // but take this form instead: {albumUrl}#t{x}, where 'x' is the 
    // track position. These tracks are not displayed as links nor playable.
    // Since the album page is actually loaded, we can return the track info
    // from the album data returned by parseAlbumInfo().
    const { path: trackUrlPath, hash: trackUrlHash } = utils.splitUrl(opts.trackUrl);
    if (trackUrlPath && trackUrlHash) {
        const matchTrackPosInUrl = /^\/(album)\/(.+)#t(\d+)/.exec(trackUrlPath + trackUrlHash);
        if (matchTrackPosInUrl && matchTrackPosInUrl[3]) {
            return parseTrackInfoFromAlbum(html, opts, matchTrackPosInUrl[3]);
        }
    }

    const $ = cheerio.load(html);
    const rawBasic = $('script[type="application/ld+json"]').html();
    const rawExtra = decode($('script[data-tralbum]').attr('data-tralbum'));

    const basic = JSON.parse(rawBasic);
    const extra = JSON.parse(rawExtra);
    if (typeof extra === 'object' && typeof basic === 'object') {
        const track = {
            type: 'track',
            name: basic.name,
            url: basic['@id'],
            imageUrl: opts.imageBaseUrl + '/img/a' + extra.art_id + '_' + opts.albumImageFormat.id + '.jpg',
            releaseDate: extra.current.release_date,
            duration: getAdditionalPropertyValue(basic, 'duration_secs'),
            streamUrl: extra.trackinfo && extra.trackinfo[0] && extra.trackinfo[0].file && extra.trackinfo[0].file['mp3-128'] ? extra.trackinfo[0].file['mp3-128'] : null,
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

function parseTrackInfoFromAlbum(html, opts, trackPosition) {
    const album = parseAlbumInfo(html, opts);
    let trackData = album.tracks[trackPosition - 1] || {};
    const track = {
        type: 'track',
        name: trackData.name,
        url: trackData.url,
        imageUrl: album.imageUrl,
        releaseDate: album.releaseDate,
        duration: trackData.duration,
        streamUrl: trackData.streamUrl,
        artist: {
            name: album.artist.name,
            url: album.artist.url,
            description: album.artist.description,
            imageUrl: album.artist.imageUrl
        },
        album: {
            name: album.name,
            url: album.url,
            releaseDate: album.releaseDate
        }
    };
    return track;
}

function getAdditionalPropertyValue(o, propName) {
    if (Array.isArray(o.additionalProperty)) {
        const p = o.additionalProperty.find( prop => prop.name === propName );
        if (p && p.value !== undefined) {
            return p.value;
        }
    }
    return undefined;
}

function parseDiscography(html, opts) {
    const $ = cheerio.load(html);

    // One-album / one-track artists don't have a discography page.
    // The page for the album or track will be loaded instead.
    // Check if this is the case and handle accordingly
    const currentAlbumOrTrack = $('script[type="application/ld+json"]');
    let isOneTrack = false,
        isOneAlbum = false;
    if (currentAlbumOrTrack.length) {
        currentAlbumOrTrackData = JSON.parse(currentAlbumOrTrack.html());
        if (typeof currentAlbumOrTrackData === 'object') {
            // Check if there is a 'discography' element and, if there is, whether
            // it is hidden or has only one track / album child
            const discographyEl = $('#discography');
            if (discographyEl.length === 0 || discographyEl.css('display') === 'none' || discographyEl.find('li').length === 1) {
                currentAlbumOrTrackUrl = utils.splitUrl(currentAlbumOrTrackData['@id']);
                isOneTrack = currentAlbumOrTrackUrl.path.startsWith('/track/');
                isOneAlbum = currentAlbumOrTrackUrl.path.startsWith('/album/');
            }
        }
    }
    if (isOneTrack || isOneAlbum) {
        const newOpts = {
            imageBaseUrl: opts.imageBaseUrl,
            albumImageFormat: opts.imageFormat,
            artistImageFormat: null,
            includeRawData: false
        };
        let info = isOneTrack ? parseTrackInfo(html, newOpts) : parseAlbumInfo(html, newOpts);
        return [{
            url: info.url,
            type: info.type,
            name: info.name || '',
            imageUrl: info.imageUrl || null,
            artist: info.artist.name
        }];
    }

    const allLinks = $('a');
    const items = {};
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
    let description;
    if (bioText.length) {
        let bioTextMore = bioText.find('.peekaboo-text');
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
    }
    else {
        description = '';
    }

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
    const artistsList = $('li.featured-item, li.artists-grid-item');
    const results = [];
    artistsList.each( (index, artistListItem) => {
        artistListItem = $(artistListItem);
        const img = artistListItem.find('img');
        const imgSrc = img.attr('data-original') || img.attr('src');
        const artist = {
            name: artistListItem.find('.featured-grid-name, .artists-grid-name').text(),
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

    const _findTag = (tagUrl, tagName, tags) => {
        return tags.find( t => t.url === tagUrl && t.name === tagName);
    }

    const _parseCloud = (id) => {
        const cloud = $(`#${id}`);
        const tagsInCloud = [];
        cloud.find('a.tag').each( (index, link) => {
            link = $(link);
            const name = link.text().trim();
            const url = utils.getUrl(link.attr('href'));
            if (name && link.attr('href') !== '/tag/' && !_findTag(url, name, tagsInCloud)) { // Skip blank or repeating tags
                tagsInCloud.push({
                    name,
                    url
                });
            }
        });
        return tagsInCloud;
    };

    return {
        tags: _parseCloud('tags_cloud'),
        locations: _parseCloud('locations_cloud')
    };
}

function parseAllShows(json, opts) {
    const shows = [];
    if (typeof json === 'object' && Array.isArray(json.results)) {
        json.results.forEach( show => {
            shows.push({
                type: 'show',
                name: show.title,
                url: utils.getShowUrl(show.id),
                publishedDate: show.published_date,
                description: show.desc,
                imageCaption: show.image_caption,
                subtitle: show.subtitle,
                imageUrl: opts.imageBaseUrl + '/img/' + show.v2_image_id + '_' + opts.showImageFormat.id + '.jpg',
                screenImageUrl: opts.imageBaseUrl + '/img/' + show.v2_image_id + '_0'
            })
        })
    }
    return shows;
}

function parseShow(html, opts) {
    const $ = cheerio.load(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);

    if (typeof parsed === 'object' && parsed.bcw_data) {
        const showInfo = parsed.bcw_data[utils.getShowIdFromUrl(opts.showUrl)];
        if (showInfo) {
            const show = {
                type: 'show',
                name: showInfo.title,
                url: utils.getShowUrl(showInfo.show_id),
                publishedDate: showInfo.published_date,
                description: showInfo.desc,
                shortDescription: showInfo.short_desc,
                imageCaption: showInfo.image_caption,
                subtitle: showInfo.subtitle,
                duration: showInfo.audio_duration,
                imageUrl: opts.imageBaseUrl + '/img/' + showInfo.show_v2_image_id + '_' + opts.showImageFormat.id + '.jpg',
                screenImageUrl: opts.imageBaseUrl + '/img/' + showInfo.show_v2_image_id + '_0',
                streamUrl: showInfo.audio_stream,
                tracks: []
            }
            showInfo.tracks.forEach( track => {
                const trackItem = {
                    name: track.title,
                    url: track.track_url,
                    imageUrl: opts.imageBaseUrl + '/img/a' + track.track_art_id + '_' + opts.albumImageFormat.id + '.jpg',
                    seekPosition: track.timecode,
                    artist: {
                        name: track.artist,
                        url: 'https://' + track.url_hints.subdomain + '.bandcamp.com',
                        imageUrl: opts.imageBaseUrl + '/img/' + track.bio_image_id + '_' + opts.artistImageFormat.id + '.jpg',
                        location: track.location_text
                    },
                    album: null
                };
                if (track.album_title) {
                    trackItem.album = {
                        name: track.album_title,
                        url: track.album_url
                    }
                }
                show.tracks.push(trackItem);
            });
            return show;
        }
    }
    return null;
}

function parseArticleCategories(html) {
    const $ = cheerio.load(html);
    const dailyUrl = utils.getDailyUrl();
    const _parseSection = (section) => {
        const h = section.prev('h2');
        const title = h.length ? h.text() : '';
        const s = {
            name: section.attr('class'),
            title,
            sections: [],
            categories: []
        }
        section.children().each( (i, c) => {
            const tag = c.tagName;
            c = $(c);
            if (tag === 'section') {
                const parsed = _parseSection($(c));
                if (parsed !== null) {
                    s.sections.push(parsed);
                }
            }
            else if (tag === 'div') {
                c.find('a').each( (i, a) => {
                    a = $(a);
                    let url = a.attr('href');
                    if (!utils.isAbsoluteUrl(url)) {
                        url = utils.getUrl(url, dailyUrl);
                    }
                    s.categories.push({
                        url,
                        name: a.text()
                    });
                });

            }
        });
        if (s.sections.length === 0) {
            delete s.sections;
        }
        if (s.categories.length === 0) {
            delete s.categories;
        }
        if (!s.sections && !s.categories) {
            return null;
        }
        else {
            return s;
        }
    };

    const sections = $('#daily-view-all').children('section');
    const results = [];
    sections.each( (i, section) => {
        const parsed = _parseSection($(section));
        if (parsed !== null) {
            results.push(parsed);
        }
    });

    return results;
}

function parseArticleList(html, opts) {
    const $ = cheerio.load(html);
    const dailyUrl = utils.getDailyUrl();
    const results = {
        articles: [],
        total: 0,
        start: 0,
        end: 0
    };
    
    $('articles-list').each( (i, list) => {
        $('.list-article', $(list)).each( (i, article) => {
            article = $(article);
            const imageUrl = article.find('img').attr('src') || null;
            // category
            const infoText = article.find('.article-info-text');
            const infoTextCategoryLink = infoText.find('a.franchise');
            const infoTextMiddot = infoText.find('.middot');
            const category = {
                url: infoTextCategoryLink.attr('href') || null,
                name: infoTextCategoryLink.text() || ''
            };
            if (!utils.isAbsoluteUrl(category.url)) {
                category.url = utils.getUrl(category.url, dailyUrl);
            }
            // date
            infoTextCategoryLink.remove();
            infoTextMiddot.remove();
            const date = utils.stripLineBreaks(infoText.text()).trim();
            // title and url
            const titleLink = article.find('a.title');
            const title = titleLink.text();
            let url = titleLink.attr('href');
            if (!utils.isAbsoluteUrl(url)) {
                url = utils.getUrl(url, dailyUrl);
            }

            if (titleLink) {
                results.articles.push({
                    url,
                    title,
                    date,
                    imageUrl: utils.reformatImageUrl(imageUrl, opts.imageFormat),
                    category,
                });
            }
        });
    });

    const resultsText = utils.stripLineBreaks($('#num-results').text()).trim();
    const rtm = resultsText.match(/(\d+)(?:\s*to\s*)(\d+)(?:\s*of\s*)(\d+)/);
    if (rtm.length === 4) {
        results.total = parseInt(rtm[3], 10);
        results.start = parseInt(rtm[1], 10);
        results.end = parseInt(rtm[2], 10);
    }
    return results;
}

function parseArticle(html, opts) {
    const $ = cheerio.load(html);
    const basic = JSON.parse($('script[type="application/ld+json"]').html());
    const players = JSON.parse(decode($('#p-daily-article').attr('data-player-infos')));

    const article = {
        title: basic.headline,
        description: basic.description,
        url: basic['@id'],
        imageUrl: basic.image,
        date: basic.datePublished,
        category: {
            name: basic.articleSection,
            url: null
        },
        genre: null,
        author: {
            name: basic.author.name,
            url: basic.author['@id']
        },
        mediaItems: [],
        sections: {}
    };

    // get genre
    const genreLink = $('.genre a');
    if (genreLink.length > 0) {
        article.genre = {
            name: genreLink.text(),
            url: genreLink.attr('href')
        };

        const genreReadMoreLink = $('.moreingenre a');
        if (genreReadMoreLink.length > 0) {
            article.genre.readMoreUrl = genreReadMoreLink.attr('href');
            if (!utils.isAbsoluteUrl(article.genre.readMoreUrl)) {
                article.genre.readMoreUrl = utils.getUrl(article.genre.readMoreUrl, utils.getDailyUrl());
            }
        }    
    }

    // get category url
    const categoryLink = $('article-type a');
    if (categoryLink.length > 0) {
        article.category.url = categoryLink.attr('href');
        if (!utils.isAbsoluteUrl(article.category.url)) {
            article.category.url = utils.getUrl(article.category.url, utils.getDailyUrl());
        }
    }
    
    // get media items (albums and tracks featured in article)
    if (Array.isArray(players)) {
        players.forEach( player => {
            const mediaItem = {
                type: 'unknown',
                name: player.title,
                url: player.tralbum_url,
                imageUrl: '',
                featuredTrackPosition: player.featured_track_number,
                artist: {
                    name: player.band_name,
                    url: player.band_url,
                    imageUrl: '',
                    location: player.band_location
                },
                tracks: [],
                mediaItemRef: player.player_id
            };
            if (player.parent_tralbum_type === 'a') {
                mediaItem.type = 'album';
            }
            else if (player.parent_tralbum_type === 't') {
                mediaItem.type = 'track';
            }
            if (player.art_id) {
                mediaItem.imageUrl = opts.imageBaseUrl + '/img/a' + player.art_id + '_' + opts.albumImageFormat.id + '.jpg';
            }
            if (player.band_image_id) {
                mediaItem.artist.imageUrl = opts.imageBaseUrl + '/img/' + player.band_image_id + '_' + opts.artistImageFormat.id + '.jpg';
            }
            if (Array.isArray(player.tracklist)) {
                player.tracklist.forEach( trackInfo => {
                    const track = {
                        position: trackInfo.track_number,
                        name: trackInfo.track_title,
                        duration: trackInfo.audio_track_duration,
                        streamUrl: trackInfo.audio_url['mp3-128']
                    }
                    mediaItem.tracks.push(track);
                });
            }

            article.mediaItems.push(mediaItem);
        });
    }

    // Function that returns a section corresponding to a media item
    const _getSectionByPlayer = player => {
        const section = {
            heading: null,
            html: '',
            text: '',
            mediaItemRef: null
        };

        // Get heading
        const heading = player.prevUntil('bamplayer-art', 'h3, h2').first();
        if (heading.length > 0) {
            section.heading = {
                html: heading.html(),
                text: utils.stripTags(utils.brToNewLine(heading.html())).trim()
            };
        }

        // Get html and text
        const paragraphs = player.nextUntil('bamplayer-art, h3, h5, article-end', 'p');
        paragraphs.each( (i, p) => {
            p = $(p);
            section.html += (section.html !== '' ? EOL : '') + p.html();
            section.text += (section.text !== '' ? EOL + EOL : '') + p.text();
        });

        // get mediaItemRef
        const playerIdMatch = player.attr('data-bind').match(/playerMap\["(.+?)"]/);
        section.mediaItemRef = playerIdMatch[1] || null;

        return section;
    }

    // Function that returns the introductory paragraph(s) of the article
    const _getIntroSection = articleBody => {
        const firstPlayer = articleBody.find('bamplayer-art').first();
        const paragraphs = firstPlayer.length > 0 ? firstPlayer.prevAll('p') : articleBody.find('p');
        if (paragraphs.length > 0) {
            const section = {
                html: '',
                text: ''
            };
            paragraphs.each( (i, p) => {
                p = $(p);
                section.html += (section.html !== '' ? EOL : '') + p.html();
                section.text += (section.text !== '' ? EOL + EOL : '') + p.text();
            });
            return section;
        }
        else {
            return null;
        }
    }

    // sections
    const articleBody = $('#p-daily-article article');
    const sections = [];
    const introSection = _getIntroSection(articleBody);
    if (introSection) {
        sections.push(introSection);
    }
    const bcplayers = articleBody.find('bamplayer-art');
    bcplayers.each( (i, player) => {
        sections.push(_getSectionByPlayer($(player)));
    });
    article.sections = sections;

    if (opts.includeRawData) {
        article.raw = {
            basic,
            mediaItems: players,
            body: articleBody.html()
        };
    }

    return article;
}

function parseTagInfo(html, opts) {
    const $ = cheerio.load(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);
    if (typeof parsed === 'object' && parsed.hub) {
        const tag = {
            type: 'tag',
            name: parsed.hub.name,
            url: opts.tagUrl,
            value: parsed.hub.norm_name,
            relatedTags: []
        };
        if (Array.isArray(parsed.hub.related_tags)) {
            parsed.hub.related_tags.forEach( related => {
                const relatedTag = {
                    type: 'tag',
                    name: related.name,
                    url: utils.getUrl(related.url),
                    value: related.norm_name,
                    isLocation: related.isloc
                };
                tag.relatedTags.push(relatedTag);
            });
        }
        return tag;
    }
    else {
        console.log('Failed to parse tag info');
        return null;
    }
}

function parseHubJSPath(html) {
    const jsMatch = /src="((?:.+?)hub-(?:.+?).js)"/g.exec(html);
    return jsMatch[1] || null;
}

function parseHubJSFilterValueNames(js) {
    const filterValueNames = {};
    const tObj = /"hubs\/digdeeper\/filter_value":(.+?)}\);/gs.exec(js);
    if (tObj[1]) {
        const t = safeEval(tObj[1]);
        if (t && t[0] && Array.isArray(t[0].blocks)) {
            const _getValFromBlockAttachment = attachment => {
                if (typeof attachment === 'object' && attachment.type === 'translate') {
                    return utils.stripLineBreaks(attachment.nodelist[0]).trim();
                }
                else if (typeof attachment === 'string') {
                    return utils.stripLineBreaks(attachment).trim();
                }
                else {
                    return '';
                }
            };
            t[0].blocks.forEach( filterBlock => {
                const filter = safeEval(filterBlock.expression.split('==')[1]);
                if (filter) {
                    filterBlock
                        .attachment.find( a => a.blocks )
                        .blocks.filter( block => block.expression )
                        .forEach( valueBlock => {
                            const value = safeEval(valueBlock.expression.split('==')[1]);
                            if (value != null && valueBlock.attachment) {
                                let valueName = valueBlock.attachment.reduce( (a, c) => {
                                    cVal = utils.stripLineBreaks(_getValFromBlockAttachment(c)).trim();
                                    if (cVal !== '') {
                                        return a !== '' ? a + ' ' + cVal : cVal;
                                    }
                                    else {
                                        return a;
                                    }
                                }, '');
    //console.log('value name: ' + valueName);
                                if (valueName) {
                                    if (!filterValueNames[filter]) {
                                        filterValueNames[filter] = {};
                                    }
                                    filterValueNames[filter][value] = valueName;
                                }
                            }
                        });
                }
            });
        }
    }
    return filterValueNames;
}

function parseReleasesByTagFilterOptions(html, opts) {
    const $ = cheerio.load(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);
    const filters = [];
    if (typeof parsed === 'object' && parsed.hub && Array.isArray(parsed.hub.tabs)) {
        const tab = parsed.hub.tabs[1]; // All releases

        const _setOrAdd = (f, t, prop) => {
            const target = f.options.find( f => f.value === t.value );
            if (target) {
                target[prop] = true;
            }
            else if (t.value && t.name) {
                const tAdd = {
                    value: t.value,
                    name: t.name,
                };
                tAdd[prop] = true;
                f.options.push(tAdd);
            }
        }

        if (tab && tab.dig_deeper && typeof tab.dig_deeper.filters === 'object') {
            const filterKeys = Object.keys(tab.dig_deeper.filters);
            filterKeys.forEach( filterName => {
                const filter = {
                    name: filterName,
                    options: []
                }
                const filterData = tab.dig_deeper.filters[filterName];
                if (Array.isArray(filterData.options)) {
                    filterData.options.forEach( filterOption => {
                        const valueName = opts.filterValueNames[filterName] && opts.filterValueNames[filterName][filterOption.value] ? opts.filterValueNames[filterName][filterOption.value] : filterOption.name || filterOption.value;
                        filter.options.push({
                            value: filterOption.value,
                            name: valueName
                        })
                    });
                }
                if (typeof filterData.selected === 'object' && !Array.isArray(filterData.selected)) {
                    _setOrAdd(filter, filterData.selected, 'selected');
                }
                else if (Array.isArray(filterData.selected)) {
                    filterData.selected.forEach( s => {
                        _setOrAdd(filter, s, 'selected');
                    })
                }
                if (filterData.default) {
                    _setOrAdd(filter, filterData.default, 'default');
                }

                filters.push(filter);
            });
        }
    }
    return filters;
}

function parseReleasesByTag(json, opts) {
    if (typeof json === 'object' && Array.isArray(json.items)) {
        const results = {
            items: []
        };
        json.items.forEach(function (item) {
            const mediaItem = {
                type: 'unknown',
                name: item.title,
                url: item.tralbum_url,
                imageUrl: '',
                genre: item.genre,
                artist: {
                    name: item.artist,
                    url: item.band_url
                },
                featuredTrack: ''
            };
            if (item.item_type === 'a') {
                mediaItem.type = 'album';
            }
            else if (item.item_type === 't') {
                mediaItem.type = 'track';
            }
            if (item.art_id) {
                mediaItem.imageUrl = opts.imageBaseUrl + '/img/a' + item.art_id + '_' + opts.imageFormat.id + '.jpg';
            }
            if (item.featured_track_title) {
                mediaItem.featuredTrack = {
                    name: item.featured_track_title,
                    streamUrl: (item.audio_url ? item.audio_url['mp3-128'] : null) || null
                };
            }
            results.items.push(mediaItem);
        });
        results.hasMore = json.more_available;
        results.filters = JSON.parse(json.filters);
        return results;
    }
    else {
        console.log('Failed to parse releases by tag');
        return null;
    }
}

function parseSearchTagResults(json) {
    if (typeof json === 'object' && Array.isArray(json.matching_tags)) {
        const results = [];
        json.matching_tags.forEach( match => {
            results.push({
                count: match.count,
                value: match.tag_norm_name,
                name: match.tag_name
            });
        });
        return results;
    }
    else {
        console.log('Failed to parse search tag results');
        return null;
    }
}

function parseSearchLocationResults(json) {
    if (typeof json === 'object' && Array.isArray(json.results)) {
        const results = [];
        json.results.forEach( match => {
            results.push({
                value: match.id,
                name: match.name,
                fullName: match.fullname
            });
        });
        return results;
    }
    else {
        console.log('Failed to parse search location results');
        return null;
    }
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
    parseTags,
    parseAllShows,
    parseShow,
    parseArticleCategories,
    parseArticleList,
    parseArticle,
    parseTagInfo,
    parseHubJSPath,
    parseHubJSFilterValueNames,
    parseReleasesByTagFilterOptions,
    parseReleasesByTag,
    parseSearchTagResults,
    parseSearchLocationResults
};