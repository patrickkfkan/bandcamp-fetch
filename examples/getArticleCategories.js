const bcfetch = require('../');
const util = require('util');

bcfetch.getArticleCategories().then( results => {
    console.log(util.inspect(results, false, null, false));
});