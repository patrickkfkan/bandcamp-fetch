const bcfetch = require('../lib');
const util = require('util');

const username = 'patrickkfkan';

const options = {
    imageFormat: 'art_app_large'
}

bcfetch.getFanWishlist(username, options).then( async (results) => {
    console.log(util.inspect(results, false, null, false));

    if (results.continuationToken) {
        console.log('Fetching more with continuation token...');

        const moreResults = await bcfetch.getFanWishlist(results.continuationToken);
        console.log(util.inspect(moreResults, false, null, false));
    }
});
