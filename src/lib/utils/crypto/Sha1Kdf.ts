import { hmacSha1 } from './common.js';

export default {
  deriveKey(algorithm: number, dm: string | null): string {
    if (dm == null) {
      return '';
    }

    if (algorithm === 1) {
      return dm.substring(0, 19) + dm.substring(22);
    }

    let key = dm.toUpperCase();
    const floor = Math.floor(key.length / 2);

    const reverseString = (str: string) => str.split('').reverse().join('');

    key =
      reverseString(key.substring(0, floor)) +
      reverseString(key.substring(floor));
    key = key.substring(0, 15) + key.substring(19);
    key = key.replace(/4/g, '1');
    key = hmacSha1('bntpd', key);

    return key.replace(/3/g, '5');
  }
};
