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
- [search](LimiterSearchAPI.md#search)
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

[lib/search/SearchAPI.ts:101](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L101)

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

[lib/search/SearchAPI.ts:93](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L93)

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

[lib/search/SearchAPI.ts:97](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L97)

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

[lib/search/SearchAPI.ts:109](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L109)

___

### search

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Albums`](../enums/SearchItemType.md#albums)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L51)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Tracks`](../enums/SearchItemType.md#tracks)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L52)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`Fans`](../enums/SearchItemType.md#fans)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

#### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L53)

▸ `Static` `Protected` **search**(`params`): `Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & { `itemType`: [`All`](../enums/SearchItemType.md#all)  } |

#### Returns

`Promise`<[`SearchResults`](../interfaces/SearchResults.md)<[`SearchResultAny`](../README.md#searchresultany)\>\>

#### Inherited from

[SearchAPI](SearchAPI.md).[search](SearchAPI.md#search)

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

#### Overrides

[SearchAPI](SearchAPI.md).[tracks](SearchAPI.md#tracks)

#### Defined in

[lib/search/SearchAPI.ts:105](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/search/SearchAPI.ts#L105)
