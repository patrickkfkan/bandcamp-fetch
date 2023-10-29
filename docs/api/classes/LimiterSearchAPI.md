[bandcamp-fetch](../README.md) / LimiterSearchAPI

# Class: LimiterSearchAPI

## Hierarchy

- [`SearchAPI`](SearchAPI.md)

  ↳ **`LimiterSearchAPI`**

## Table of contents

### Constructors

- [constructor](LimiterSearchAPI.md#constructor)

### Accessors

- [cache](LimiterSearchAPI.md#cache)
- [imageAPI](LimiterSearchAPI.md#imageapi)

### Methods

- [albums](LimiterSearchAPI.md#albums)
- [all](LimiterSearchAPI.md#all)
- [artistsAndLabels](LimiterSearchAPI.md#artistsandlabels)
- [fans](LimiterSearchAPI.md#fans)
- [fetch](LimiterSearchAPI.md#fetch)
- [search](LimiterSearchAPI.md#search)
- [tracks](LimiterSearchAPI.md#tracks)

## Constructors

### constructor

• **new LimiterSearchAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[SearchAPI](SearchAPI.md).[constructor](SearchAPI.md#constructor)

#### Defined in

[lib/search/SearchAPI.ts:94](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L94)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

SearchAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L27)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

SearchAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### albums

▸ **albums**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[albums](SearchAPI.md#albums)

#### Defined in

[lib/search/SearchAPI.ts:107](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L107)

___

### all

▸ **all**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[all](SearchAPI.md#all)

#### Defined in

[lib/search/SearchAPI.ts:99](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L99)

___

### artistsAndLabels

▸ **artistsAndLabels**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[artistsAndLabels](SearchAPI.md#artistsandlabels)

#### Defined in

[lib/search/SearchAPI.ts:103](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L103)

___

### fans

▸ **fans**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[fans](SearchAPI.md#fans)

#### Defined in

[lib/search/SearchAPI.ts:115](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L115)

___

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``false`` |
| `method` | [`HEAD`](../enums/FetchMethod.md#head) |
| `payload?` | `undefined` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[SearchAPI](SearchAPI.md).[fetch](SearchAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L20)

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``true`` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[SearchAPI](SearchAPI.md).[fetch](SearchAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L21)

▸ `Protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse?` | `boolean` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[SearchAPI](SearchAPI.md).[fetch](SearchAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L22)

___

### search

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Albums`](../enums/SearchItemType.md#albums)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L50)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Tracks`](../enums/SearchItemType.md#tracks)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L51)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Fans`](../enums/SearchItemType.md#fans)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L52)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`All`](../enums/SearchItemType.md#all)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L53)

___

### tracks

▸ **tracks**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[tracks](SearchAPI.md#tracks)

#### Defined in

[lib/search/SearchAPI.ts:111](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/search/SearchAPI.ts#L111)
