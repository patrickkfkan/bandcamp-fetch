[bandcamp-fetch](../README.md) / LimiterImageAPI

# Class: LimiterImageAPI

## Hierarchy

- [`ImageAPI`](ImageAPI.md)

  ↳ **`LimiterImageAPI`**

## Table of contents

### Constructors

- [constructor](LimiterImageAPI.md#constructor)

### Accessors

- [cache](LimiterImageAPI.md#cache)

### Methods

- [fetch](LimiterImageAPI.md#fetch)
- [getFormat](LimiterImageAPI.md#getformat)
- [getFormats](LimiterImageAPI.md#getformats)

## Constructors

### constructor

• **new LimiterImageAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[ImageAPI](ImageAPI.md).[constructor](ImageAPI.md#constructor)

#### Defined in

[lib/image/ImageAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/image/ImageAPI.ts#L64)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

ImageAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

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

[ImageAPI](ImageAPI.md).[fetch](ImageAPI.md#fetch)

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

[ImageAPI](ImageAPI.md).[fetch](ImageAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

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

#### Overrides

[ImageAPI](ImageAPI.md).[getFormat](ImageAPI.md#getformat)

#### Defined in

[lib/image/ImageAPI.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/image/ImageAPI.ts#L73)

___

### getFormats

▸ **getFormats**(`filter?`): `Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ImageFormatFilter`](../enums/ImageFormatFilter.md) |

#### Returns

`Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Overrides

[ImageAPI](ImageAPI.md).[getFormats](ImageAPI.md#getformats)

#### Defined in

[lib/image/ImageAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/image/ImageAPI.ts#L69)
