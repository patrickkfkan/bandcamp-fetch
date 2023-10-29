import { URL } from 'url';
import { ImageFormat } from '../types/Image.js';
import { URLS } from '../utils/Constants.js';
import SearchResultsParser from './SearchResultsParser.js';
import { SearchResultAlbum, SearchResultAny, SearchResultArtist, SearchResultFan, SearchResultLabel, SearchResultTrack, SearchResults } from '../types/Search.js';
import Limiter from '../utils/Limiter.js';
import BaseAPIWithImageSupport, { BaseAPIWithImageSupportParams } from '../common/BaseAPIWithImageSupport.js';

export enum SearchItemType {
  All = 'All',
  ArtistsAndLabels = 'ArtistsAndLabels',
  Albums = 'Albums',
  Tracks = 'Tracks',
  Fans = 'Fans'
}

export interface SearchAPISearchParams {
  query: string;
  page?: number;
  albumImageFormat?: string | number | ImageFormat;
  artistImageFormat?: string | number | ImageFormat;
}

export default class SearchAPI extends BaseAPIWithImageSupport {

  async all(params: SearchAPISearchParams) {
    return this.search({ ...params, itemType: SearchItemType.All });
  }

  async artistsAndLabels(params: SearchAPISearchParams) {
    return this.search({ ...params, itemType: SearchItemType.ArtistsAndLabels });
  }

  async albums(params: SearchAPISearchParams) {
    return this.search({ ...params, itemType: SearchItemType.Albums });
  }

  async tracks(params: SearchAPISearchParams) {
    return this.search({ ...params, itemType: SearchItemType.Tracks });
  }

  async fans(params: SearchAPISearchParams) {
    return this.search({ ...params, itemType: SearchItemType.Fans });
  }

  /**
   * @internal
   */
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType.ArtistsAndLabels }): Promise<SearchResults<SearchResultArtist | SearchResultLabel>>;
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType.Albums }): Promise<SearchResults<SearchResultAlbum>>;
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType.Tracks }): Promise<SearchResults<SearchResultTrack>>;
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType.Fans }): Promise<SearchResults<SearchResultFan>>;
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType.All }): Promise<SearchResults<SearchResultAny>>;
  protected async search(params: SearchAPISearchParams & { itemType: SearchItemType }): Promise<any> {
    const opts = {
      itemType: params.itemType || SearchItemType.All,
      albumImageFormat: await this.imageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await this.imageAPI.getFormat(params.artistImageFormat, 21)
    };
    const html = await this.fetch(SearchAPI.getSearchUrl(params));
    return SearchResultsParser.parseResults(html, opts);
  }

  /**
   * @internal
   */
  protected static getSearchUrl(params: SearchAPISearchParams & { itemType: SearchItemType }) {
    const urlObj = new URL(URLS.SEARCH);
    urlObj.searchParams.set('q', params.query);
    urlObj.searchParams.set('page', (params.page || 1).toString());
    switch (params.itemType) {
      case SearchItemType.ArtistsAndLabels:
        urlObj.searchParams.set('item_type', 'b');
        break;
      case SearchItemType.Albums:
        urlObj.searchParams.set('item_type', 'a');
        break;
      case SearchItemType.Tracks:
        urlObj.searchParams.set('item_type', 't');
        break;
      case SearchItemType.Fans:
        urlObj.searchParams.set('item_type', 'f');
        break;
      default:
    }
    return urlObj.toString();
  }
}

export class LimiterSearchAPI extends SearchAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async all(params: SearchAPISearchParams): Promise<SearchResults<SearchResultAny>> {
    return this.#limiter.schedule(() => super.all(params));
  }

  async artistsAndLabels(params: SearchAPISearchParams): Promise<SearchResults<SearchResultArtist | SearchResultLabel>> {
    return this.#limiter.schedule(() => super.artistsAndLabels(params));
  }

  async albums(params: SearchAPISearchParams): Promise<SearchResults<SearchResultAlbum>> {
    return this.#limiter.schedule(() => super.albums(params));
  }

  async tracks(params: SearchAPISearchParams): Promise<SearchResults<SearchResultTrack>> {
    return this.#limiter.schedule(() => super.tracks(params));
  }

  async fans(params: SearchAPISearchParams): Promise<SearchResults<SearchResultFan>> {
    return this.#limiter.schedule(() => super.fans(params));
  }
}
