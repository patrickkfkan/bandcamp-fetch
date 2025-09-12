[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / BandcampFetch

# Class: BandcampFetch

## Constructors

### new BandcampFetch()

> **new BandcampFetch**(`params`?): [`BandcampFetch`](BandcampFetch.md)

#### Parameters

• **params?**: [`BandcampFetchParams`](../interfaces/BandcampFetchParams.md)

#### Returns

[`BandcampFetch`](BandcampFetch.md)

#### Defined in

[lib/BandcampFetch.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L58)

## Properties

### album

> `readonly` **album**: [`AlbumAPI`](AlbumAPI.md)

#### Defined in

[lib/BandcampFetch.ts:29](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L29)

***

### article

> `readonly` **article**: [`ArticleAPI`](ArticleAPI.md)

#### Defined in

[lib/BandcampFetch.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L35)

***

### autocomplete

> `readonly` **autocomplete**: [`AutocompleteAPI`](AutocompleteAPI.md)

#### Defined in

[lib/BandcampFetch.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L39)

***

### band

> `readonly` **band**: [`BandAPI`](BandAPI.md)

#### Defined in

[lib/BandcampFetch.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L33)

***

### discovery

> `readonly` **discovery**: [`DiscoveryAPI`](DiscoveryAPI.md)

#### Defined in

[lib/BandcampFetch.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L31)

***

### fan

> `readonly` **fan**: [`FanAPI`](FanAPI.md)

#### Defined in

[lib/BandcampFetch.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L37)

***

### image

> `readonly` **image**: [`ImageAPI`](ImageAPI.md)

#### Defined in

[lib/BandcampFetch.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L32)

***

### limiter

> `readonly` **limiter**: `object`

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

#### updateSettings()

> **updateSettings**: (`options`?) => `void`

##### Parameters

• **options?**: `ConstructorOptions`

##### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L42)

***

### search

> `readonly` **search**: [`SearchAPI`](SearchAPI.md)

#### Defined in

[lib/BandcampFetch.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L38)

***

### show

> `readonly` **show**: [`ShowAPI`](ShowAPI.md)

#### Defined in

[lib/BandcampFetch.ts:36](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L36)

***

### stream

> `readonly` **stream**: [`StreamAPI`](StreamAPI.md)

#### Defined in

[lib/BandcampFetch.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L40)

***

### tag

> `readonly` **tag**: [`TagAPI`](TagAPI.md)

#### Defined in

[lib/BandcampFetch.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L34)

***

### track

> `readonly` **track**: [`TrackAPI`](TrackAPI.md)

#### Defined in

[lib/BandcampFetch.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L30)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`CacheWrapper`](CacheWrapper.md)

##### Returns

[`CacheWrapper`](CacheWrapper.md)

#### Defined in

[lib/BandcampFetch.ts:122](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L122)

***

### cookie

#### Get Signature

> **get** **cookie**(): `undefined` \| `null` \| `string`

##### Returns

`undefined` \| `null` \| `string`

#### Defined in

[lib/BandcampFetch.ts:118](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L118)

## Methods

### setCookie()

> **setCookie**(`value`?): `void`

#### Parameters

• **value?**: `null` \| `string`

#### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:113](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/BandcampFetch.ts#L113)
