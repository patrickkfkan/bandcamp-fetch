[bandcamp-fetch](../README.md) / LimiterShowAPI

# Class: LimiterShowAPI

## Hierarchy

- [`ShowAPI`](ShowAPI.md)

  ↳ **`LimiterShowAPI`**

## Table of contents

### Constructors

- [constructor](LimiterShowAPI.md#constructor)

### Accessors

- [cache](LimiterShowAPI.md#cache)
- [imageAPI](LimiterShowAPI.md#imageapi)

### Methods

- [fetch](LimiterShowAPI.md#fetch)
- [getShow](LimiterShowAPI.md#getshow)
- [list](LimiterShowAPI.md#list)

## Constructors

### constructor

• **new LimiterShowAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[ShowAPI](ShowAPI.md).[constructor](ShowAPI.md#constructor)

#### Defined in

[lib/show/ShowAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/show/ShowAPI.ts#L50)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

ShowAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

ShowAPI.imageAPI

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

[ShowAPI](ShowAPI.md).[fetch](ShowAPI.md#fetch)

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

[ShowAPI](ShowAPI.md).[fetch](ShowAPI.md#fetch)

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

#### Overrides

[ShowAPI](ShowAPI.md).[getShow](ShowAPI.md#getshow)

#### Defined in

[lib/show/ShowAPI.ts:55](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/show/ShowAPI.ts#L55)

___

### list

▸ **list**(`params?`): `Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ShowAPIListParams`](../interfaces/ShowAPIListParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Overrides

[ShowAPI](ShowAPI.md).[list](ShowAPI.md#list)

#### Defined in

[lib/show/ShowAPI.ts:59](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/show/ShowAPI.ts#L59)
