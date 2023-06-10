import bcfetch from '../../';
import util from 'util';

const username = 'patrickkfkan';

const params = {
  target: username,
  imageFormat: 'art_app_large'
};

bcfetch.fan.getWishlist(params).then(async (results) => {
  console.log(util.inspect(results, false, null, false));

  if (results.continuation) {
    console.log('Fetching more by continuation...');

    const moreResults = await bcfetch.fan.getWishlist({
      ...params,
      target: results.continuation
    });
    console.log(util.inspect(moreResults, false, null, false));
  }
});
