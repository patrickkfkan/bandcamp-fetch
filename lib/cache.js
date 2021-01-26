const NodeCache = require('node-cache');

class Cache {
    constructor(ttl, maxEntries) {
        this._ttl = ttl;
        this._maxEntries = maxEntries;
        this._cache = new NodeCache({
            checkperiod: 600
        });
    }

    setTTL(type, ttl) {
        const self = this;
        if (self._ttl[type] != ttl[type]) {
            self.getKeys(type).forEach( key => {
                self._cache.ttl(key, ttl);
            })
        }
        self._ttl = ttl;
    }

    setMaxEntries(type, maxEntries) {
        this.reduceEntries(type, maxEntries);
        this._maxEntries[type] = maxEntries;
    }

    getMaxEntries(type) {
        return this._maxEntries[type] !== undefined ? this._maxEntries[type] : -1;
    }

    get(type, key) {
        return this._cache.get(type + '.' + key);
    }

    put(type, key, value) {
        const maxEntries = this.getMaxEntries();
        if (maxEntries === 0) {
            return false;
        }
        else if (maxEntries > 0) {
            this.reduceEntries(maxEntries - 1);
        }
        return this._cache.set(type + '.' + key, value, this._ttl[type]);
    }

    reduceEntries(type, reduceTo) {
        if (reduceTo === undefined) {
            reduceTo = this.getMaxEntries(type);
        }
        if (reduceTo < 0) {
            return;
        }
        const keys = this.getKeys(type);
        if (keys.length > reduceTo) {
            for (let i = 0; i < keys.length - reduceTo; i++) {
                this._cache.del(keys[i]);
            }
        }
    }

    getKeys(type) {
        return this._cache.keys().filter( key => key.startsWith(type + '.') );
    }

    clear(type) {
        if (!type) {
            this._cache.flushAll();
        }
        else {
            this.getKeys(type).forEach( key => {
                this._cache.del(key);
            });
        }
    }

    async getOrSet(type, key, promiseCallback) {
        const self = this;
        const cachedValue = self.get(type, key);
        if (cachedValue !== undefined) {
            return cachedValue;
        }
        else if (promiseCallback) {
            return promiseCallback().then( value => {
                self.put(type, key, value);
                return value;
            });
        }
        else {
            return null;
        }
    }
}

module.exports = Cache;