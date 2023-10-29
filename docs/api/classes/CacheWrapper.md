[bandcamp-fetch](../README.md) / CacheWrapper

# Class: CacheWrapper

## Table of contents

### Constructors

- [constructor](CacheWrapper.md#constructor)

### Methods

- [clear](CacheWrapper.md#clear)
- [setMaxPages](CacheWrapper.md#setmaxpages)
- [setTTL](CacheWrapper.md#setttl)

## Constructors

### constructor

• **new CacheWrapper**(`cache`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cache` | [`Cache`](Cache.md) |

#### Defined in

[lib/BandcampFetch.ts:132](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L132)

## Methods

### clear

▸ **clear**(`type?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`CacheDataType`](../enums/CacheDataType.md) |

#### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:136](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L136)

___

### setMaxPages

▸ **setMaxPages**(`maxPages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxPages` | `number` |

#### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:144](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L144)

___

### setTTL

▸ **setTTL**(`type`, `ttl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `ttl` | `number` |

#### Returns

`void`

#### Defined in

[lib/BandcampFetch.ts:140](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/BandcampFetch.ts#L140)
