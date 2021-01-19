const bcfetch = require('../');
const util = require('util');

const params = {
    query: 'Coeur de pirate',
    page: 1
}

const options = {
    albumImageFormat: 'art_app_large',
    artistImageFormat: 'bio_featured',
}

bcfetch.search(params, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});