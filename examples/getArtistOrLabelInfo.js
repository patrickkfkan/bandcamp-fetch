const bcfetch = require('../');
const util = require('util');

const artistUrl = 'https://macmccaughan.bandcamp.com';
const labelUrl = 'https://mergerecords.bandcamp.com';

const options = {
    imageFormat: 'art_app_large',
}

bcfetch.getArtistOrLabelInfo(artistUrl, Object.assign({ labelId: '1415932000' }, options)).then( results => {
    console.log('Artist URL: ' + artistUrl);
    console.log(util.inspect(results, false, null, false));
    console.log();
});

bcfetch.getArtistOrLabelInfo(labelUrl, options).then( results => {
    console.log('Label URL: ' + labelUrl);
    console.log(util.inspect(results, false, null, false));
    console.log();
});