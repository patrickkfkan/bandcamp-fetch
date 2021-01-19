const bcfetch = require('../');
const util = require('util');

const params = {
    genre: 'ambient'
}

const options = {
    albumImageFormat: 2,
    artistImageFormat: 'bio_featured'
};

bcfetch.discover(params, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});