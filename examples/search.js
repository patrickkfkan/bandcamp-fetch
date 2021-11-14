const bcfetch = require('../');
const util = require('util');

const options = {
    albumImageFormat: 'art_app_large',
    artistImageFormat: 'bio_featured',
}

function doSearch(itemType) {
    const params = {
        query: 'Coeur de pirate',
        page: 1,
        itemType
    }

    bcfetch.search(params, options).then( results => {
        let title = `Search query: ${ params.query }. Item type: ${ itemType || 'all' }. ${ results.items.length } results.`;
        console.log(title);
        console.log('-'.repeat(title.length));
        console.log(util.inspect(results, false, null, false));
        console.log('');
    });
}

doSearch();
doSearch('artistsAndLabels');
doSearch('albums');
doSearch('tracks');
