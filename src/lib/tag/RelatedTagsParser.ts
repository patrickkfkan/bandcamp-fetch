import { type RelatedTags } from '../types/Tag.js';
import type Tag from '../types/Tag.js';
import { ParseError } from '../utils/Parse.js';

export default class RelatedTagsParser {
  static parseRelatedTags(json: any) {
    if (typeof json === 'object') {
      const result: RelatedTags = {
        single: [],
        combo: []
      };
      if (json.single_results && Array.isArray(json.single_results)) {
        result.single = (json.single_results as any[]).reduce<
          RelatedTags['single']
        >((acc, v) => {
          if (
            typeof v === 'object' &&
            v.tag &&
            v.tag.name &&
            v.tag.norm_name &&
            Array.isArray(v.related_tags)
          ) {
            const tag: Tag = {
              type: 'tag',
              name: v.tag.name,
              value: v.tag.norm_name
            };
            acc.push({
              tag,
              related: this.#parseTags(v.related_tags)
            });
          }
          return acc;
        }, []);
      }
      if (json.combo_results && Array.isArray(json.combo_results)) {
        result.combo = this.#parseTags(json.combo_results);
      }
      return result;
    }

    throw new ParseError('Failed to parse related tags: invalid data', json);
  }

  static #parseTags(tags: any[]) {
    return tags.reduce<Tag[]>((result, t) => {
      if (typeof t === 'object' && t.name && t.norm_name) {
        result.push({
          type: 'tag',
          name: t.name,
          value: t.norm_name
        });
      }
      return result;
    }, []);
  }
}
