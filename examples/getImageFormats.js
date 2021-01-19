const bcfetch = require('../');

bcfetch.getImageFormats('album').then( results => { 
    console.log('Album image formats:');
    console.log(results);
    console.log();
});

bcfetch.getImageFormats('artist').then( results => { 
    console.log('Artist image formats:');
    console.log(results);
    console.log();
});