const bcfetch = require('../');
const util = require('util');

const params = {
    categoryUrl: 'https://daily.bandcamp.com/best-ambient',
    page: 2
}

bcfetch.getArticleList(params).then( results => {
    console.log(util.inspect(results, false, null, false));
});