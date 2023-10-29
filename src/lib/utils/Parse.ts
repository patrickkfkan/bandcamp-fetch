import { load as cheerioLoad } from 'cheerio';
import Label from '../types/Label.js';
import { URLS } from './Constants.js';
import UserKind from '../types/UserKind.js';
import { ImageFormat } from '../types/Image.js';

export interface BackToLabel {
  text: string | null;
  url: string;
}

export interface UrlParts {
  base: string;
  path: string;
  query: string;
  hash: string;
  searchParams: URLSearchParams;
}

type CheerioSelector = ReturnType<typeof cheerioLoad>;

/**
 * @internal
 *
 * @param $
 * @returns
 */
export function parseLabelFromBackToLabelLink($: CheerioSelector): Label | null {
  const labelLink = $('.back-to-label-link');
  if (labelLink.length) {
    const linkText = labelLink.find('.back-link-text').html();
    const labelName = linkText &&
      (substrAfter(linkText, '<br/>') ||
        substrAfter(linkText, '<br>') ||
        substrBefore(linkText, ' に戻る') ||
        substrBefore(linkText, ' のアイテムをもっと聴く'));
    const linkHref = labelLink.attr('href');
    const labelHref = linkHref && splitUrl(linkHref).base;

    return labelName && labelHref ? {
      type: 'label',
      name: labelName,
      url: labelHref
    } : null;
  }

  return null;
}

export function parsePublisher(json: any, imageFormat: ImageFormat | null): UserKind | null {
  if (json.publisher) {
    const imageUrl = reformatImageUrl(json.publisher.image, imageFormat);
    const publisher: UserKind = {
      name: json.publisher.name,
      url: json.publisher['@id'],
      description: json.publisher.description
    };
    if (imageUrl) {
      publisher.imageUrl = imageUrl;
    }
    return publisher;
  }
  return null;
}

/**
 * @internal
 *
 * @param url
 * @param baseUrl
 * @returns
 */
export function normalizeUrl(url: string, baseUrl?: string): string;
export function normalizeUrl(url?: string, baseUrl?: string): string | null {
  if (!url) {
    return null;
  }
  if (isAbsoluteUrl(url)) {
    return url;
  }
  if (!baseUrl) {
    baseUrl = URLS.SITE_URL;
  }
  return new URL(url, baseUrl).toString();
}

export function getAdditionalPropertyValue<T = string>(o: Record<string, any>, propName: string): T | undefined {
  if (Array.isArray(o.additionalProperty)) {
    const p = o.additionalProperty.find((prop) => prop.name === propName);
    if (p?.value !== undefined) {
      return p.value;
    }
  }
  return undefined;
}

export function isAbsoluteUrl(url: string) {
  const isAbsolute = new RegExp('^([a-z]+://|//)', 'i');
  return isAbsolute.test(url);
}

export function substrAfter(str: string, after: string): string | null {
  const afterIndex = str.indexOf(after);
  return afterIndex >= 0 ? str.substring(afterIndex + after.length) : null;
}

export function substrBefore(str: string, before: string): string | null {
  const beforeIndex = str.indexOf(before);
  return beforeIndex >= 0 ? str.substring(0, beforeIndex) : null;
}

export function splitUrl(url: string): UrlParts {
  const urlObj = new URL(url);
  return {
    base: `${urlObj.protocol}//${urlObj.host}`,
    path: urlObj.pathname,
    query: urlObj.search,
    hash: urlObj.hash,
    searchParams: urlObj.searchParams
  };
}

export function stripTags(str: string): string {
  // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
  return str.replace(/(<([^>]+)>)/gi, '');
}

export function stripLineBreaks(str: string): string {
  return str.replace(/(\r\n|\n|\r)/gm, ' ');
}

export function stripMultipleWhitespaces(str: string) {
  return str.replace(/\s+/g, ' ');
}

export function brToNewLine(str: string): string {
  // https://stackoverflow.com/questions/5959415/jquery-javascript-regex-replace-br-with-n
  return str.replace(/<br\s*[/]?>/gi, '\n');
}

/**
* @internal
* Takes an image URL and returns one that corresponds to `imageFormat`.
* @param imageUrl
* @param imageFormat
* @returns
*/
export function reformatImageUrl(imageUrl?: string | null, imageFormat?: ImageFormat | null): string | null {
  if (imageUrl) {
    // Regex from: https://github.com/masterT/bandcamp-scraper/blob/master/lib/htmlParser.js
    return imageFormat ? imageUrl.replace(/_\d{1,3}\./, `_${imageFormat.id}.`) : imageUrl;
  }

  return null;
}

export class ParseError extends Error {
  parseTarget?: string;
  cause?: Error;

  constructor(message: string, parseTarget?: string, cause?: any) {
    super(message);
    this.parseTarget = parseTarget;
    if (cause) {
      this.cause = cause instanceof Error ? cause : Error(cause.toString());
    }
  }
}
