[bandcamp-fetch](../README.md) / TagAPI

# Class: TagAPI

## Hierarchy

- **`TagAPI`**

  ↳ [`LimiterTagAPI`](LimiterTagAPI.md)

## Table of contents

### Constructors

- [constructor](TagAPI.md#constructor)

### Methods

- [getAlbumHighlights](TagAPI.md#getalbumhighlights)
- [getInfo](TagAPI.md#getinfo)
- [getReleases](TagAPI.md#getreleases)
- [getReleasesAvailableFilters](TagAPI.md#getreleasesavailablefilters)
- [list](TagAPI.md#list)

## Constructors

### constructor

• **new TagAPI**()

## Methods

### getAlbumHighlights

▸ `Static` **getAlbumHighlights**(`params`): `Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetAlbumHighlightsParams`](../interfaces/TagAPIGetAlbumHighlightsParams.md) |

#### Returns

`Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Defined in

[lib/tag/TagAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/tag/TagAPI.ts#L38)

___

### getInfo

▸ `Static` **getInfo**(`tagUrl`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Defined in

[lib/tag/TagAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/tag/TagAPI.ts#L33)

___

### getReleases

▸ `Static` **getReleases**(`params`): `Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetReleasesParams`](../interfaces/TagAPIGetReleasesParams.md) |

#### Returns

`Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Defined in

[lib/tag/TagAPI.ts:55](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/tag/TagAPI.ts#L55)

___

### getReleasesAvailableFilters

▸ `Static` **getReleasesAvailableFilters**(`tagUrl`): `Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Defined in

[lib/tag/TagAPI.ts:49](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/tag/TagAPI.ts#L49)

___

### list

▸ `Static` **list**(): `Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Returns

`Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Defined in

[lib/tag/TagAPI.ts:28](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/tag/TagAPI.ts#L28)
