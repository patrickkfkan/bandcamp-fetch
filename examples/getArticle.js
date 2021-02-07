const bcfetch = require('../');
const util = require('util');

const articleUrl = 'https://daily.bandcamp.com/best-ambient/best-new-ambient-march-2018';

const options = {
    includeRawData: false
};

bcfetch.getArticle(articleUrl, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});