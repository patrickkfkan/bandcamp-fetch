import bcfetch from '../../';
import util from 'util';

bcfetch.discovery.getAvailableOptions().then((results) => {
  console.log(util.inspect(results, false, null, false));
});
