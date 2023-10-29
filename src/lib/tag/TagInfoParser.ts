import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import Tag from '../types/Tag.js';
import { ParseError, normalizeUrl } from '../utils/Parse.js';

export default class TagInfoParser {

  static parseInfo(html: string, tagUrl: string): Tag {
    const $ = cheerioLoad(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    let parsed;
    try {
      parsed = JSON.parse(blob);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse tag info: JSON error in data-blob.', html, error);
    }
    if (typeof parsed?.hub === 'object') {
      const tag: Tag = {
        type: 'tag',
        name: parsed.hub.name,
        url: tagUrl,
        value: parsed.hub.norm_name,
        related: []
      };
      if (Array.isArray(parsed.hub.related_tags)) {
        tag.related = parsed.hub.related_tags.map((related: any) => ({
          type: 'tag',
          name: related.name,
          url: normalizeUrl(related.url),
          value: related.norm_name,
          isLocation: related.isloc
        }));
      }
      return tag;
    }

    throw new ParseError('Failed to parse tag info: hub data missing or invalid.', html);
  }
}
