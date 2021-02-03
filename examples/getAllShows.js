const bcfetch = require('../');
const util = require('util');

bcfetch.getAllShows().then( results => {
    console.log(util.inspect(results, false, null, false));
});