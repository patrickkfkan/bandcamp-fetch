const bcfetch = require('../');
const util = require('util');

const labelUrl = 'https://mergerecords.bandcamp.com';

const options = {
    imageFormat: 'art_app_large',
}

bcfetch.getLabelArtists(labelUrl, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});