import bcfetch from '../../';
import util from 'util';

const tagUrl = 'https://bandcamp.com/tag/dark-ambient';

bcfetch.tag.getReleasesAvailableFilters(tagUrl).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
