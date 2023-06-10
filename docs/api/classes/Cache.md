[bandcamp-fetch](../README.md) / Cache

# Class: Cache

## Table of contents

### Constructors

- [constructor](Cache.md#constructor)

### Methods

- [clear](Cache.md#clear)
- [setMaxPages](Cache.md#setmaxpages)
- [setTTL](Cache.md#setttl)

## Constructors

### constructor

• **new Cache**()

## Methods

### clear

▸ `Static` **clear**(`type?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`CacheDataType`](../enums/CacheDataType.md) |

#### Returns

`void`

#### Defined in

index.ts:69

___

### setMaxPages

▸ `Static` **setMaxPages**(`maxPages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxPages` | `number` |

#### Returns

`void`

#### Defined in

index.ts:77

___

### setTTL

▸ `Static` **setTTL**(`type`, `ttl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `ttl` | `number` |

#### Returns

`void`

#### Defined in

index.ts:73
