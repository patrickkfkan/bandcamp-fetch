import { URL } from 'url';
import type Cache from './Cache.js';
import { CacheDataType } from './Cache.js';
import CookieFetcher from './CookieFetcher.js';
import { type Logger } from './Logger.js';

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  HEAD = 'HEAD'
}

export interface FetcherParams {
  cookie?: string | null;
  cache: Cache;
  logger: Logger;
}

export default class Fetcher {
  #cookie?: string | null;
  #cache: Cache;
  #logger: Logger;

  constructor(params: FetcherParams) {
    this.#cache = params.cache;
    this.#logger = params.logger;
    this.setCookie(params.cookie);
  }

  setCookie(value?: string | null) {
    this.#cookie = value;
    const valueChanged = (this.#cookie || null) !== (value || null);
    if (valueChanged) {
      this.#cache.clear();
    }
  }

  get cookie() {
    return this.#cookie;
  }

  fetch(
    url: string,
    jsonResponse: false,
    method: FetchMethod.HEAD,
    payload?: undefined,
    requireCookie?: boolean
  ): Promise<{ ok: boolean; status: number }>;
  fetch(
    url: string,
    jsonResponse: true,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie?: boolean
  ): Promise<any>;
  fetch(
    url: string,
    jsonResponse?: boolean,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie?: boolean
  ): Promise<string>;
  fetch(
    url: string,
    jsonResponse?: boolean,
    method?: FetchMethod,
    payload?: Record<string, any>,
    requireCookie = false
  ) {
    if (jsonResponse === undefined) {
      jsonResponse = false;
    }
    return this.#cache.getOrSet(
      CacheDataType.Page,
      getCacheKey(url, jsonResponse, payload),
      async () => {
        if (method === undefined) {
          method = FetchMethod.GET;
        }

        const __logRequest = () => {
          this.#logger.debug(`Fetcher: ${method} [${url}]`);
        };

        const __logResponse = (response: Response) => {
          const msg = `Fetcher: ${method} [${url}] - ${response.status} ${response.statusText}`;
          if (response.ok) {
            this.#logger.debug(msg);
          } else {
            this.#logger.error(msg);
          }
        };

        __logRequest();

        if (method === FetchMethod.HEAD) {
          const response = await fetch(url, { method: 'HEAD' });
          __logResponse(response);
          return {
            ok: response.ok,
            status: response.status
          };
        }

        const __setCookie = async (request: Request) => {
          if (this.#cookie) {
            request.headers.set('Cookie', this.#cookie);
            return;
          }
          if (requireCookie) {
            const cachedAnonymousCookie = this.#cache.get<string | null>(CacheDataType.Constants, 'anonymousCookie');
            if (cachedAnonymousCookie === undefined) {
              this.#logger.debug(`Fetcher: ${method} [${url}] requires cookie but none is set; attempting to fetch anonymous cookie`);
              try {
                const anonymousCookie = await CookieFetcher.getAnonymousCookie(this.#logger);
                this.#cache.put(CacheDataType.Constants, 'anonymousCookie', anonymousCookie);
                this.#logger.debug(`Fetcher: anonymous cookie fetched successfully`);
                request.headers.set('Cookie', anonymousCookie);
              }
              catch (error) {
                throw new FetchError({
                  message: 'Cookie required but not available, and attempt to fetch anonymous cookie failed with error.',
                  cause: error
                });  
              }
            }
            else if (cachedAnonymousCookie === null) {
              throw new FetchError({
                message: 'Cookie required but not available, and previous attempt to fetch anonymous cookie failed.'
              });
            }
            else {
              request.headers.set('Cookie', cachedAnonymousCookie);
              return;
            }
          }
        };

        let response;
        if (method === FetchMethod.GET) {
          const urlObj = new URL(url);
          if (payload) {
            for (const [key, value] of Object.entries(payload)) {
              urlObj.searchParams.set(key, value);
            }
          }
          try {
            const request = new Request(urlObj.toString());
            await __setCookie(request);
            response = await fetch(request);
          } catch (error) {
            throw new FetchError(error);
          }
        } else {
          const init: RequestInit = {
            method: 'POST',
            body: payload ? JSON.stringify(payload) : undefined
          };
          const request = new Request(url);
          request.headers.set('Content-Type', 'application/json');
          await __setCookie(request);
          try {
            response = await fetch(request, init);
          } catch (error) {
            throw new FetchError(error);
          }
        }
        __logResponse(response);
        if (response.status === 429) {
          throw new FetchError({
            message: '429 Too Many Requests',
            code: 429
          });
        }
        if (jsonResponse) {
          return response.json();
        }
        return response.text();
      }
    );
  }
}

function getCacheKey(
  url: string,
  jsonResponse: boolean,
  payload?: Record<string, any>
): string {
  return (
    url +
    (jsonResponse ? ':json' : ':html') +
    (payload ? `:${JSON.stringify(payload)}` : '')
  );
}

export class FetchError extends Error {
  code?: number;

  constructor(payload: any) {
    super();
    if (payload?.message) {
      this.message = payload.message;
    }
    if (payload?.code) {
      this.code = payload.code;
    }
    if (payload?.stack) {
      this.stack = payload.stack;
    }
  }
}
