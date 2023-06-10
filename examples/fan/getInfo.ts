import bcfetch from '../../';
import util from 'util';

const username = 'patrickkfkan';

const params = {
  username,
  imageFormat: 'bio_screen'
};

bcfetch.fan.getInfo(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
