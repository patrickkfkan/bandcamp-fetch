[bandcamp-fetch](../README.md) / LimiterAlbumAPI

# Class: LimiterAlbumAPI

## Hierarchy

- [`AlbumAPI`](AlbumAPI.md)

  ↳ **`LimiterAlbumAPI`**

## Table of contents

### Constructors

- [constructor](LimiterAlbumAPI.md#constructor)

### Accessors

- [cache](LimiterAlbumAPI.md#cache)
- [imageAPI](LimiterAlbumAPI.md#imageapi)

### Methods

- [fetch](LimiterAlbumAPI.md#fetch)
- [getInfo](LimiterAlbumAPI.md#getinfo)

## Constructors

### constructor

• **new LimiterAlbumAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[AlbumAPI](AlbumAPI.md).[constructor](AlbumAPI.md#constructor)

#### Defined in

[lib/album/AlbumAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/album/AlbumAPI.ts#L33)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

AlbumAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

AlbumAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L17)

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

[AlbumAPI](AlbumAPI.md).[fetch](AlbumAPI.md#fetch)

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

[AlbumAPI](AlbumAPI.md).[fetch](AlbumAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Album`](../interfaces/Album.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AlbumAPIGetInfoParams`](../interfaces/AlbumAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Album`](../interfaces/Album.md)\>

#### Overrides

[AlbumAPI](AlbumAPI.md).[getInfo](AlbumAPI.md#getinfo)

#### Defined in

[lib/album/AlbumAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/album/AlbumAPI.ts#L38)
