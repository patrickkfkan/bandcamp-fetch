import bcfetch from '../../';
import util from 'util';

const username = 'dugout';

const params = {
  target: username,
  imageFormat: 'art_app_large'
};

bcfetch.fan.getCollection(params).then(async (results) => {
  console.log(util.inspect(results, false, null, false));

  if (results.continuation) {
    console.log('Fetching more by continuation...');

    const moreResults = await bcfetch.fan.getCollection({
      ...params,
      target: results.continuation
    });
    console.log(util.inspect(moreResults, false, null, false));
  }
});
