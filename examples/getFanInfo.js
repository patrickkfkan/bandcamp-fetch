const bcfetch = require('../lib');
const util = require('util');

const username = 'patrickkfkan';

const options = {
    imageFormat: 'bio_screen'
}

bcfetch.getFanInfo(username, options).then( results => {
    console.log(util.inspect(results, false, null, false));
});
