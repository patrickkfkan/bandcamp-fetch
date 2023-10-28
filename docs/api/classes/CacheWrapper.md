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

[lib/BandcampFetch.ts:127](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/BandcampFetch.ts#L127)

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

[lib/BandcampFetch.ts:131](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/BandcampFetch.ts#L131)

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

[lib/BandcampFetch.ts:139](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/BandcampFetch.ts#L139)

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

[lib/BandcampFetch.ts:135](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/BandcampFetch.ts#L135)
