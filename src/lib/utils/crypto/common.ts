// NOTICE: All code in this folder has been ported from https://github.com/Metalnem/bandcamp-downloader, licensed under MIT, see the license here https://github.com/Metalnem/bandcamp-downloader/blob/main/LICENSE
// + ../Strings.ts
import crypto from 'crypto';

export function hmacSha256(key: string, source: string): string {
  return crypto.createHmac('sha256', key).update(source).digest('hex');
}

export function hmacSha1(key: string, source: string): string {
  return crypto.createHmac('sha1', key).update(source).digest('hex');
}
