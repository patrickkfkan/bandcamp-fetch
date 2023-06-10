import bcfetch from '../../';
import util from 'util';

const articleUrl = 'https://daily.bandcamp.com/best-ambient/best-new-ambient-march-2018';

const params = {
  articleUrl,
  includeRawData: false
};

bcfetch.article.getArticle(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
