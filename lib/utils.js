const querystring = require('querystring');
const {URL} = require('url');

function getUrl(href, baseUrl) {
    if (baseUrl === undefined) {
        baseUrl = getSiteUrl();
    }
    return new URL(href, baseUrl).toString();
}

function getSiteUrl() {
    return 'https://bandcamp.com';
}

function getDiscoverUrl(params = {}) {
    const qs = {
        s: params.sortBy || 'top',
        p: params.page || 0,
    };
    if (params.genre) {
        qs.g = params.genre;

        if (params.subgenre) {
            qs.t = params.subgenre;
        }
    }
    if (params.location !== undefined) {
        qs.gn = params.location;
    }
    if (params.format) {
        qs.f = params.format;
    }
    if (qs.s === 'rec' && params.artistRecommendationType) {
        qs.r = params.artistRecommendationType;
    }
    if (params.time !== undefined) {
        qs.w = params.time;
    }
    return getSiteUrl() + '/api/discover/3/get_web?' + querystring.encode(qs);
}

function reformatImageUrl(imageUrl, imageFormat) {
    if (typeof imageUrl === 'string' && imageFormat !== null) {
        // regex taken from:
        // https://github.com/masterT/bandcamp-scraper/blob/master/lib/htmlParser.js
        return imageUrl.replace(/_\d{1,3}\./, `_${imageFormat.id}.`);
    }
    else if (typeof imageUrl === 'string') {
        return imageUrl;
    }
    else {
        return null;
    }
}

function stripTags(str) {
    // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
    return str.replace(/(<([^>]+)>)/gi, '');
}

function stripLineBreaks(str) {
    return str.replace(/(\r\n|\n|\r)/gm, ' ');
}

function brToNewLine(str) {
    // https://stackoverflow.com/questions/5959415/jquery-javascript-regex-replace-br-with-n
    return str.replace(/<br\s*[\/]?>/gi, '\n');
}

function substrAfter(str, after) {
    let afterIndex = str.indexOf(after);
    if (afterIndex >= 0) {
        return str.substr(afterIndex + after.length);
    }
    else {
        return null;
    }
}

function substrBefore(str, before) {
    let beforeIndex = str.indexOf(before);
    if (beforeIndex >= 0) {
        return str.substr(0, beforeIndex);
    }
    else {
        return null;
    }
}

function splitUrl(url) {
    const _url = new URL(url);
    return {
        base: _url.protocol + '//' + _url.host,
        path: _url.pathname,
        query: _url.search,
        hash: _url.hash
    };
}

function getSearchUrl(params = {}) {
    const qs = {
        q: params.query,
        page: params.page || 1,
    };
    return getSiteUrl() + '/search?' + querystring.encode(qs);
}

function stripMultipleWhitespaces(str) {
    return str.replace(/\s+/g, ' ');
}

function isAbsoluteUrl(url) {
    const isAbsolute = new RegExp('^([a-z]+://|//)', 'i');
    return isAbsolute.test(url);
}

function getAllShowsUrl() {
    return getSiteUrl() + '/api/bcweekly/3/list';
}

function getShowIdFromUrl(showUrl) {
    const _url = splitUrl(showUrl);
    let qs = _url.query;
    if (qs.startsWith('?')) {
        qs = qs.substr(1);
    }
    const pqs = querystring.parse(qs);
    return pqs && pqs.show ? pqs.show : null;
}

function getShowUrl(showId) {
    return getSiteUrl() + '/?show=' + showId;
}

function getDailyUrl(params = {}) {
    let url = params.categoryUrl || 'https://daily.bandcamp.com';
    if (params.page) {
        url += '?page=' + params.page;
    }
    return url;
}

function getReleasesByTagUrl(tagUrl) {
    return `${tagUrl}?tab=all_releases`;
}

function getDigDeeperUrl() {
    return 'https://bandcamp.com/api/hub/2/dig_deeper';
}

function getSearchTagUrl() {
    return 'https://bandcamp.com/api/fansignup/1/search_tag';
}

function getSearchLocationUrl() {
    return 'https://bandcamp.com/api/location/1/geoname_search';
}

module.exports = { 
    getUrl,
    getSiteUrl,
    getDiscoverUrl,
    reformatImageUrl,
    stripTags,
    stripLineBreaks,
    brToNewLine,
    substrAfter,
    substrBefore,
    splitUrl,
    getSearchUrl,
    stripMultipleWhitespaces,
    isAbsoluteUrl,
    getAllShowsUrl,
    getShowIdFromUrl,
    getShowUrl,
    getDailyUrl,
    getReleasesByTagUrl,
    getDigDeeperUrl,
    getSearchTagUrl,
    getSearchLocationUrl
};