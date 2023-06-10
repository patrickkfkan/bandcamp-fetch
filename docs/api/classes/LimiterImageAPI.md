[bandcamp-fetch](../README.md) / LimiterImageAPI

# Class: LimiterImageAPI

## Hierarchy

- [`ImageAPI`](ImageAPI.md)

  ↳ **`LimiterImageAPI`**

## Table of contents

### Constructors

- [constructor](LimiterImageAPI.md#constructor)

### Methods

- [getFormat](LimiterImageAPI.md#getformat)
- [getFormats](LimiterImageAPI.md#getformats)

## Constructors

### constructor

• **new LimiterImageAPI**()

#### Inherited from

[ImageAPI](ImageAPI.md).[constructor](ImageAPI.md#constructor)

## Methods

### getFormat

▸ `Static` **getFormat**(`target?`, `fallbackId?`): `Promise`<``null`` \| [`ImageFormat`](../interfaces/ImageFormat.md)\>

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

lib/image/ImageAPI.ts:66

___

### getFormats

▸ `Static` **getFormats**(`filter?`): `Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ImageFormatFilter`](../enums/ImageFormatFilter.md) |

#### Returns

`Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Overrides

[ImageAPI](ImageAPI.md).[getFormats](ImageAPI.md#getformats)

#### Defined in

lib/image/ImageAPI.ts:62
