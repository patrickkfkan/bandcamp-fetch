const bcfetch = require('../');
const util = require('util');

bcfetch.getTags().then( results => {
    console.log(util.inspect(results, false, null, false));
});