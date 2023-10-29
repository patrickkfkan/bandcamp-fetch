[bandcamp-fetch](../README.md) / AlbumAPI

# Class: AlbumAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`AlbumAPI`**

  ↳↳ [`LimiterAlbumAPI`](LimiterAlbumAPI.md)

## Table of contents

### Constructors

- [constructor](AlbumAPI.md#constructor)

### Accessors

- [cache](AlbumAPI.md#cache)
- [imageAPI](AlbumAPI.md#imageapi)

### Methods

- [fetch](AlbumAPI.md#fetch)
- [getInfo](AlbumAPI.md#getinfo)

## Constructors

### constructor

• **new AlbumAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L27)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L22)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Album`](../interfaces/Album.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AlbumAPIGetInfoParams`](../interfaces/AlbumAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Album`](../interfaces/Album.md)\>

#### Defined in

[lib/album/AlbumAPI.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/album/AlbumAPI.ts#L16)
