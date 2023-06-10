import NodeCache from 'node-cache';

export enum CacheDataType {
  Page = 'Page',
  Constants = 'Constants'
}

class CacheImpl {
  #ttl: Record<CacheDataType, number>;
  #maxEntries: Record<CacheDataType, number>;
  #cache: NodeCache;

  constructor(ttl: Record<CacheDataType, number>, maxEntries: Record<string, number>) {
    this.#ttl = ttl;
    this.#maxEntries = maxEntries;
    this.#cache = new NodeCache({
      checkperiod: 600
    });
  }

  setTTL(type: CacheDataType, ttl: number) {
    if (this.#ttl[type] !== ttl) {
      this.getKeys(type).forEach((key) => {
        this.#cache.ttl(key, ttl);
      });
      this.#ttl[type] = ttl;
    }
  }

  setMaxEntries(type: CacheDataType, maxEntries: number) {
    this.reduceEntries(type, maxEntries);
    this.#maxEntries[type] = maxEntries;
  }

  getMaxEntries(type: CacheDataType) {
    return this.#maxEntries[type] !== undefined ? this.#maxEntries[type] : -1;
  }

  get<T>(type: CacheDataType, key: string): T | undefined {
    return this.#cache.get(this.#getCacheKey(type, key));
  }

  put<T>(type: CacheDataType, key: string, value: T) {
    const maxEntries = this.getMaxEntries(type);
    if (maxEntries === 0) {
      return false;
    }
    else if (maxEntries > 0) {
      this.reduceEntries(type, maxEntries - 1);
    }
    return this.#cache.set(this.#getCacheKey(type, key), value, this.#ttl[type]);
  }

  #getCacheKey(type: CacheDataType, key: string): string {
    return `${type}.${key}`;
  }

  reduceEntries(type: CacheDataType, reduceTo?: number) {
    if (reduceTo === undefined) {
      reduceTo = this.getMaxEntries(type);
    }
    const keys = this.getKeys(type);
    if (keys.length > reduceTo) {
      for (let i = 0; i < keys.length - reduceTo; i++) {
        this.#cache.del(keys[i]);
      }
    }
  }

  getKeys(type: CacheDataType): string[] {
    return this.#cache.keys().filter((key) => key.startsWith(`${type}.`));
  }

  clear(type?: CacheDataType) {
    if (!type) {
      this.#cache.flushAll();
    }
    else {
      this.getKeys(type).forEach((key) => {
        this.#cache.del(key);
      });
    }
  }

  async getOrSet<T>(type: CacheDataType, key: string, promiseCallback: () => Promise<T>): Promise<T> {
    const cachedValue = this.get<T>(type, key);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    const value = await promiseCallback();
    this.put<T>(type, key, value);
    return value;
  }
}

export const Cache = new CacheImpl({
  [CacheDataType.Constants]: 3600,
  [CacheDataType.Page]: 300
}, { page: 10 });
