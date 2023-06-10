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

lib/search/SearchAPI.ts:35

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

lib/search/SearchAPI.ts:27

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

lib/search/SearchAPI.ts:31

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

lib/search/SearchAPI.ts:43

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

lib/search/SearchAPI.ts:39
