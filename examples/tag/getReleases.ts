import bcfetch from '../../';
import util from 'util';

const tagUrl = 'https://bandcamp.com/tag/dark-ambient';

const params = {
  tagUrl,
  filters: {
    tags: [ 'electronica' ],
    sort: 'random'
  },
  page: 2,
  imageFormat: 2,
  useHardcodedDefaultFilters: true
};

bcfetch.tag.getReleases(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
