import bcfetch from '../../';
import util from 'util';

const params = {
  categoryUrl: 'https://daily.bandcamp.com/best-ambient',
  page: 2
};

bcfetch.article.list(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
