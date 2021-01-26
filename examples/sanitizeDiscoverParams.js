const bcfetch = require('../');

const params = {
    genre: 'ambient'
}

bcfetch.sanitizeDiscoverParams(params).then( results => {
    console.log(results);
});