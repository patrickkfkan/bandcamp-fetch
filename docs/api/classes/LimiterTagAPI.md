[bandcamp-fetch](../README.md) / LimiterTagAPI

# Class: LimiterTagAPI

## Hierarchy

- [`TagAPI`](TagAPI.md)

  ↳ **`LimiterTagAPI`**

## Table of contents

### Constructors

- [constructor](LimiterTagAPI.md#constructor)

### Methods

- [getAlbumHighlights](LimiterTagAPI.md#getalbumhighlights)
- [getInfo](LimiterTagAPI.md#getinfo)
- [getReleases](LimiterTagAPI.md#getreleases)
- [getReleasesAvailableFilters](LimiterTagAPI.md#getreleasesavailablefilters)
- [list](LimiterTagAPI.md#list)

## Constructors

### constructor

• **new LimiterTagAPI**()

#### Inherited from

[TagAPI](TagAPI.md).[constructor](TagAPI.md#constructor)

## Methods

### getAlbumHighlights

▸ `Static` **getAlbumHighlights**(`params`): `Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetAlbumHighlightsParams`](../interfaces/TagAPIGetAlbumHighlightsParams.md) |

#### Returns

`Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Overrides

[TagAPI](TagAPI.md).[getAlbumHighlights](TagAPI.md#getalbumhighlights)

#### Defined in

lib/tag/TagAPI.ts:151

___

### getInfo

▸ `Static` **getInfo**(`tagUrl`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Overrides

[TagAPI](TagAPI.md).[getInfo](TagAPI.md#getinfo)

#### Defined in

lib/tag/TagAPI.ts:147

___

### getReleases

▸ `Static` **getReleases**(`params`): `Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetReleasesParams`](../interfaces/TagAPIGetReleasesParams.md) |

#### Returns

`Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Overrides

[TagAPI](TagAPI.md).[getReleases](TagAPI.md#getreleases)

#### Defined in

lib/tag/TagAPI.ts:159

___

### getReleasesAvailableFilters

▸ `Static` **getReleasesAvailableFilters**(`tagUrl`): `Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Overrides

[TagAPI](TagAPI.md).[getReleasesAvailableFilters](TagAPI.md#getreleasesavailablefilters)

#### Defined in

lib/tag/TagAPI.ts:155

___

### list

▸ `Static` **list**(): `Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Returns

`Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Overrides

[TagAPI](TagAPI.md).[list](TagAPI.md#list)

#### Defined in

lib/tag/TagAPI.ts:143
