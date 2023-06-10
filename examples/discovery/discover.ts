import bcfetch from '../../';
import util from 'util';

const params = {
  genre: 'ambient',
  albumImageFormat: 2,
  artistImageFormat: 'bio_featured'
};

bcfetch.discovery.discover(params).then((result) => {
  console.log(util.inspect(result, false, null, false));
});
