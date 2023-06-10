import bcfetch from '../../';
import util from 'util';

const labelUrl = 'https://mergerecords.bandcamp.com';

const params = {
  labelUrl,
  imageFormat: 'art_app_large'
};

bcfetch.band.getLabelArtists(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
