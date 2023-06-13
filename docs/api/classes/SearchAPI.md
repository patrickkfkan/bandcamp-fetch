[bandcamp-fetch](../README.md) / SearchAPI

# Class: SearchAPI

## Hierarchy

- **`SearchAPI`**

  ↳ [`LimiterSearchAPI`](LimiterSearchAPI.md)

## Table of contents

### Constructors

- [constructor](SearchAPI.md#constructor)

### Methods

- [albums](SearchAPI.md#albums)
- [all](SearchAPI.md#all)
- [artistsAndLabels](SearchAPI.md#artistsandlabels)
- [fans](SearchAPI.md#fans)
- [search](SearchAPI.md#search)
- [tracks](SearchAPI.md#tracks)

## Constructors

### constructor

• **new SearchAPI**()

## Methods

### albums

▸ `Static` **albums**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L35)

___

### all

▸ `Static` **all**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Defined in

[lib/search/SearchAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L27)

___

### artistsAndLabels

▸ `Static` **artistsAndLabels**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L31)

___

### fans

▸ `Static` **fans**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L43)

___

### search

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Albums`](../enums/SearchItemType.md#albums)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L51)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Tracks`](../enums/SearchItemType.md#tracks)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L52)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Fans`](../enums/SearchItemType.md#fans)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L53)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`All`](../enums/SearchItemType.md#all)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Defined in

[lib/search/SearchAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L54)

___

### tracks

▸ `Static` **tracks**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L39)
