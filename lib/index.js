const Bottleneck = require('bottleneck');
const utils = require('./utils.js');
const parser = require('./parser.js');
const Cache = require('./cache.js');

const _cache = new Cache({ constant: 3600, page: 300 }, { page: 10 });

async function discover(params, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat, 9),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat, 21)
    };

    let resultParams;
    return sanitizeDiscoverParams(params)
        .then( sanitizedParams => {
            resultParams = Object.assign({}, sanitizedParams);
            // Passing an 'all' type subgenre (e.g. 'all-metal') in the discover url
            // actually returns far fewer / zero results than without.
            // The Bandcamp site also does not seem to include it in its discover requests...           
            if (sanitizedParams.time !== undefined) {
                // If 'time' exists in sanitized params, then we have an 'all' type subgenre
                // - refer to sanitizeDiscoverParams()
                delete sanitizedParams.subgenre;
            }
            return utils.getDiscoverUrl(sanitizedParams);
        })
        .then( url => _fetchPage(url, true) )
        .then( json => {
            const result = parser.parseDiscoverResults(json, opts);
            result.params = resultParams;
            return result;
        });
}

async function sanitizeDiscoverParams(params) {
    return getDiscoverOptions().then( options => {
        const getOptionValue = (optArr, value, defaultIndex = 0) => {
            if (value !== undefined && optArr) {
                const opt = optArr.find( o => o.value == value );
                if (opt) {
                    return opt.value;
                }
            }
            if (optArr) {
                return optArr[defaultIndex].value;
            }
            else {
                return null;
            }
        }
        const sanitized = {
            genre: getOptionValue(options.genres, params.genre),
            sortBy: getOptionValue(options.sortBys, params.sortBy),
            page: params.page || 0
        };
        if (sanitized.sortBy !== 'rec') {
            // following only valid when sortBy is not 'rec' (artist-recommend)
            const subgenreOptions = options.subgenres[sanitized.genre];
            if (subgenreOptions) { // false if genre is 'all'
                sanitized.subgenre = getOptionValue(subgenreOptions, params.subgenre);
            }
            // 'Time' option only available when there is effectively no subgenre (e.g. genre is 'all'
            // or subgenre is 'all-metal')
            const timeAllowed = sanitized.subgenre === undefined || sanitized.subgenre == subgenreOptions[0].value;
            if (timeAllowed) {
                sanitized.time = getOptionValue(options.times, params.time, 1);
            }
            sanitized.location = getOptionValue(options.locations, params.location);
            sanitized.format = getOptionValue(options.formats, params.format);
        }
        else {
            sanitized.artistRecommendationType = getOptionValue(options.artistRecommendationTypes, params.artistRecommendationType);
        }

        return sanitized;
    });
}

async function getDiscoverOptions() {
    return _cache.getOrSet('constant', 'discoverOptions', () => {
        return _fetchPage(utils.getSiteUrl()).then( html => parser.parseDiscoverOptions(html) );
    });
}

async function getImageFormat(idOrName) {
    const imageConstants = await _getImageConstants();
    let result = null;
    imageConstants.formats.every( format => {
        if ( (typeof idOrName === 'string' && format.name === idOrName) || 
            (Number.isInteger(idOrName) && format.id === idOrName) ) {
            result = format;
            return false;
        }
        return true;
    });
    return result;
}

async function getImageFormats(filter = '') {
    return _getImageConstants().then( constants => {
        if (filter === 'album') {
            return constants.formats.filter( c => c.name.startsWith('art_') );
        }
        else if (filter === 'bio' || filter === 'artist') {
            return constants.formats.filter( c => c.name.startsWith('bio_') );
        }
        else {
            return constants.formats;
        }
    });
}

async function _getImageConstants() {
    return _cache.getOrSet('constant', 'imageConstants', () => {
        return _fetchPage(utils.getSiteUrl()).then( html => parser.parseImageConstants(html) );
    });
}

async function _parseImageFormatArg(arg, defaultId = null) {
    let result;
    if (typeof arg === 'string' || Number.isInteger(arg)) {
        result = await getImageFormat(arg);
    }
    else if (typeof arg === 'object') {
        result = arg;
    }
    else {
        result = null;
    }
    if (result === null && defaultId !== null) {
        result = await getImageFormat(defaultId);
    }
    return result;
};

async function getAlbumInfo(albumUrl, options = {}) {
    const opts = {
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat),
        includeRawData: options.includeRawData ? true : false
    };
    return _fetchPage(albumUrl).then( html => parser.parseAlbumInfo(html, opts) );
}

