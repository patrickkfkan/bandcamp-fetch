[bandcamp-fetch](../README.md) / LimiterTagAPI

# Class: LimiterTagAPI

## Hierarchy

- [`TagAPI`](TagAPI.md)

  ↳ **`LimiterTagAPI`**

## Table of contents

### Constructors

- [constructor](LimiterTagAPI.md#constructor)

### Accessors

- [cache](LimiterTagAPI.md#cache)
- [imageAPI](LimiterTagAPI.md#imageapi)

### Methods

- [fetch](LimiterTagAPI.md#fetch)
- [getAlbumHighlights](LimiterTagAPI.md#getalbumhighlights)
- [getInfo](LimiterTagAPI.md#getinfo)
- [getReleases](LimiterTagAPI.md#getreleases)
- [getReleasesAvailableFilters](LimiterTagAPI.md#getreleasesavailablefilters)
- [list](LimiterTagAPI.md#list)

## Constructors

### constructor

• **new LimiterTagAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[TagAPI](TagAPI.md).[constructor](TagAPI.md#constructor)

#### Defined in

[lib/tag/TagAPI.ts:148](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L148)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

TagAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

TagAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

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

[TagAPI](TagAPI.md).[fetch](TagAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L19)

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

[TagAPI](TagAPI.md).[fetch](TagAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getAlbumHighlights

▸ **getAlbumHighlights**(`params`): `Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetAlbumHighlightsParams`](../interfaces/TagAPIGetAlbumHighlightsParams.md) |

#### Returns

`Promise`<[`AlbumHighlightsByTag`](../interfaces/AlbumHighlightsByTag.md)[]\>

#### Overrides

[TagAPI](TagAPI.md).[getAlbumHighlights](TagAPI.md#getalbumhighlights)

#### Defined in

[lib/tag/TagAPI.ts:161](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L161)

___

### getInfo

▸ **getInfo**(`tagUrl`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Overrides

[TagAPI](TagAPI.md).[getInfo](TagAPI.md#getinfo)

#### Defined in

[lib/tag/TagAPI.ts:157](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L157)

___

### getReleases

▸ **getReleases**(`params`): `Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetReleasesParams`](../interfaces/TagAPIGetReleasesParams.md) |

#### Returns

`Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Overrides

[TagAPI](TagAPI.md).[getReleases](TagAPI.md#getreleases)

#### Defined in

[lib/tag/TagAPI.ts:169](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L169)

___

### getReleasesAvailableFilters

▸ **getReleasesAvailableFilters**(`tagUrl`): `Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Overrides

[TagAPI](TagAPI.md).[getReleasesAvailableFilters](TagAPI.md#getreleasesavailablefilters)

#### Defined in

[lib/tag/TagAPI.ts:165](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L165)

___

### list

▸ **list**(): `Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Returns

`Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Overrides

[TagAPI](TagAPI.md).[list](TagAPI.md#list)

#### Defined in

[lib/tag/TagAPI.ts:153](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L153)
