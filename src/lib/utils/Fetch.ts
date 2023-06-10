import { URL } from 'url';
import fetch from 'node-fetch';
import { Cache, CacheDataType } from './Cache';

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST'
}

export function fetchPage(url: string, jsonResponse: true, method?: FetchMethod, payload?: Record<string, any>): Promise<any>;
export function fetchPage(url: string, jsonResponse?: boolean, method?: FetchMethod, payload?: Record<string, any>): Promise<string>;
export function fetchPage(url: string, jsonResponse?: boolean, method?: FetchMethod, payload?: Record<string, any>) {
  if (jsonResponse === undefined) {
    jsonResponse = false;
  }
  return Cache.getOrSet(CacheDataType.Page, getCacheKey(url, jsonResponse, payload), async () => {
    if (method === undefined) {
      method = FetchMethod.GET;
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
        response = await fetch(urlObj.toString());
      }
      catch (error) {
        throw new FetchError(error);
      }
    }
    else {
      const init = {
        method: 'POST',
        body: payload ? JSON.stringify(payload) : undefined,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      };
      try {
        response = await fetch(url, init);
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
