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

    const url = utils.getDiscoverUrl(params);
    return fetch(url)
        .then( res => res.json() )
        .then( json => parser.parseDiscoverResults(json, opts) );
}

async function getDiscoverOptions() {
    const url = utils.getSiteUrl();
    return fetch(url)
        .then( res => res.text() )
        .then( html => parser.parseDiscoverOptions(html) );
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
    const opts = {
        artistOrLabelUrl,
        imageFormat: await _parseImageFormatArg(options.imageFormat)
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
    return fetch(artistOrLabelUrl)
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