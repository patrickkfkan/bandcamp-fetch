[bandcamp-fetch](../README.md) / ShowAPI

# Class: ShowAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`ShowAPI`**

  ↳↳ [`LimiterShowAPI`](LimiterShowAPI.md)

## Table of contents

### Constructors

- [constructor](ShowAPI.md#constructor)

### Accessors

- [cache](ShowAPI.md#cache)
- [imageAPI](ShowAPI.md#imageapi)

### Methods

- [fetch](ShowAPI.md#fetch)
- [getShow](ShowAPI.md#getshow)
- [list](ShowAPI.md#list)

## Constructors

### constructor

• **new ShowAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

___

### getShow

▸ **getShow**(`params`): `Promise`<[`Show`](../interfaces/Show.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ShowAPIGetShowParams`](../interfaces/ShowAPIGetShowParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)\>

#### Defined in

[lib/show/ShowAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/show/ShowAPI.ts#L22)

___

### list

▸ **list**(`params?`): `Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ShowAPIListParams`](../interfaces/ShowAPIListParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Defined in

[lib/show/ShowAPI.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/show/ShowAPI.ts#L35)
