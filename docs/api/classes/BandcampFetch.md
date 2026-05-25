[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / BandcampFetch

# Class: BandcampFetch

Defined in: [lib/BandcampFetch.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L25)

## Constructors

### Constructor

> **new BandcampFetch**(`params?`): `BandcampFetch`

Defined in: [lib/BandcampFetch.ts:62](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L62)

#### Parameters

##### params?

[`BandcampFetchParams`](../interfaces/BandcampFetchParams.md)

#### Returns

`BandcampFetch`

## Properties

### album

> `readonly` **album**: [`AlbumAPI`](AlbumAPI.md)

Defined in: [lib/BandcampFetch.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L33)

***

### article

> `readonly` **article**: [`ArticleAPI`](ArticleAPI.md)

Defined in: [lib/BandcampFetch.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L39)

***

### autocomplete

> `readonly` **autocomplete**: [`AutocompleteAPI`](AutocompleteAPI.md)

Defined in: [lib/BandcampFetch.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L43)

***

### band

> `readonly` **band**: [`BandAPI`](BandAPI.md)

Defined in: [lib/BandcampFetch.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L37)

***

### discovery

> `readonly` **discovery**: [`DiscoveryAPI`](DiscoveryAPI.md)

Defined in: [lib/BandcampFetch.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L35)

***

### fan

> `readonly` **fan**: [`FanAPI`](FanAPI.md)

Defined in: [lib/BandcampFetch.ts:41](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L41)

***

### image

> `readonly` **image**: [`ImageAPI`](ImageAPI.md)

Defined in: [lib/BandcampFetch.ts:36](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L36)

***

### limiter

> `readonly` **limiter**: `object`

Defined in: [lib/BandcampFetch.ts:46](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L46)

#### album

> `readonly` **album**: [`LimiterAlbumAPI`](LimiterAlbumAPI.md)

#### article

> `readonly` **article**: [`LimiterArticleAPI`](LimiterArticleAPI.md)

#### autocomplete

> `readonly` **autocomplete**: [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

#### band

> `readonly` **band**: [`LimiterBandAPI`](LimiterBandAPI.md)

#### discovery

> `readonly` **discovery**: [`LimiterDiscoveryAPI`](LimiterDiscoveryAPI.md)

#### fan

> `readonly` **fan**: [`LimiterFanAPI`](LimiterFanAPI.md)

#### image

> `readonly` **image**: [`LimiterImageAPI`](LimiterImageAPI.md)

#### search

> `readonly` **search**: [`LimiterSearchAPI`](LimiterSearchAPI.md)

#### show

> `readonly` **show**: [`LimiterShowAPI`](LimiterShowAPI.md)

#### stream

> `readonly` **stream**: [`StreamAPI`](StreamAPI.md)

#### tag

> `readonly` **tag**: [`LimiterTagAPI`](LimiterTagAPI.md)

#### track

> `readonly` **track**: [`LimiterTrackAPI`](LimiterTrackAPI.md)

#### updateSettings

> **updateSettings**: (`options?`) => `void`

##### Parameters

###### options?

`ConstructorOptions`

##### Returns

`void`

***

### search

> `readonly` **search**: [`SearchAPI`](SearchAPI.md)

Defined in: [lib/BandcampFetch.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L42)

***

### show

> `readonly` **show**: [`ShowAPI`](ShowAPI.md)

Defined in: [lib/BandcampFetch.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L40)

***

### stream

> `readonly` **stream**: [`StreamAPI`](StreamAPI.md)

Defined in: [lib/BandcampFetch.ts:44](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L44)

***

### tag

> `readonly` **tag**: [`TagAPI`](TagAPI.md)

Defined in: [lib/BandcampFetch.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L38)

***

### track

> `readonly` **track**: [`TrackAPI`](TrackAPI.md)

Defined in: [lib/BandcampFetch.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L34)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheWrapper`](CacheWrapper.md)

Defined in: [lib/BandcampFetch.ts:136](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L136)

##### Returns

[`CacheWrapper`](CacheWrapper.md)

***

### cookie

#### Get Signature

> **get** **cookie**(): `string` \| `null` \| `undefined`

Defined in: [lib/BandcampFetch.ts:132](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L132)

##### Returns

`string` \| `null` \| `undefined`

## Methods

### setCookie()

> **setCookie**(`value?`): `void`

Defined in: [lib/BandcampFetch.ts:123](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L123)

#### Parameters

##### value?

`string` \| `null`

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

Defined in: [lib/BandcampFetch.ts:128](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/BandcampFetch.ts#L128)

#### Parameters

##### logger

[`Logger`](../interfaces/Logger.md) \| `null`

#### Returns

`void`
