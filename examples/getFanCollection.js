const bcfetch = require('../lib');
const util = require('util');

const username = 'dugout';

const options = {
    imageFormat: 'art_app_large'
}

bcfetch.getFanCollection(username, options).then( async (results) => {
    console.log(util.inspect(results, false, null, false));

    if (results.continuationToken) {
        console.log('Fetching more with continuation token...');

        const moreResults = await bcfetch.getFanCollection(results.continuationToken);
        console.log(util.inspect(moreResults, false, null, false));
    }
});
