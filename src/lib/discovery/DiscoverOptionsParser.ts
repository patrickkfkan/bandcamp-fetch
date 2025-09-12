import { load as cheerioLoad } from 'cheerio';
import { ParseError } from '../utils/Parse.js';
import { type TagsAndLocations, type DiscoverOptions } from '../types/Discovery.js';
import { URLS } from '../utils/Constants.js';

export default class DiscoverOptionsParser {
  static parseOptions(html: string): DiscoverOptions {
    const $ = cheerioLoad(html);
    const blob = $('#DiscoverApp[data-blob]').attr('data-blob');
    if (!blob) {
      throw new ParseError('Failed to parse discover options: blob not found in data.', html);
    }
    let parsed;
    try {
      parsed = JSON.parse(blob);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse discover options: JSON error.', blob, error);
    }

    const options = parsed?.appData?.initialState;
    if (options && typeof options === 'object') {
      const result: DiscoverOptions = {
        categories: [],
        genres: [],
        subgenres: {},
        customTags: [],
        sortBys: [],
        locations: [],
        times: []
      };
      if (Array.isArray(options.categories)) {
        result.categories = options.categories.map((cat: any) => ({ name: cat.label, value: cat.id, slug: cat.slug }));
      }
      if (Array.isArray(options.genres)) {
        result.genres = options.genres.map((genre: any) => ({ name: genre.label, value: genre.slug, id: genre.id }));
      }
      if (Array.isArray(options.categories)) {
        result.categories = options.categories.map((cat: any) => ({ name: cat.label, value: cat.id, slug: cat.slug }));
      }
      if (Array.isArray(options.slices)) {
        result.sortBys = options.slices.map((s: any) => ({ name: s.label, value: s.slug }));
      }
      if (Array.isArray(options.locations)) {
        result.locations = options.locations.map((loc: any) => ({ name: loc.label, value: loc.id }));
      }
      if (Array.isArray(options.times)) {
        result.times = options.times.map((t: any) => ({ name: t.label, value: t.id, slug: t.slug }));
      }
      if (Array.isArray(options.subgenres)) {
        for (const { id, label, slug, parentSlug } of options.subgenres) {
          if (id !== undefined && parentSlug && label && slug) {
            if (!result.subgenres[parentSlug]) {
              result.subgenres[parentSlug] = [];
            }
            result.subgenres[parentSlug].push({ name: label, value: slug, id });
          }
        }
      }
      return result;
    }

    throw new ParseError('Failed to parse discover options: blob is missing or has invalid \'appData.initialState\' field.', parsed);
  }

  static parseRecommendedTagsAndLocations(html: string) {
    const $ = cheerioLoad(html);

    const list: TagsAndLocations = {
      tags: [],
      locations: []
    };

    const _findTag = (value: string, name: string) => {
      return list.tags.find((t) => t.value === value && t.name === name);
    };

    const _findLoc = (value: number, name: string) => {
      return list.locations.find((l) => l.value === value && l.name === name);
    }

    $('section#discover').find('.pill-group').each((_, el) => {
      $(el).find('a.g-pill').each((_, link) => {
        const linkEl = $(link);
        const name = linkEl.text().trim();
        const href = linkEl.attr('href');
        const urlObj = href && new URL(href, URLS.SITE_URL);
        const linkFrom = urlObj && urlObj.searchParams.get('from');
        const isLocation = linkFrom === 'hp_disco_locations';
        const geo = isLocation && urlObj ? Number(urlObj.searchParams.get('loc')) : null;
        if (geo && !isNaN(geo) && !_findLoc(geo, name)) {
          list.locations.push({
            type: 'location',
            name,
            value: geo
          });
        }
        else if (!isLocation) {
          const tagMatch = href ? (/\/discover\/(.+)\?/).exec(href) : null;
          const value = tagMatch && tagMatch[1];
          if (value && !_findTag(value, name)) {
            list.tags.push({
              type: 'tag',
              name,
              value
            });
          }
        }
      });
    });

    return list;
  }
}
