[bandcamp-fetch](../README.md) / LimiterSearchAPI

# Class: LimiterSearchAPI

## Hierarchy

- [`SearchAPI`](SearchAPI.md)

  ↳ **`LimiterSearchAPI`**

## Table of contents

### Constructors

- [constructor](LimiterSearchAPI.md#constructor)

### Methods

- [albums](LimiterSearchAPI.md#albums)
- [all](LimiterSearchAPI.md#all)
- [artistsAndLabels](LimiterSearchAPI.md#artistsandlabels)
- [fans](LimiterSearchAPI.md#fans)
- [tracks](LimiterSearchAPI.md#tracks)

## Constructors

### constructor

• **new LimiterSearchAPI**()

#### Inherited from

[SearchAPI](SearchAPI.md).[constructor](SearchAPI.md#constructor)

## Methods

### albums

▸ `Static` **albums**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[albums](SearchAPI.md#albums)

#### Defined in

lib/search/SearchAPI.ts:95

___

### all

▸ `Static` **all**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[all](SearchAPI.md#all)

#### Defined in

lib/search/SearchAPI.ts:87

___

### artistsAndLabels

▸ `Static` **artistsAndLabels**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[artistsAndLabels](SearchAPI.md#artistsandlabels)

#### Defined in

lib/search/SearchAPI.ts:91

___

### fans

▸ `Static` **fans**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[fans](SearchAPI.md#fans)

#### Defined in

lib/search/SearchAPI.ts:103

___

### tracks

▸ `Static` **tracks**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Overrides

[SearchAPI](SearchAPI.md).[tracks](SearchAPI.md#tracks)

#### Defined in

lib/search/SearchAPI.ts:99
