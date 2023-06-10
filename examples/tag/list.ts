import bcfetch from '../../';
import util from 'util';

bcfetch.tag.list().then((results) => {
  console.log(util.inspect(results, false, null, false));
});
