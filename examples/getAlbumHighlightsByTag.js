const bcfetch = require('../');
const util = require('util');

const tagUrl = 'https://bandcamp.com/tag/noise';

const options = {
    imageFormat: 'art_app_large',
}

bcfetch.getAlbumHighlightsByTag(tagUrl, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});