async function getTrackInfo(trackUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        trackUrl,
        imageBaseUrl: imageConstants.baseUrl,
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat, 9),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat),
        includeRawData: options.includeRawData ? true : false
    };
    return _fetchPage(trackUrl).then( html => parser.parseTrackInfo(html, opts) );
}

async function getDiscography(artistOrLabelUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        artistOrLabelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 9)
    };
    return _fetchPage(utils.getUrl('music', artistOrLabelUrl))
        .then( html => parser.parseDiscography(html, opts) );
}

async function getArtistOrLabelInfo(artistOrLabelUrl, options = {}) {
    const opts = {
        artistOrLabelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat)
    };
    const _getUrl = (path) => {
        let _url = path ? utils.getUrl(path, artistOrLabelUrl) : artistOrLabelUrl;
        if (options.labelId) {
            _url += '/?label=' + encodeURIComponent(options.labelId);
        }
        return _url;
    };
    const _isInfoComplete = (data) => {
        return data.name !== null && data.url !== null &&
            (data.type === 'label' || data.label !== null);
    }
    const _fillInfo = (toData, fromData) => {
        if (toData.name === null) {
            toData.name = fromData.name;
        }
        if (toData.url === null) {
            toData.url = fromData.url;
        }
        if (toData.label === null) {
            toData.label = fromData.label;
        }
    }

    let url = _getUrl();
    let html = await _fetchPage(url);
    let result = parser.parseArtistOrLabelInfo(html, opts);
    // Return if result is complete
    if (_isInfoComplete(result)) {
        return result;
    }

    // Info lacking name or label (for artist) - try getting them from music page
    url = _getUrl('music');
    html = await _fetchPage(url);
    let info = parser.parseArtistOrLabelInfo(html, opts);
    _fillInfo(result, info);
    // Return if result is complete
    if (_isInfoComplete(result)) {
        return result;
    }
    
    // Info is still lacking name or label (for artist) - last try with fetching 
    // from discog's first album or track
    let discogItems = await getDiscography(artistOrLabelUrl, options);
    if (discogItems[0]) {
        url = discogItems[0].url;
        html = await _fetchPage(url);
        info = parser.parseArtistOrLabelInfo(html, opts);
        _fillInfo(result, info);
    }

    if (result.url === null) {
        result.url = artistOrLabelUrl;
    }

    return result;
}

async function getLabelArtists(labelUrl, options = {}) {
    const opts = {
        labelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat)
    };
    return _fetchPage(utils.getUrl('artists', labelUrl))
        .then( html => parser.parseLabelArtists(html, opts) );        
}

async function search(params, options = {}) {
    const opts = {
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat)
    };
    return _fetchPage(utils.getSearchUrl(params))
        .then( html => parser.parseSearchResults(html, opts) );
}

async function getAlbumHighlightsByTag(tagUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 9)
    };

    return _fetchPage(tagUrl)
        .then( html => parser.parseAlbumHighlightsByTag(html, opts) );  
}

async function getTags() {
    return _fetchPage(utils.getUrl('tags'))
        .then( html => parser.parseTags(html) );  
}

async function getAllShows(options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        showImageFormat: await _parseImageFormatArg(options.showImageFormat, 25)
    };
    return _fetchPage(utils.getAllShowsUrl(), true)
        .then( json => parser.parseAllShows(json, opts) );
}

async function getShow(showUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        showUrl,
        imageBaseUrl: imageConstants.baseUrl,
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat, 9),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat, 21),
        showImageFormat: await _parseImageFormatArg(options.showImageFormat, 25)
    };
    return _fetchPage(showUrl)
        .then( html => parser.parseShow(html, opts) );
}

async function getArticleCategories() {
    return _fetchPage(utils.getDailyUrl())
        .then( html => parser.parseArticleCategories(html) );
}

async function getArticleList(params = {}, options = {}) {
    if (params.categoryUrl == undefined) {
        params.categoryUrl = utils.getUrl('latest', utils.getDailyUrl());
    }
    const opts = {
        imageFormat: await _parseImageFormatArg(options.imageFormat)
    };
    return _fetchPage(utils.getDailyUrl(params))
        .then( html => parser.parseArticleList(html, opts) );          
}

async function getArticle(articleUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat, 9),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat, 21),
        includeRawData: options.includeRawData ? true : false
    };
    return _fetchPage(articleUrl)
        .then( html => parser.parseArticle(html, opts) );
}

