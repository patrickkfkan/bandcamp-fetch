[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / CacheWrapper

# Class: CacheWrapper

Defined in: [lib/BandcampFetch.ts:141](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L141)

## Constructors

### Constructor

> **new CacheWrapper**(`cache`): `CacheWrapper`

Defined in: [lib/BandcampFetch.ts:144](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L144)

#### Parameters

##### cache

[`Cache`](Cache.md)

#### Returns

`CacheWrapper`

## Methods

### clear()

> **clear**(`type?`): `void`

Defined in: [lib/BandcampFetch.ts:148](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L148)

#### Parameters

##### type?

[`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`void`

***

### setMaxPages()

> **setMaxPages**(`maxPages`): `void`

Defined in: [lib/BandcampFetch.ts:156](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L156)

#### Parameters

##### maxPages

`number`

#### Returns

`void`

***

### setTTL()

> **setTTL**(`type`, `ttl`): `void`

Defined in: [lib/BandcampFetch.ts:152](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L152)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### ttl

`number`

#### Returns

`void`
