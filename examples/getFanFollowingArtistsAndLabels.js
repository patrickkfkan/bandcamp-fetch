const bcfetch = require('../lib');
const util = require('util');

const username = 'patrickkfkan';

const options = {
    imageFormat: 'bio_featured'
}

bcfetch.getFanFollowingArtistsAndLabels(username, options).then( async (results) => {
    console.log(util.inspect(results, false, null, false));

    if (results.continuationToken) {
        console.log('Fetching more with continuation token...');

        const moreResults = await bcfetch.getFanFollowingArtistsAndLabels(results.continuationToken);
        console.log(util.inspect(moreResults, false, null, false));
    }
});
