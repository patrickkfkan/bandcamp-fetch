const bcfetch = require('../');
const util = require('util');

const showUrl = 'https://bandcamp.com/?show=421';

bcfetch.getShow(showUrl).then( results => {
    console.log(util.inspect(results, false, null, false));
});