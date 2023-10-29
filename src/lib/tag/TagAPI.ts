import BaseAPIWithImageSupport, { BaseAPIWithImageSupportParams } from '../common/BaseAPIWithImageSupport.js';
import { ImageFormat } from '../types/Image.js';
import Tag, { AlbumHighlightsByTag, ReleasesByTag, TagList } from '../types/Tag.js';
import { URLS } from '../utils/Constants.js';
import { FetchMethod } from '../utils/Fetcher.js';
import Limiter from '../utils/Limiter.js';
import { ParseError, normalizeUrl, splitUrl } from '../utils/Parse.js';
import AlbumHighlightsByTagParser from './AlbumHighlightsByTagParser.js';
import ReleasesByTagParser from './ReleasesByTagParser.js';
import TagInfoParser from './TagInfoParser.js';
import TagListParser from './TagListParser.js';

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

export default class TagAPI extends BaseAPIWithImageSupport {

  async list(): Promise<TagList> {
    const html = await this.fetch(normalizeUrl('tags'));
    return TagListParser.parseTags(html);
  }

  async getInfo(tagUrl: string): Promise<Tag> {
    const html = await this.fetch(tagUrl);
    return TagInfoParser.parseInfo(html, tagUrl);
  }

  async getAlbumHighlights(params: TagAPIGetAlbumHighlightsParams): Promise<AlbumHighlightsByTag[]> {
    const imageConstants = await this.imageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat, 9)
    };

    const html = await this.fetch(params.tagUrl);
    return AlbumHighlightsByTagParser.parseHighlights(html, opts);
  }

  async getReleasesAvailableFilters(tagUrl: string): Promise<ReleasesByTag.Filter[]> {
    const filterValueNames = await this.getReleaseFilterValueNames(tagUrl);
    const html = await this.fetch(tagUrl);
    return ReleasesByTagParser.parseFilters(html, filterValueNames);
  }

  async getReleases(params: TagAPIGetReleasesParams): Promise<ReleasesByTag> {
    const imageConstants = await this.imageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat, 9)
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

    const json = await this.fetch(URLS.DIG_DEEPER, true, FetchMethod.POST, postData);
    return ReleasesByTagParser.parseReleases(json, opts);
  }

  /**
   * @internal
   */
  protected async getReleaseFilterValueNames(tagUrl: string) {
    const url = `${tagUrl}?tab=all_releases`;
    const html = await this.fetch(url);
    const path = ReleasesByTagParser.parseHubJSPath(html);
    if (!path) {
      throw new ParseError(`Failed to obtain Hub JS path from ${url}`, html);
    }
    const js = await this.fetch(path);
    try {
      return ReleasesByTagParser.parseHubJSFilterValueNames(js);
    }
    catch (error: any) {
      throw new ParseError('Failed to obtain filter names / values from Hub JS', js, error);
    }
  }
}

export class LimiterTagAPI extends TagAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async list(): Promise<TagList> {
    return this.#limiter.schedule(() => super.list());
  }

  async getInfo(tagUrl: string): Promise<Tag> {
    return this.#limiter.schedule(() => super.getInfo(tagUrl));
  }

  async getAlbumHighlights(params: TagAPIGetAlbumHighlightsParams): Promise<AlbumHighlightsByTag[]> {
    return this.#limiter.schedule(() => super.getAlbumHighlights(params));
  }

  async getReleasesAvailableFilters(tagUrl: string): Promise<ReleasesByTag.Filter[]> {
    return this.#limiter.schedule(() => super.getReleasesAvailableFilters(tagUrl));
  }

  async getReleases(params: TagAPIGetReleasesParams): Promise<ReleasesByTag> {
    return this.#limiter.schedule(() => super.getReleases(params));
  }
}
