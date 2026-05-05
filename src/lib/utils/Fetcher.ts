import { URL } from 'url';
import type Cache from './Cache.js';
import { CacheDataType } from './Cache.js';
import axios, { type AxiosRequestConfig } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  HEAD = 'HEAD'
}

type PreFetchType = (
  url: string,
  method: string,
  payload: Record<string, any> | undefined,
  headers: Record<string, string>
) => Promise<void> | void;

export interface FetcherParams {
  cookie?: string | null;
  cache: Cache;
  headers?: Record<string, string>;
  preFetch?: PreFetchType;
}

export default class Fetcher {
  #cookie?: string | null;
  #cache: Cache;
  #headers: Record<string, string> = {};
  #preFetch?: PreFetchType;

  private readonly jar = new CookieJar();
  client;

  constructor(params: FetcherParams) {
    this.#cache = params.cache;
    this.#headers = params.headers || {};
    this.setCookie(params.cookie);
    this.#preFetch = params.preFetch;
    this.client = wrapper(
      axios.create({
        jar: this.jar,
        validateStatus: (status) => status < 500
      })
    );
  }

  setCookie(value?: string | null) {
    const valueChanged = (this.#cookie || null) !== (value || null);
    this.#cookie = value;
    if (valueChanged) {
      this.#cache.clear();
      if (value) {
        this.jar.setCookieSync(value, '.bandcamp.com');
      }
    }
  }

  setHeaders(headers: Record<string, string>) {
    this.#headers = headers;
  }

  get cookie() {
    return this.jar.getCookieStringSync('.bamdcamp.com');
  }

  async fetch(
    url: string,
    jsonResponse: false,
    method: FetchMethod.HEAD,
    payload?: undefined,
    extraHeaders?: Record<string, string>
  ): Promise<{ ok: boolean; status: number }>;
  async fetch(
    url: string,
    jsonResponse: true,
    method?: FetchMethod,
    payload?: Record<string, any>,
    extraHeaders?: Record<string, string>
  ): Promise<any>;
  async fetch(
    url: string,
    jsonResponse?: boolean,
    method?: FetchMethod,
    payload?: Record<string, any>,
    extraHeaders?: Record<string, string>
  ): Promise<string>;
  async fetch(
    url: string,
    jsonResponse: boolean = false,
    method: FetchMethod = FetchMethod.GET,
    payload?: Record<string, any>,
    extraHeaders: Record<string, string> = {}
  ) {
    return this.#cache.getOrSet(
      CacheDataType.Page,
      getCacheKey(url, jsonResponse, payload),
      async () => {
        const headers = { ...this.#headers, ...extraHeaders };

        if (this.#preFetch) {
          try {
            await this.#preFetch(url, method, payload, headers);
          } catch (error) {
            throw new FetchError({
              message: `preFetch failed: ${error instanceof Error ? error.message : (error as any)}`,
              stack: error instanceof Error ? error.stack : undefined
            });
          }
        }

        if (method === FetchMethod.HEAD) {
          const response = await this.client.head(url, { headers });
          return { ok: response.status < 400, status: response.status };
        }

        const config: AxiosRequestConfig = { headers };

        if (method === FetchMethod.GET && payload) {
          const urlObj = new URL(url);
          Object.entries(payload).forEach(([k, v]) =>
            urlObj.searchParams.set(k, v)
          );
          url = urlObj.toString();
        } else if (method !== FetchMethod.GET) {
          headers['Content-Type'] = 'application/json';
          config.data = payload;
        }

        try {
          const response = await this.client.request({
            url,
            method: method.toLowerCase(),
            ...config
          });

          if (response.status === 429) {
            throw new FetchError({
              message: '429 Too Many Requests',
              code: 429
            });
          }

          return jsonResponse ? response.data : response.data.toString();
        } catch (error) {
          throw error instanceof FetchError ? error : new FetchError(error);
        }
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
