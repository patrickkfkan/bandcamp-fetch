import { lastCharToInt, reverseString } from '../Strings.js';
import { hmacSha256 } from './common.js';

const KEY_V2 =
  'YvtxhlQJoACdthoZcZaFlxmc62BN2HC5' +
  '7hwG64vSd90EPXfIetlovBmh9cfHkUN7' +
  'gvNj6iEbqQReseKxFcrjaESLZDxQbva4' +
  'jIBht7R27dmrussXayASiJ0YPnXZIJZs';

export default {
  deriveKey(dm: string): string {
    let key = KEY_V2;
    const iterations = lastCharToInt(dm);

    for (let i = 0; i < iterations; i++) {
      const mid = Math.floor(key.length / 2);
      const s1 = reverseString(key.substring(0, mid));
      const s2 = reverseString(key.substring(mid));
      key = hmacSha256(key, s1 + s2);
    }

    return hmacSha256(key, dm);
  }
};
