[bandcamp-fetch](../README.md) / BaseAPIWithImageSupport

# Class: BaseAPIWithImageSupport

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BaseAPIWithImageSupport`**

  ↳↳ [`AlbumAPI`](AlbumAPI.md)

  ↳↳ [`ArticleAPI`](ArticleAPI.md)

  ↳↳ [`BandAPI`](BandAPI.md)

  ↳↳ [`DiscoveryAPI`](DiscoveryAPI.md)

  ↳↳ [`FanAPI`](FanAPI.md)

  ↳↳ [`ShowAPI`](ShowAPI.md)

  ↳↳ [`TagAPI`](TagAPI.md)

  ↳↳ [`TrackAPI`](TrackAPI.md)

  ↳↳ [`SearchAPI`](SearchAPI.md)

## Table of contents

### Constructors

- [constructor](BaseAPIWithImageSupport.md#constructor)

### Accessors

- [cache](BaseAPIWithImageSupport.md#cache)
- [imageAPI](BaseAPIWithImageSupport.md#imageapi)

### Methods

- [fetch](BaseAPIWithImageSupport.md#fetch)

## Constructors

### constructor

• **new BaseAPIWithImageSupport**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Overrides

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)
