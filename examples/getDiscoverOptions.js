const bcfetch = require('../');
const util = require('util');

bcfetch.getDiscoverOptions().then( results => {
    console.log(util.inspect(results, false, null, false));
});