[bandcamp-fetch](../README.md) / SearchAPI

# Class: SearchAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`SearchAPI`**

  ↳↳ [`LimiterSearchAPI`](LimiterSearchAPI.md)

## Table of contents

### Constructors

- [constructor](SearchAPI.md#constructor)

### Accessors

- [cache](SearchAPI.md#cache)
- [imageAPI](SearchAPI.md#imageapi)

### Methods

- [albums](SearchAPI.md#albums)
- [all](SearchAPI.md#all)
- [artistsAndLabels](SearchAPI.md#artistsandlabels)
- [fans](SearchAPI.md#fans)
- [fetch](SearchAPI.md#fetch)
- [search](SearchAPI.md#search)
- [tracks](SearchAPI.md#tracks)

## Constructors

### constructor

• **new SearchAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### albums

▸ **albums**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L34)

___

### all

▸ **all**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Defined in

[lib/search/SearchAPI.ts:26](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L26)

___

### artistsAndLabels

▸ **artistsAndLabels**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L30)

___

### fans

▸ **fans**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L42)

___

### fetch

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L19)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

___

### search

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Albums`](../enums/SearchItemType.md#albums)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L50)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Tracks`](../enums/SearchItemType.md#tracks)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L51)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Fans`](../enums/SearchItemType.md#fans)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L52)

▸ `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`All`](../enums/SearchItemType.md#all)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L53)

___

### tracks

▸ **tracks**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/search/SearchAPI.ts#L38)
