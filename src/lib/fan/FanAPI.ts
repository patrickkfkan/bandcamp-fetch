import Fan, { FanItemsContinuation } from '../types/Fan.js';
import { ImageFormat } from '../types/Image.js';
import { URLS } from '../utils/Constants.js';
import { FetchError, FetchMethod } from '../utils/Fetcher.js';
import { FanContinuationItemsResult, FanItemParseOptions, FanPageItemsResult } from './FanItemsBaseParser.js';
import FanCollectionParser from './FanCollectionParser.js';
import FanFollowingParser from './FanFollowingParser.js';
import FanInfoParser from './FanInfoParser.js';
import FanWishlistParser from './FanWishlistParser.js';
import Album from '../types/Album.js';
import Track from '../types/Track.js';
import UserKind from '../types/UserKind.js';
import Tag from '../types/Tag.js';
import Limiter from '../utils/Limiter.js';
import BaseAPIWithImageSupport, { BaseAPIWithImageSupportParams } from '../common/BaseAPIWithImageSupport.js';

export { FanPageItemsResult, FanContinuationItemsResult };

export interface FanAPIGetInfoParams {
  username?: string;
  imageFormat: string | number | ImageFormat;
}

export interface FanAPIGetItemsParams {
  target?: string | FanItemsContinuation;
  imageFormat?: string | number | ImageFormat;
}

/**
 * @internal
 */
export interface FanAPIGetItemsFullParams<T> extends FanAPIGetItemsParams {
  defaultImageFormat: number;
  continuationUrl?: string;
  parsePageFn: (html: string, opts: FanItemParseOptions) => FanPageItemsResult<T>;
  parseContinuationFn: (json: any, continuation: FanItemsContinuation, opts: FanItemParseOptions) => FanContinuationItemsResult<T>;
}

export default class FanAPI extends BaseAPIWithImageSupport {

  async getInfo(params: FanAPIGetInfoParams): Promise<Fan> {
    if (!params.username) {
      const username = await this.getLoggedInFanUsername();
      return this.getInfo({
        ...params,
        username
      });
    }
    const imageConstants = await this.imageAPI.getConstants();
    const fanPageUrl = FanAPI.getFanPageUrl(params.username);
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat, 20)
    };
    const html = await this.fetch(fanPageUrl);
    return FanInfoParser.parseInfo(html, opts);
  }

  async getCollection(params: FanAPIGetItemsParams) {
    return await this.getItems({
      ...params,
      defaultImageFormat: 9,
      continuationUrl: URLS.FAN_CONTINUATION.COLLECTION,
      parsePageFn: FanCollectionParser.parseCollectionFromPage.bind(FanCollectionParser),
      parseContinuationFn: FanCollectionParser.parseCollectionFromContinuation.bind(FanCollectionParser)
    });
  }

  async getWishlist(params: FanAPIGetItemsParams) {
    return await this.getItems({
      ...params,
      defaultImageFormat: 9,
      continuationUrl: URLS.FAN_CONTINUATION.WISHLIST,
      parsePageFn: FanWishlistParser.parseWishlistFromPage.bind(FanWishlistParser),
      parseContinuationFn: FanWishlistParser.parseWishlistFromContinuation.bind(FanWishlistParser)
    });
  }

  async getFollowingArtistsAndLabels(params: FanAPIGetItemsParams) {
    return await this.getItems({
      ...params,
      defaultImageFormat: 21,
      continuationUrl: URLS.FAN_CONTINUATION.FOLLOWING_BANDS,
      parsePageFn: FanFollowingParser.parseFollowingBandsFromPage.bind(FanFollowingParser),
      parseContinuationFn: FanFollowingParser.parseFollowingBandsFromContinuation.bind(FanFollowingParser)
    });
  }

  async getFollowingGenres(params: FanAPIGetItemsParams) {
    return await this.getItems({
      ...params,
      defaultImageFormat: 3,
      continuationUrl: URLS.FAN_CONTINUATION.FOLLOWING_GENRES,
      parsePageFn: FanFollowingParser.parseFollowingGenresFromPage.bind(FanFollowingParser),
      parseContinuationFn: FanFollowingParser.parseFollowingGenresFromContinuation.bind(FanFollowingParser)
    });
  }

  /**
   * @internal
   */
  protected async getItems<T>(params: FanAPIGetItemsFullParams<T>): Promise<FanPageItemsResult<T> | FanContinuationItemsResult<T>> {
    const { target, imageFormat, defaultImageFormat, continuationUrl } = params;

    if (!target) {
      const username = await this.getLoggedInFanUsername();
      return this.getItems({
        ...params,
        target: username
      });
    }

    const imageConstants = await this.imageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await this.imageAPI.getFormat(imageFormat, defaultImageFormat)
    };

    if (!FanAPI.isContinuation(target)) {
      const fanPageUrl = FanAPI.getFanPageUrl(target);
      const html = await this.fetch(fanPageUrl);
      return params.parsePageFn(html, opts);
    }

    // Continuation
    if (!continuationUrl) {
      throw new FetchError('Unable to fetch fan contents: target is continuation token but continuation URL is missing.');
    }

    const payload = {
      fan_id: target.fanId,
      older_than_token: target.token,
      count: 20
    };
    const json = await this.fetch(continuationUrl, true, FetchMethod.POST, payload);
    return params.parseContinuationFn(json, target, opts);
  }

  /**
   * @internal
  */
  protected static getFanPageUrl(username: string) {
    return `${URLS.SITE_URL}/${username}`;
  }

  /**
   * @internal
  */
  protected static isContinuation(target: any): target is FanItemsContinuation {
    return typeof target === 'object' && target.fanId && target.token;
  }

  /**
   * @internal
   */
  protected async getLoggedInFanUsername() {
    const html = await this.fetch(URLS.SITE_URL);
    return FanInfoParser.parseLoggedInFanUsername(html);
  }
}

export class LimiterFanAPI extends FanAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async getInfo(params: FanAPIGetInfoParams): Promise<Fan> {
    return this.#limiter.schedule(() => super.getInfo(params));
  }

  async getCollection(params: FanAPIGetItemsParams): Promise<FanPageItemsResult<NonNullable<Album | Track | null>> | FanContinuationItemsResult<NonNullable<Album | Track | null>>> {
    return this.#limiter.schedule(() => super.getCollection(params));
  }

  async getWishlist(params: FanAPIGetItemsParams): Promise<FanPageItemsResult<NonNullable<Album | Track | null>> | FanContinuationItemsResult<NonNullable<Album | Track | null>>> {
    return this.#limiter.schedule(() => super.getWishlist(params));
  }

  async getFollowingArtistsAndLabels(params: FanAPIGetItemsParams): Promise<FanPageItemsResult<UserKind> | FanContinuationItemsResult<UserKind>> {
    return this.#limiter.schedule(() => super.getFollowingArtistsAndLabels(params));
  }

  async getFollowingGenres(params: FanAPIGetItemsParams): Promise<FanPageItemsResult<Tag> | FanContinuationItemsResult<Tag>> {
    return this.#limiter.schedule(() => super.getFollowingGenres(params));
  }
}
