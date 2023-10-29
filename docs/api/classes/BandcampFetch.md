[bandcamp-fetch](../README.md) / BandcampFetch

# Class: BandcampFetch

## Table of contents

### Constructors

- [constructor](BandcampFetch.md#constructor)

### Properties

- [album](BandcampFetch.md#album)
- [article](BandcampFetch.md#article)
- [autocomplete](BandcampFetch.md#autocomplete)
- [band](BandcampFetch.md#band)
- [discovery](BandcampFetch.md#discovery)
- [fan](BandcampFetch.md#fan)
- [image](BandcampFetch.md#image)
- [limiter](BandcampFetch.md#limiter)
- [search](BandcampFetch.md#search)
- [show](BandcampFetch.md#show)
- [stream](BandcampFetch.md#stream)
- [tag](BandcampFetch.md#tag)
- [track](BandcampFetch.md#track)

### Accessors

- [cache](BandcampFetch.md#cache)
- [cookie](BandcampFetch.md#cookie)

### Methods

- [setCookie](BandcampFetch.md#setcookie)

## Constructors

### constructor

• **new BandcampFetch**(`params?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`BandcampFetchParams`](../interfaces/BandcampFetchParams.md) |

#### Defined in

[lib/BandcampFetch.ts:59](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L59)

## Properties

### album

• `Readonly` **album**: [`AlbumAPI`](AlbumAPI.md)

#### Defined in

[lib/BandcampFetch.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L30)

___

### article

• `Readonly` **article**: [`ArticleAPI`](ArticleAPI.md)

#### Defined in

[lib/BandcampFetch.ts:36](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L36)

___

### autocomplete

• `Readonly` **autocomplete**: [`AutocompleteAPI`](AutocompleteAPI.md)

#### Defined in

[lib/BandcampFetch.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L40)

___

### band

• `Readonly` **band**: [`BandAPI`](BandAPI.md)

#### Defined in

[lib/BandcampFetch.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L34)

___

### discovery

• `Readonly` **discovery**: [`DiscoveryAPI`](DiscoveryAPI.md)

#### Defined in

[lib/BandcampFetch.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L32)

___

### fan

• `Readonly` **fan**: [`FanAPI`](FanAPI.md)

#### Defined in

[lib/BandcampFetch.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L38)

___

### image

• `Readonly` **image**: [`ImageAPI`](ImageAPI.md)

#### Defined in

[lib/BandcampFetch.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L33)

___

### limiter

• `Readonly` **limiter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `album` | [`LimiterAlbumAPI`](LimiterAlbumAPI.md) |
| `article` | [`LimiterArticleAPI`](LimiterArticleAPI.md) |
| `autocomplete` | [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md) |
| `band` | [`LimiterBandAPI`](LimiterBandAPI.md) |
| `discovery` | [`LimiterDiscoveryAPI`](LimiterDiscoveryAPI.md) |
| `fan` | [`LimiterFanAPI`](LimiterFanAPI.md) |
| `image` | [`LimiterImageAPI`](LimiterImageAPI.md) |
| `search` | [`LimiterSearchAPI`](LimiterSearchAPI.md) |
| `show` | [`LimiterShowAPI`](LimiterShowAPI.md) |
| `stream` | [`StreamAPI`](StreamAPI.md) |
| `tag` | [`LimiterTagAPI`](LimiterTagAPI.md) |
| `track` | [`LimiterTrackAPI`](LimiterTrackAPI.md) |
| `updateSettings` | (`options?`: `ConstructorOptions`) => `void` |

#### Defined in

[lib/BandcampFetch.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L43)

___

### search

• `Readonly` **search**: [`SearchAPI`](SearchAPI.md)

#### Defined in

[lib/BandcampFetch.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L39)

___

### show

• `Readonly` **show**: [`ShowAPI`](ShowAPI.md)

#### Defined in

[lib/BandcampFetch.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L37)

___

### stream

• `Readonly` **stream**: [`StreamAPI`](StreamAPI.md)

#### Defined in

[lib/BandcampFetch.ts:41](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L41)

___

### tag

• `Readonly` **tag**: [`TagAPI`](TagAPI.md)

#### Defined in

[lib/BandcampFetch.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L35)

___

### track

• `Readonly` **track**: [`TrackAPI`](TrackAPI.md)

#### Defined in

[lib/BandcampFetch.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L31)

## Accessors

### cache

• `get` **cache**(): [`CacheWrapper`](CacheWrapper.md)

#### Returns

[`CacheWrapper`](CacheWrapper.md)

#### Defined in

[lib/BandcampFetch.ts:123](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L123)

___

### cookie

• `get` **cookie**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[lib/BandcampFetch.ts:119](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L119)

## Methods

### setCookie

▸ **setCookie**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:114](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L114)
