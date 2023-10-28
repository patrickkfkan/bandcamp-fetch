[bandcamp-fetch](../README.md) / ImageAPI

# Class: ImageAPI

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ImageAPI`**

  ↳↳ [`LimiterImageAPI`](LimiterImageAPI.md)

## Table of contents

### Constructors

- [constructor](ImageAPI.md#constructor)

### Accessors

- [cache](ImageAPI.md#cache)

### Methods

- [fetch](ImageAPI.md#fetch)
- [getFormat](ImageAPI.md#getformat)
- [getFormats](ImageAPI.md#getformats)

## Constructors

### constructor

• **new ImageAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[lib/common/BaseAPI.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L14)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

___

### getFormat

▸ **getFormat**(`target?`, `fallbackId?`): `Promise`<``null`` \| [`ImageFormat`](../interfaces/ImageFormat.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `string` \| `number` \| [`ImageFormat`](../interfaces/ImageFormat.md) |
| `fallbackId?` | `number` |

#### Returns

`Promise`<``null`` \| [`ImageFormat`](../interfaces/ImageFormat.md)\>

#### Defined in

[lib/image/ImageAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/image/ImageAPI.ts#L27)

___

### getFormats

▸ **getFormats**(`filter?`): `Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ImageFormatFilter`](../enums/ImageFormatFilter.md) |

#### Returns

`Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Defined in

[lib/image/ImageAPI.ts:47](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/image/ImageAPI.ts#L47)
