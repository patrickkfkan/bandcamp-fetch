import { load as cheerioLoad } from 'cheerio';
import { ArticleCategorySection } from '../types/Article.js';
import { URLS } from '../utils/Constants.js';
import { isAbsoluteUrl, normalizeUrl } from '../utils/Parse.js';

export default class ArticleCategoryParser {

  static parseCategories(html: string): ArticleCategorySection[] {
    const $ = cheerioLoad(html);
    const dailyUrl = URLS.DAILY;

    const _parseSection = (section: any) => {
      const h = section.prev('h2');
      const title = h.length ? h.text() : '';
      const s: ArticleCategorySection = {
        name: section.attr('class'),
        title,
        sections: [],
        categories: []
      };
      section.children().each((i: number, c: any) => {
        const tag = c.tagName;
        c = $(c);
        if (tag === 'section') {
          const parsed = _parseSection($(c));
          if (parsed !== null && s.sections) {
            s.sections.push(parsed);
          }
        }
        else if (tag === 'div') {
          c.find('a').each((i: number, a: any) => {
            a = $(a);
            let url = a.attr('href');
            if (!isAbsoluteUrl(url)) {
              url = normalizeUrl(url, dailyUrl);
            }
            if (s.categories) {
              s.categories.push({
                url,
                name: a.text()
              });
            }
          });

        }
      });
      if (s.sections?.length === 0) {
        delete s.sections;
      }
      if (s.categories?.length === 0) {
        delete s.categories;
      }
      if (!s.sections && !s.categories) {
        return null;
      }

      return s;
    };

    const sections = $('#daily-view-all').children('section');
    const results: ArticleCategorySection[] = [];
    sections.each((i, section) => {
      const parsed = _parseSection($(section));
      if (parsed !== null) {
        results.push(parsed);
      }
    });

    return results;
  }
}
