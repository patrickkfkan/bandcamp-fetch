[bandcamp-fetch](../README.md) / ImageAPI

# Class: ImageAPI

## Hierarchy

- **`ImageAPI`**

  ↳ [`LimiterImageAPI`](LimiterImageAPI.md)

## Table of contents

### Constructors

- [constructor](ImageAPI.md#constructor)

### Methods

- [getFormat](ImageAPI.md#getformat)
- [getFormats](ImageAPI.md#getformats)

## Constructors

### constructor

• **new ImageAPI**()

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

#### Defined in

lib/image/ImageAPI.ts:27

___

### getFormats

▸ `Static` **getFormats**(`filter?`): `Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ImageFormatFilter`](../enums/ImageFormatFilter.md) |

#### Returns

`Promise`<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Defined in

lib/image/ImageAPI.ts:47
