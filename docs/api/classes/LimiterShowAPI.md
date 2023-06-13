[bandcamp-fetch](../README.md) / LimiterShowAPI

# Class: LimiterShowAPI

## Hierarchy

- [`ShowAPI`](ShowAPI.md)

  ↳ **`LimiterShowAPI`**

## Table of contents

### Constructors

- [constructor](LimiterShowAPI.md#constructor)

### Methods

- [getShow](LimiterShowAPI.md#getshow)
- [list](LimiterShowAPI.md#list)

## Constructors

### constructor

• **new LimiterShowAPI**()

#### Inherited from

[ShowAPI](ShowAPI.md).[constructor](ShowAPI.md#constructor)

## Methods

### getShow

▸ `Static` **getShow**(`params`): `Promise`<[`Show`](../interfaces/Show.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ShowAPIGetShowParams`](../interfaces/ShowAPIGetShowParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)\>

#### Overrides

[ShowAPI](ShowAPI.md).[getShow](ShowAPI.md#getshow)

#### Defined in

[lib/show/ShowAPI.ts:49](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/show/ShowAPI.ts#L49)

___

### list

▸ `Static` **list**(`params?`): `Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ShowAPIListParams`](../interfaces/ShowAPIListParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Overrides

[ShowAPI](ShowAPI.md).[list](ShowAPI.md#list)

#### Defined in

[lib/show/ShowAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/show/ShowAPI.ts#L53)
