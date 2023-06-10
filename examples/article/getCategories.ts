import bcfetch from '../../';
import util from 'util';

bcfetch.article.getCategories().then((results) => {
  console.log(util.inspect(results, false, null, false));
});
