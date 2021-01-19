const bcfetch = require('../');
const util = require('util');

const artistUrl = 'https://musique.coeurdepirate.com';
const labelUrl = 'https://randsrecords.bandcamp.com';

const options = {
    imageFormat: 'art_app_large',
}

bcfetch.getDiscography(artistUrl, options).then( results => {
    console.log('Artist URL: ' + artistUrl);
    console.log(util.inspect(results, false, null, false));
    console.log();
});

bcfetch.getDiscography(labelUrl, options).then( results => {
    console.log('Label URL: ' + labelUrl);
    console.log(util.inspect(results, false, null, false));
    console.log();
});