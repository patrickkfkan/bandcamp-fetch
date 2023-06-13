import ImageAPI from '../image/ImageAPI';
import { DiscoverOptions, DiscoverParams, DiscoverResult } from '../types/Discovery';
import { Cache, CacheDataType } from '../utils/Cache';
import { URLS } from '../utils/Constants';
import { FetchMethod, fetchPage } from '../utils/Fetch';
import Limiter from '../utils/Limiter';
import NameValuePair from '../utils/NameValuePair';
import DiscoverOptionsParser from './DiscoverOptionsParser';
import DiscoverResultParser from './DiscoverResultParser';

interface DiscoverRequestPayload {
  s: string; // SortyBy
  p: number; // Page
  g?: string; // Genre
  t?: string; // Subgenre
  gn?: string; // Location
  f?: string; // Format
  r?: string; // Artist recommedation type
  w?: number; // Time
}

export default class DiscoveryAPI {

  static async getAvailableOptions(): Promise<DiscoverOptions> {
    return Cache.getOrSet(CacheDataType.Constants, 'discoverOptions', async () => {
      const html = await fetchPage(URLS.SITE_URL);
      return DiscoverOptionsParser.parseOptions(html);
    });
  }

  static async sanitizeDiscoverParams(params?: DiscoverParams): Promise<DiscoverParams> {
    const options = await this.getAvailableOptions();

    const _getOptionValue = <T>(optArr: NameValuePair<T>[], value?: T, defaultIndex = 0) => {
      if (value !== undefined && optArr) {
        const opt = optArr.find((o) => o.value == value);
        if (opt) {
          return opt.value;
        }
      }
      if (optArr) {
        return optArr[defaultIndex].value;
      }

      return undefined;

    };

    const sanitized: DiscoverParams = {
      genre: _getOptionValue(options.genres, params?.genre),
      sortBy: _getOptionValue(options.sortBys, params?.sortBy),
      page: params?.page || 0
    };

    if (sanitized.sortBy !== 'rec' && sanitized.genre) {
      // Following only available when sortBy is not 'rec' (artist-recommend)
      const subgenreOptions = options.subgenres[sanitized.genre];
      if (subgenreOptions) { // `false` if genre is 'all'
        sanitized.subgenre = _getOptionValue(subgenreOptions, params?.subgenre);
      }
      // 'Time' option only available when there is effectively no subgenre (e.g. genre is 'all' or subgenre is 'all-metal')
      const timeAllowed = sanitized.subgenre === undefined || sanitized.subgenre == subgenreOptions[0].value;
      if (timeAllowed) {
        sanitized.time = _getOptionValue(options.times, params?.time, 1);
      }
      sanitized.location = _getOptionValue(options.locations, params?.location);
      sanitized.format = _getOptionValue(options.formats, params?.format);
    }
    else {
      sanitized.artistRecommendationType = _getOptionValue(options.artistRecommendationTypes, params?.artistRecommendationType);
    }

    return sanitized;
  }

  static async discover(params?: DiscoverParams): Promise<DiscoverResult> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await ImageAPI.getFormat(params?.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params?.artistImageFormat, 21)
    };

    const sanitizedParams = await this.sanitizeDiscoverParams(params);
    const resultParams = { ...sanitizedParams };
    // Passing an 'all' type subgenre (e.g. 'all-metal') in the discover url
    // Actually returns far fewer / zero results than without.
    // The Bandcamp site also does not seem to include it in its discover requests...
    if (sanitizedParams.time !== undefined) {
      // If 'time' exists in sanitized params, then we have an 'all' type subgenre
      // - refer to sanitizeDiscoverParams()
      delete sanitizedParams.subgenre;
    }

    const payload = this.getDiscoverRequestPayload(sanitizedParams);
    const json = await fetchPage(URLS.DISCOVER_URL, true, FetchMethod.GET, payload);
    return DiscoverResultParser.parseDiscoverResult(json, opts, resultParams);
  }

  /**
   * @internal
   */
  protected static getDiscoverRequestPayload(params: DiscoverParams): DiscoverRequestPayload {
    const result: DiscoverRequestPayload = {
      s: params.sortBy || 'top',
      p: params.page || 0
    };
    if (params.genre) {
      result.g = params.genre;

      if (params.subgenre) {
        result.t = params.subgenre;
      }
    }
    if (params.location !== undefined) {
      result.gn = params.location;
    }
    if (params.format) {
      result.f = params.format;
    }
    if (result.s === 'rec' && params.artistRecommendationType) {
      result.r = params.artistRecommendationType;
    }
    if (params.time !== undefined) {
      result.w = params.time;
    }

    return result;
  }
}

export class LimiterDiscoveryAPI extends DiscoveryAPI {

  static async getAvailableOptions(): Promise<DiscoverOptions> {
    return Limiter.schedule(() => super.getAvailableOptions());
  }

  static async sanitizeDiscoverParams(params: DiscoverParams): Promise<DiscoverParams> {
    return Limiter.schedule(() => super.sanitizeDiscoverParams(params));
  }

  static async discover(params: DiscoverParams): Promise<DiscoverResult> {
    return Limiter.schedule(() => super.discover(params));
  }
}
