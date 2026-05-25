import type Cache from '../utils/Cache.js';
import { type FetchMethod } from '../utils/Fetcher.js';
import type Fetcher from '../utils/Fetcher.js';
import { type Logger } from '../utils/Logger.js';

export interface BaseAPIParams {
  fetcher: Fetcher;
  cache: Cache;
  logger: Logger;
}

export default abstract class BaseAPI {
  #fetcher: Fetcher;
  #cache: Cache;
  #logger: Logger;

  constructor(params: BaseAPIParams) {
    this.#fetcher = params.fetcher;
    this.#cache = params.cache;
    this.#logger = params.logger;
  }

  protected fetch(
    url: string,
    jsonResponse: false,
    method: FetchMethod.HEAD,
    payload?: undefined,
    requireCookie?: boolean
  ): Promise<{ ok: boolean; status: number }>;
  protected fetch(
    url: string,
    jsonResponse: true,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie?: boolean
  ): Promise<any>;
  protected fetch(
    url: string,
    jsonResponse?: boolean,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie?: boolean
  ): Promise<string>;
  protected fetch(
    url: string,
    jsonResponse?: boolean,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie?: boolean
  ): Promise<any> {
    return this.#fetcher.fetch(url, jsonResponse, method, payload, requireCookie);
  }

  protected get cache() {
    return this.#cache;
  }

  protected get logger() {
    return this.#logger;
  }
}
