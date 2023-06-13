import ImageAPI from '../image/ImageAPI';
import { ImageFormat } from '../types/Image';
import Tag, { AlbumHighlightsByTag, ReleasesByTag, TagList } from '../types/Tag';
import { URLS } from '../utils/Constants';
import { FetchMethod, fetchPage } from '../utils/Fetch';
import Limiter from '../utils/Limiter';
import { ParseError, normalizeUrl, splitUrl } from '../utils/Parse';
import AlbumHighlightsByTagParser from './AlbumHighlightsByTagParser';
import ReleasesByTagParser from './ReleasesByTagParser';
import TagInfoParser from './TagInfoParser';
import TagListParser from './TagListParser';

export interface TagAPIGetAlbumHighlightsParams {
  tagUrl: string;
  imageFormat?: string | number | ImageFormat;
}

export interface TagAPIGetReleasesParams {
  tagUrl: string;
  imageFormat?: string | number | ImageFormat;
  useHardcodedDefaultFilters?: boolean;
  filters?: Record<string, string | number | Array<string | number>>;
  page?: number;
}

export default class TagAPI {

  static async list(): Promise<TagList> {
    const html = await fetchPage(normalizeUrl('tags'));
    return TagListParser.parseTags(html);
  }

  static async getInfo(tagUrl: string): Promise<Tag> {
    const html = await fetchPage(tagUrl);
    return TagInfoParser.parseInfo(html, tagUrl);
  }

  static async getAlbumHighlights(params: TagAPIGetAlbumHighlightsParams): Promise<AlbumHighlightsByTag[]> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await ImageAPI.getFormat(params.imageFormat, 9)
    };

    const html = await fetchPage(params.tagUrl);
    return AlbumHighlightsByTagParser.parseHighlights(html, opts);
  }

  static async getReleasesAvailableFilters(tagUrl: string): Promise<ReleasesByTag.Filter[]> {
    const filterValueNames = await this.getReleaseFilterValueNames(tagUrl);
    const html = await fetchPage(tagUrl);
    return ReleasesByTagParser.parseFilters(html, filterValueNames);
  }

  static async getReleases(params: TagAPIGetReleasesParams): Promise<ReleasesByTag> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await ImageAPI.getFormat(params.imageFormat, 9)
    };

    const _getDefaultFilters = async (tagUrl: string) => {
      if (params.useHardcodedDefaultFilters) {
        let tagUrlPath = splitUrl(tagUrl).path;
        if (tagUrlPath.endsWith('/')) {
          tagUrlPath = tagUrlPath.substring(0, tagUrlPath.length - 1);
        }
        const tagValue = tagUrlPath.split('/').pop();

        return Promise.resolve({
          tags: [ tagValue ],
          location: 0,
          format: 'all',
          sort: 'pop'
        });
      }

      const filterOptions = await this.getReleasesAvailableFilters(tagUrl);
      const defaultFilters: TagAPIGetReleasesParams['filters'] = {};
      filterOptions.forEach((filter) => {
        const selectedOption = filter.options.find((o) => o.selected);
        const defaultOption = filter.options.find((o) => o.default);
        if (selectedOption) {
          if (filter.name === 'tags') {
            defaultFilters[filter.name] = [ selectedOption.value ];
          }
          else {
            defaultFilters[filter.name] = selectedOption.value;
          }
        }
        else if (defaultOption) {
          defaultFilters[filter.name] = defaultOption.value;
        }
      });

      return defaultFilters;

    };

    const defaultFilters = await _getDefaultFilters(params.tagUrl);
    const tagsFilter = Array.isArray(defaultFilters.tags) ? [ ...defaultFilters.tags ] : [];
    if (params?.filters?.tags && Array.isArray(params.filters.tags)) {
      params.filters.tags.forEach((tag) => {
        if (!tagsFilter.includes(tag)) {
          tagsFilter.push(tag);
        }
      });
    }
    const paramFilters = params.filters ? {
      ...defaultFilters,
      ...params.filters,
      tags: tagsFilter
    } : defaultFilters;

    const postData = {
      filters: paramFilters,
      page: params.page || 1
    };

    const json = await fetchPage(URLS.DIG_DEEPER, true, FetchMethod.POST, postData);
    return ReleasesByTagParser.parseReleases(json, opts);
  }

  /**
   * @internal
   */
  protected static async getReleaseFilterValueNames(tagUrl: string) {
    const url = `${tagUrl}?tab=all_releases`;
    const html = await fetchPage(url);
    const path = ReleasesByTagParser.parseHubJSPath(html);
    if (!path) {
      throw new ParseError(`Failed to obtain Hub JS path from ${url}`, html);
    }
    const js = await fetchPage(path);
    try {
      return ReleasesByTagParser.parseHubJSFilterValueNames(js);
    }
    catch (error: any) {
      throw new ParseError('Failed to obtain filter names / values from Hub JS', js, error);
    }
  }
}

export class LimiterTagAPI extends TagAPI {

  static async list(): Promise<TagList> {
    return Limiter.schedule(() => super.list());
  }

  static async getInfo(tagUrl: string): Promise<Tag> {
    return Limiter.schedule(() => super.getInfo(tagUrl));
  }

  static async getAlbumHighlights(params: TagAPIGetAlbumHighlightsParams): Promise<AlbumHighlightsByTag[]> {
    return Limiter.schedule(() => super.getAlbumHighlights(params));
  }

  static async getReleasesAvailableFilters(tagUrl: string): Promise<ReleasesByTag.Filter[]> {
    return Limiter.schedule(() => super.getReleasesAvailableFilters(tagUrl));
  }

  static async getReleases(params: TagAPIGetReleasesParams): Promise<ReleasesByTag> {
    return Limiter.schedule(() => super.getReleases(params));
  }
}
