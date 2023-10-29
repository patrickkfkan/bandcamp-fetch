import { URL } from 'url';
import fetch, { Request, RequestInit } from 'node-fetch';
import Cache, { CacheDataType } from './Cache.js';

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  HEAD = 'HEAD'
}

export interface FetcherParams {
  cookie?: string | null;
  cache: Cache;
}

export default class Fetcher {

  #cookie?: string | null;
  #cache: Cache;

  constructor(params: FetcherParams) {
    this.#cache = params.cache;
    this.setCookie(params.cookie);
  }

  setCookie(value?: string | null) {
    this.#cookie = value;
    const valueChanged = ((this.#cookie || null) !== (value || null));
    if (valueChanged) {
      this.#cache.clear();
    }
  }

  get cookie() {
    return this.#cookie;
  }

  fetch(url: string, jsonResponse: false, method: FetchMethod.HEAD, payload?: undefined): Promise<Response>;
  fetch(url: string, jsonResponse: true, method?: FetchMethod, payload?: Record<string, any>): Promise<any>;
  fetch(url: string, jsonResponse?: boolean, method?: FetchMethod, payload?: Record<string, any>): Promise<string>;
  fetch(url: string, jsonResponse?: boolean, method?: FetchMethod, payload?: Record<string, any>) {
    if (jsonResponse === undefined) {
      jsonResponse = false;
    }
    return this.#cache.getOrSet(CacheDataType.Page, getCacheKey(url, jsonResponse, payload), async () => {
      if (method === undefined) {
        method = FetchMethod.GET;
      }

      if (method === FetchMethod.HEAD) {
        return fetch(url, { method: 'HEAD' });
      }

      let response;
      if (method === FetchMethod.GET) {
        const urlObj = new URL(url);
        if (payload) {
          for (const [ key, value ] of Object.entries(payload)) {
            urlObj.searchParams.set(key, value);
          }
        }
        try {
          const request = new Request(urlObj.toString());
          if (this.#cookie) {
            request.headers.set('Cookie', this.#cookie);
          }
          response = await fetch(request);
        }
        catch (error) {
          throw new FetchError(error);
        }
      }
      else {
        const init: RequestInit = {
          method: 'POST',
          body: payload ? JSON.stringify(payload) : undefined
        };
        const request = new Request(url);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        if (this.#cookie) {
          request.headers.set('Cookie', this.#cookie);
        }
        try {
          response = await fetch(request, init);
        }
        catch (error) {
          throw new FetchError(error);
        }
      }
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
    });
  }

}

function getCacheKey(url: string, jsonResponse: boolean, payload?: Record<string, any>): string {
  return url + (jsonResponse ? ':json' : ':html') +
    (payload ? `:${JSON.stringify(payload)}` : '');
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
