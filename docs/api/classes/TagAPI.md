[bandcamp-fetch](../README.md) / TagAPI

# Class: TagAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`TagAPI`**

  ↳↳ [`LimiterTagAPI`](LimiterTagAPI.md)

## Table of contents

### Constructors

- [constructor](TagAPI.md#constructor)

### Accessors

- [cache](TagAPI.md#cache)
- [imageAPI](TagAPI.md#imageapi)

### Methods

- [fetch](TagAPI.md#fetch)
- [getAlbumHighlights](TagAPI.md#getalbumhighlights)
- [getInfo](TagAPI.md#getinfo)
- [getReleases](TagAPI.md#getreleases)
- [getReleasesAvailableFilters](TagAPI.md#getreleasesavailablefilters)
- [list](TagAPI.md#list)

## Constructors

### constructor

• **new TagAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

#### Defined in

[lib/tag/TagAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L38)

___

### getInfo

▸ **getInfo**(`tagUrl`): `Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Tag`](../interfaces/Tag.md)\>

#### Defined in

[lib/tag/TagAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L33)

___

### getReleases

▸ **getReleases**(`params`): `Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TagAPIGetReleasesParams`](../interfaces/TagAPIGetReleasesParams.md) |

#### Returns

`Promise`<[`ReleasesByTag`](../interfaces/ReleasesByTag-1.md)\>

#### Defined in

[lib/tag/TagAPI.ts:55](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L55)

___

### getReleasesAvailableFilters

▸ **getReleasesAvailableFilters**(`tagUrl`): `Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagUrl` | `string` |

#### Returns

`Promise`<[`Filter`](../interfaces/ReleasesByTag.Filter.md)[]\>

#### Defined in

[lib/tag/TagAPI.ts:49](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L49)

___

### list

▸ **list**(): `Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Returns

`Promise`<[`TagList`](../interfaces/TagList.md)\>

#### Defined in

[lib/tag/TagAPI.ts:28](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/tag/TagAPI.ts#L28)