async function getTagInfo(tagUrl) {
    return _fetchPage(tagUrl)
        .then( html => parser.parseTagInfo(html, {tagUrl}) );
}

async function getReleasesByTagFilterOptions(tagUrl) {
    return getReleasesByTagFilterValueNames(tagUrl)
        .then( filterValueNames => {
            const opts = {
                filterValueNames
            };
            return _fetchPage(tagUrl)
                .then( html => parser.parseReleasesByTagFilterOptions(html, opts));
        });
}

async function getReleasesByTagFilterValueNames(tagUrl) {
    return _fetchPage(utils.getReleasesByTagUrl(tagUrl))
        .then( html => parser.parseHubJSPath(html) )
        .then( path => {
            return _fetchPage(path).then( js => {
                return parser.parseHubJSFilterValueNames(js);
            });
        });
}

async function getReleasesByTag(tagUrl, params = {}, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 9)
    };
    
    const _getDefaultFilters = tagUrl => {
        if (options.useHardcodedDefaultFilters) {
            const tagUrlPath = utils.splitUrl(tagUrl).path;
            if (tagUrlPath.endsWith('/')) {
                tagUrlPath = tagUrlPath.substr(0, tagUrlPath.length - 1);
            }
            const tagValue = tagUrlPath.split('/').pop();

            return Promise.resolve({
                tags: [tagValue],
                location: 0,
                format: 'all',
                sort: 'pop'
            });
        }
        else {
            return getReleasesByTagFilterOptions(tagUrl)
                .then( filterOptions => {
                    const defaultFilters = {};
                    filterOptions.forEach( filter => {
                        let selectedOption = filter.options.find( o => o.selected );
                        let defaultOption = filter.options.find( o => o.default );
                        if (selectedOption) {
                            if (filter.name === 'tags') {
                                defaultFilters[filter.name] = [selectedOption.value];
                            }
                            else {
                                defaultFilters[filter.name] = selectedOption.value;
                            }
                        }
                        else if (defaultOption) {
                            defaultFilters[filter.name] = defaultOption.value;
                        }
                    });    

                    return defaultFilters;
                });
        }
    }

    return _getDefaultFilters(tagUrl)
        .then( defaultFilters => {
            const tagsFilter = defaultFilters.tags ? defaultFilters.tags.slice(0) : [];
            if (params.filters && Array.isArray(params.filters.tags)) {
                params.filters.tags.forEach( tag => {
                    if (!tagsFilter.includes(tag)) {
                        tagsFilter.push(tag);
                    }
                })
            }
            const paramFilters = params.filters ? Object.assign(defaultFilters, params.filters, {tags: tagsFilter}) : defaultFilters;

            return {
                filters: paramFilters,
                page: params.page || 1
            };
        })
        .then( postData => {
            return _fetchPage(utils.getDigDeeperUrl(), true, _getPostFetchOptions(postData))
                .then( json => parser.parseReleasesByTag(json, opts));
        });
}

async function searchTag(params) {
    const postData = {
        search_term: params.q,
        count: params.limit
    };
    return _fetchPage(utils.getSearchTagUrl(), true, _getPostFetchOptions(postData))
                .then( json => parser.parseSearchTagResults(json));
}

async function searchLocation(params) {
    const postData = {
        q: params.q,
        n: params.limit,
        geocoder_fallback: true
    };
    return _fetchPage(utils.getSearchLocationUrl(), true, _getPostFetchOptions(postData))
                .then( json => parser.parseSearchLocationResults(json));
}

async function getFanInfo(username, options = {}) {
    const imageConstants = await _getImageConstants();
    const fanPageUrl = utils.getFanPageUrl(username);
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 20),
    };
    return _fetchPage(fanPageUrl)
        .then( html => parser.parseFanInfo(html, opts) );
}

async function _commonGetFanItems(usernameOrContinuationToken, options, getOpts) {
    const {defaultImageFormat, continuationUrl, parsePageFn, parseContinuationFn} = getOpts;
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, defaultImageFormat),
    };

    if (typeof usernameOrContinuationToken === 'string') {
        const fanPageUrl = utils.getFanPageUrl(usernameOrContinuationToken);

        return _fetchPage(fanPageUrl)
            .then( html => parsePageFn(html, opts) );
    }
    else if (typeof usernameOrContinuationToken === 'object' && usernameOrContinuationToken.fanId && usernameOrContinuationToken.token) {
        const postData = {
            fan_id: usernameOrContinuationToken.fanId,
            older_than_token: usernameOrContinuationToken.token,
            count: 20
        };

        return _fetchPage(continuationUrl, true, _getPostFetchOptions(postData))
                    .then( json => parseContinuationFn(json, usernameOrContinuationToken, opts));
    }
    else {
        throw new Error('Invalid argument');
    }
}

