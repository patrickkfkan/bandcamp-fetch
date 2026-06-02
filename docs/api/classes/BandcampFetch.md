[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / BandcampFetch

# Class: BandcampFetch

Defined in: [lib/BandcampFetch.ts:26](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L26)

## Constructors

### Constructor

> **new BandcampFetch**(`params?`): `BandcampFetch`

Defined in: [lib/BandcampFetch.ts:65](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L65)

#### Parameters

##### params?

[`BandcampFetchParams`](../interfaces/BandcampFetchParams.md)

#### Returns

`BandcampFetch`

## Properties

### album

> `readonly` **album**: [`AlbumAPI`](AlbumAPI.md)

Defined in: [lib/BandcampFetch.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L34)

***

### article

> `readonly` **article**: [`ArticleAPI`](ArticleAPI.md)

Defined in: [lib/BandcampFetch.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L40)

***

### autocomplete

> `readonly` **autocomplete**: [`AutocompleteAPI`](AutocompleteAPI.md)

Defined in: [lib/BandcampFetch.ts:44](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L44)

***

### band

> `readonly` **band**: [`BandAPI`](BandAPI.md)

Defined in: [lib/BandcampFetch.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L38)

***

### discovery

> `readonly` **discovery**: [`DiscoveryAPI`](DiscoveryAPI.md)

Defined in: [lib/BandcampFetch.ts:36](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L36)

***

### fan

> `readonly` **fan**: [`FanAPI`](FanAPI.md)

Defined in: [lib/BandcampFetch.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L42)

***

### image

> `readonly` **image**: [`ImageAPI`](ImageAPI.md)

Defined in: [lib/BandcampFetch.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L37)

***

### limiter

> `readonly` **limiter**: `object`

Defined in: [lib/BandcampFetch.ts:48](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L48)

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

#### playlist

> `readonly` **playlist**: [`LimiterPlaylistAPI`](LimiterPlaylistAPI.md)

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

### playlist

> `readonly` **playlist**: [`PlaylistAPI`](PlaylistAPI.md)

Defined in: [lib/BandcampFetch.ts:46](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L46)

***

### search

> `readonly` **search**: [`SearchAPI`](SearchAPI.md)

Defined in: [lib/BandcampFetch.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L43)

***

### show

> `readonly` **show**: [`ShowAPI`](ShowAPI.md)

Defined in: [lib/BandcampFetch.ts:41](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L41)

***

### stream

> `readonly` **stream**: [`StreamAPI`](StreamAPI.md)

Defined in: [lib/BandcampFetch.ts:45](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L45)

***

### tag

> `readonly` **tag**: [`TagAPI`](TagAPI.md)

Defined in: [lib/BandcampFetch.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L39)

***

### track

> `readonly` **track**: [`TrackAPI`](TrackAPI.md)

Defined in: [lib/BandcampFetch.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L35)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheWrapper`](CacheWrapper.md)

Defined in: [lib/BandcampFetch.ts:140](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L140)

##### Returns

[`CacheWrapper`](CacheWrapper.md)

***

### cookie

#### Get Signature

> **get** **cookie**(): `string` \| `null` \| `undefined`

Defined in: [lib/BandcampFetch.ts:136](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L136)

##### Returns

`string` \| `null` \| `undefined`

## Methods

### setCookie()

> **setCookie**(`value?`): `void`

Defined in: [lib/BandcampFetch.ts:127](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L127)

#### Parameters

##### value?

`string` \| `null`

#### Returns

`void`

***

### setLogger()

> **setLogger**(`logger`): `void`

Defined in: [lib/BandcampFetch.ts:132](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/BandcampFetch.ts#L132)

#### Parameters

##### logger

[`Logger`](../interfaces/Logger.md) \| `null`

#### Returns

`void`
