const bcfetch = require('../');
const util = require('util');

const tagUrl = 'https://bandcamp.com/tag/dark-ambient';

const params = {
    filters: {
        tags: [ 'dark-ambient', 'electronica' ],
        sort: 'random'
    },
    page: 2
};

const options = {
    imageFormat: 2
}

bcfetch.getReleasesByTag(tagUrl, params, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});


