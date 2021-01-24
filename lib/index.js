const fetch = require('node-fetch');
const utils = require('./utils.js');
const parser = require('./parser.js');

const cache = {};

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
        .then( url => fetch(url) )
        .then( res => res.json() )
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
    if (cache.discoverOptions !== undefined) {
        return cache.discoverOptions;
    }
    const url = utils.getSiteUrl();
    return fetch(url)
        .then( res => res.text() )
        .then( html => {
            cache.discoverOptions = parser.parseDiscoverOptions(html);
            return cache.discoverOptions;
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
        else if (filter === 'artist') {
            return constants.formats.filter( c => c.name.startsWith('bio_') );
        }
        else {
            return constants.formats;
        }
    });
}

async function _getImageConstants() {
    if (cache.imageConstants !== undefined) {
        return cache.imageConstants;
    }
    const url = utils.getSiteUrl();
    return fetch(url)
        .then( res => res.text() )
        .then( html => {
            cache.imageConstants = parser.parseImageConstants(html);
            return cache.imageConstants;
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
    return fetch(albumUrl)
        .then( res => res.text() )
        .then( html => parser.parseAlbumInfo(html, opts) );
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
    return fetch(trackUrl)
        .then( res => res.text() )
        .then( html => parser.parseTrackInfo(html, opts) );
}

async function getDiscography(artistOrLabelUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        artistOrLabelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 9)
    };
    return fetch(utils.getUrl('music', artistOrLabelUrl))
        .then( res => res.text() )
        .then( html => parser.parseDiscography(html, opts) );
}

async function getArtistOrLabelInfo(artistOrLabelUrl, options = {}) {
    const opts = {
        artistOrLabelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat)
    };
    // Some pages don't actually show the 'bio' column.
    // The /music page does seem to always show it though, so parse from that.
    return fetch(utils.getUrl('music', artistOrLabelUrl))
        .then( res => res.text() )
        .then( html => parser.parseArtistOrLabelInfo(html, opts) );
}

async function getLabelArtists(labelUrl, options = {}) {
    const opts = {
        labelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat)
    };
    return fetch(utils.getUrl('artists', labelUrl))
        .then( res => res.text() )
        .then( html => parser.parseLabelArtists(html, opts) );
}

async function search(params, options = {}) {
    const opts = {
        albumImageFormat: await _parseImageFormatArg(options.albumImageFormat),
        artistImageFormat: await _parseImageFormatArg(options.artistImageFormat)
    };
    return fetch(utils.getSearchUrl(params))
        .then( res => res.text() )
        .then( html => parser.parseSearchResults(html, opts) );
}

async function getAlbumHighlightsByTag(tagUrl, options = {}) {
    const imageConstants = await _getImageConstants();
    const opts = {
        imageBaseUrl: imageConstants.baseUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat, 9)
    };

    return fetch(tagUrl)
        .then( res => res.text() )
        .then( html => parser.parseAlbumHighlightsByTag(html, opts) );  
}

async function getTags() {
    return fetch(utils.getUrl('tags'))
        .then( res => res.text() )
        .then( html => parser.parseTags(html) );  
}

module.exports = {
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
    getTags
};