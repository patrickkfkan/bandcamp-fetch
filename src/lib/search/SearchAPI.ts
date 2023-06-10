import { URL } from 'url';
import ImageAPI from '../image/ImageAPI';
import { ImageFormat } from '../types/Image';
import { URLS } from '../utils/Constants';
import { fetchPage } from '../utils/Fetch';
import SearchResultsParser from './SearchResultsParser';
import { SearchResultAlbum, SearchResultAny, SearchResultArtist, SearchResultFan, SearchResultLabel, SearchResultTrack, SearchResults } from '../types/Search';
import Limiter from '../utils/Limiter';

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

export default class SearchAPI {

  static async all(params: SearchAPISearchParams) {
    return this.#search({ ...params, itemType: SearchItemType.All });
  }

  static async artistsAndLabels(params: SearchAPISearchParams) {
    return this.#search({ ...params, itemType: SearchItemType.ArtistsAndLabels });
  }

  static async albums(params: SearchAPISearchParams) {
    return this.#search({ ...params, itemType: SearchItemType.Albums });
  }

  static async tracks(params: SearchAPISearchParams) {
    return this.#search({ ...params, itemType: SearchItemType.Tracks });
  }

  static async fans(params: SearchAPISearchParams) {
    return this.#search({ ...params, itemType: SearchItemType.Fans });
  }

  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType.ArtistsAndLabels }): Promise<SearchResults<SearchResultArtist | SearchResultLabel>>;
  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType.Albums }): Promise<SearchResults<SearchResultAlbum>>;
  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType.Tracks }): Promise<SearchResults<SearchResultTrack>>;
  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType.Fans }): Promise<SearchResults<SearchResultFan>>;
  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType.All }): Promise<SearchResults<SearchResultAny>>;
  static async #search(params: SearchAPISearchParams & { itemType: SearchItemType }): Promise<any> {
    const opts = {
      itemType: params.itemType || SearchItemType.All,
      albumImageFormat: await ImageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params.artistImageFormat, 21)
    };
    const html = await fetchPage(this.#getSearchUrl(params));
    return SearchResultsParser.parseResults(html, opts);
  }

  static #getSearchUrl(params: SearchAPISearchParams & { itemType: SearchItemType }) {
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

  static async all(params: SearchAPISearchParams): Promise<SearchResults<SearchResultAny>> {
    return Limiter.schedule(() => super.all(params));
  }

  static async artistsAndLabels(params: SearchAPISearchParams): Promise<SearchResults<SearchResultArtist | SearchResultLabel>> {
    return Limiter.schedule(() => super.artistsAndLabels(params));
  }

  static async albums(params: SearchAPISearchParams): Promise<SearchResults<SearchResultAlbum>> {
    return Limiter.schedule(() => super.albums(params));
  }

  static async tracks(params: SearchAPISearchParams): Promise<SearchResults<SearchResultTrack>> {
    return Limiter.schedule(() => super.tracks(params));
  }

  static async fans(params: SearchAPISearchParams): Promise<SearchResults<SearchResultFan>> {
    return Limiter.schedule(() => super.fans(params));
  }
}
