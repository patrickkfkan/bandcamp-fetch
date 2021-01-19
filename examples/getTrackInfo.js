const bcfetch = require('../');
const util = require('util');

const trackUrl = 'https://musique.coeurdepirate.com/track/tes-belle';

const options = {
    albumImageFormat: 'art_app_large',
    artistImageFormat: 'bio_featured',
    includeRawData: false
}

bcfetch.getTrackInfo(trackUrl, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});