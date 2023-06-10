import { load as cheerioLoad } from 'cheerio';
import Tag, { TagList } from '../types/Tag';
import { normalizeUrl } from '../utils/Parse';

export default class TagListParser {
  static parseTags(html: string): TagList {
    const $ = cheerioLoad(html);

    const _findTag = (tagUrl: string, tagName: string, tags: Omit<Tag, 'type'>[]) => {
      return tags.find((t) => t.url === tagUrl && t.name === tagName);
    };

    const _parseCloud = (id: string) => {
      const cloud = $(`#${id}`);
      const tagsInCloud: Omit<Tag, 'type'>[] = [];
      cloud.find('a.tag').each((index, link) => {
        const linkEl = $(link);
        const name = linkEl.text().trim();
        const href = linkEl.attr('href');
        if (href) {
          const url = normalizeUrl(href);
          if (name && href !== '/tag/' && !_findTag(url, name, tagsInCloud)) { // Skip blank or repeating tags
            tagsInCloud.push({
              name,
              url
            });
          }
        }
      });
      return tagsInCloud;
    };

    return {
      tags: _parseCloud('tags_cloud'),
      locations: _parseCloud('locations_cloud')
    };
  }
}
