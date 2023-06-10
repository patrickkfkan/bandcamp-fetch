[bandcamp-fetch](../README.md) / ShowAPI

# Class: ShowAPI

## Hierarchy

- **`ShowAPI`**

  ↳ [`LimiterShowAPI`](LimiterShowAPI.md)

## Table of contents

### Constructors

- [constructor](ShowAPI.md#constructor)

### Methods

- [getShow](ShowAPI.md#getshow)
- [list](ShowAPI.md#list)

## Constructors

### constructor

• **new ShowAPI**()

## Methods

### getShow

▸ `Static` **getShow**(`params`): `Promise`<[`Show`](../interfaces/Show.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ShowAPIGetShowParams`](../interfaces/ShowAPIGetShowParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)\>

#### Defined in

lib/show/ShowAPI.ts:23

___

### list

▸ `Static` **list**(`params?`): `Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ShowAPIListParams`](../interfaces/ShowAPIListParams.md) |

#### Returns

`Promise`<[`Show`](../interfaces/Show.md)[]\>

#### Defined in

lib/show/ShowAPI.ts:36
