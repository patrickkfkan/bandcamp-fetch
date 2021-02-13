const bcfetch = require('../');
const util = require('util');

const params = {
    q: 'Fin',
    limit: 10
}

bcfetch.searchLocation(params).then( results => {
    console.log(util.inspect(results, false, null, false));
});
