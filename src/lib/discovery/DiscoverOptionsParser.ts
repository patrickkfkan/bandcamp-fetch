import { load as cheerioLoad } from 'cheerio';
import { DiscoverOptions } from '../types/Discovery.js';
import { ParseError } from '../utils/Parse.js';

export default class DiscoverOptionsParser {
  static parseOptions(html: string): DiscoverOptions {
    const $ = cheerioLoad(html);
    const blob = $('#pagedata[data-blob]').attr('data-blob');
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
    const options = parsed?.discover_2015?.options;
    if (options && typeof options === 'object') {
      const result: DiscoverOptions = {
        genres: [],
        subgenres: {},
        sortBys: [],
        artistRecommendationTypes: [],
        locations: [],
        formats: [],
        times: []
      };
      if (Array.isArray(options.r)) {
        result.artistRecommendationTypes = options.r.map((r: any) => ({ name: r.name, value: r.value }));
      }
      if (Array.isArray(options.l)) {
        result.locations = options.l.map((l: any) => ({ name: l.name, value: l.value }));
      }
      if (Array.isArray(options.w)) {
        result.times = options.w.map((w: any) => ({ name: w.name, value: w.value, title: w.title }));
      }
      if (Array.isArray(options.f)) {
        result.formats = options.f.map((f: any) => ({ name: f.name, value: f.value }));
      }
      if (Array.isArray(options.s)) {
        result.sortBys = options.s.map((s: any) => ({ name: s.name, value: s.value }));
      }
      if (typeof options.t === 'object') {
        for (const [ genre, subgenres ] of Object.entries(options.t)) {
          if (Array.isArray(subgenres)) {
            result.subgenres[genre] = subgenres.map((sg: any) => ({ name: sg.name, value: sg.value }));
          }
        }
      }
      if (Array.isArray(options.g)) {
        result.genres = options.g.map((g: any) => ({ name: g.name, value: g.value }));
      }
      return result;
    }

    throw new ParseError('Failed to parse discover options: blob is missing or has invalid \'discover_2015.options\' field.', parsed);
  }
}
