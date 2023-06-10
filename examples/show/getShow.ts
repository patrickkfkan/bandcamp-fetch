import bcfetch from '../../';
import util from 'util';

const showUrl = 'https://bandcamp.com/?show=421';

const params = {
  showUrl
};

bcfetch.show.getShow(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
