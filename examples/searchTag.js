const bcfetch = require('../');
const util = require('util');

const params = {
    q: 'ambient',
    limit: 10
}

bcfetch.searchTag(params).then( results => {
    console.log(util.inspect(results, false, null, false));
});