async function getFanCollection(usernameOrContinuationToken, options = {}) {
    try {
        return await _commonGetFanItems(usernameOrContinuationToken, options, {
            defaultImageFormat: 9,
            continuationUrl: utils.getFanCollectionContinuationUrl(),
            parsePageFn: parser.parseFanCollectionFromPage,
            parseContinuationFn: parser.parseFanCollectionFromContinuation
        });
    } catch (error) {
        throw new Error('getFanCollection(): ' + error.message);
    }
}

async function getFanWishlist(usernameOrContinuationToken, options = {}) {
    try {
        return await _commonGetFanItems(usernameOrContinuationToken, options, {
            defaultImageFormat: 9,
            continuationUrl: utils.getFanWishlistContinuationUrl(),
            parsePageFn: parser.parseFanWishlistFromPage,
            parseContinuationFn: parser.parseFanWishlistFromContinuation
        });
    } catch (error) {
        throw new Error('getFanWishlist(): ' + error.message);
    }
}

async function getFanFollowingArtistsAndLabels(usernameOrContinuationToken, options = {}) {
    try {
        return await _commonGetFanItems(usernameOrContinuationToken, options, {
            defaultImageFormat: 21,
            continuationUrl: utils.getFanFollowingBandsContinuationUrl(),
            parsePageFn: parser.parseFanFollowingBandsFromPage,
            parseContinuationFn: parser.parseFanFollowingBandsFromContinuation
        });
    } catch (error) {
        throw new Error('getFanFollowingArtistsAndLabels(): ' + error.message);
    }
}

async function getFanFollowingGenres(usernameOrContinuationToken, options = {}) {
    try {
        return await _commonGetFanItems(usernameOrContinuationToken, options, {
            defaultImageFormat: 3,
            continuationUrl: utils.getFanFollowingGenresContinuationUrl(),
            parsePageFn: parser.parseFanFollowingGenresFromPage,
            parseContinuationFn: parser.parseFanFollowingGenresFromContinuation
        });
    } catch (error) {
        throw new Error('getFanFollowingGenres(): ' + error.message);
    }
}

async function _fetchPage(url, json = false, fetchOptions = null) {
    return _cache.getOrSet('page', url + (json ? ':json' : ':html') + (fetchOptions ? ':' + JSON.stringify(fetchOptions) : ''), () => {
        const doFetch = fetchOptions ? fetch(url, fetchOptions) : fetch(url);
        return doFetch.then( res => {
            if (res.status === 429) {
                const err = new Error('429 Too Many Requests');
                err.code = '429';
                throw err;
            }
            else {
                return json ? res.json() : res.text();
            }
        });
    });
}

function _getPostFetchOptions(postData) {
    return {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
}

// Cache functions
const cache = {
    setTTL: _cache.setTTL.bind(_cache),
    setMaxPages: (maxPages) => {
        _cache.setMaxEntries('page', maxPages);
    },
    clear: _cache.clear.bind(_cache)
};

// Exported functions
const _exportFn = {
    discover,
    getDiscoverOptions,
    sanitizeDiscoverParams,
    getImageFormats,
    getImageFormat,
    getAlbumInfo,
    getTrackInfo,
    getDiscography,
    getArtistOrLabelInfo,
    getLabelArtists,
    search,
    getAlbumHighlightsByTag,
    getTags,
    getAllShows,
    getShow,
    getArticleCategories,
    getArticleList,
    getArticle,
    getTagInfo,
    getReleasesByTagFilterOptions,
    getReleasesByTag,
    searchTag,
    searchLocation,
    getFanInfo,
    getFanCollection,
    getFanWishlist,
    getFanFollowingArtistsAndLabels,
    getFanFollowingGenres
};

// Bottleneck limiter
const _limiter = new Bottleneck({
    maxConcurrent: 5,
    minTime: 200
});
const limiter = {};
for (const [fnName, fn] of Object.entries(_exportFn)) {
    limiter[fnName] = _limiter.wrap(fn);
}
limiter.updateSettings = _limiter.updateSettings.bind(_limiter);

// Module exports
module.exports = Object.assign({}, _exportFn, { cache, limiter });
