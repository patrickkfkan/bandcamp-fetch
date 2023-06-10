import bcfetch from '../../';
import util from 'util';

bcfetch.show.list().then((results) => {
  console.log(util.inspect(results, false, null, false));
});
