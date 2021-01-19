const bcfetch = require('../');
const util = require('util');

const albumUrl = 'https://musique.coeurdepirate.com/album/blonde';

const options = {
    albumImageFormat: 'art_app_large',
    artistImageFormat: 'bio_featured',
    includeRawData: false
}

bcfetch.getAlbumInfo(albumUrl, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});