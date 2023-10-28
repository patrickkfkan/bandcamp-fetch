[bandcamp-fetch](../README.md) / Cache

# Class: Cache

## Table of contents

### Constructors

- [constructor](Cache.md#constructor)

### Methods

- [clear](Cache.md#clear)
- [get](Cache.md#get)
- [getKeys](Cache.md#getkeys)
- [getMaxEntries](Cache.md#getmaxentries)
- [getOrSet](Cache.md#getorset)
- [put](Cache.md#put)
- [reduceEntries](Cache.md#reduceentries)
- [setMaxEntries](Cache.md#setmaxentries)
- [setTTL](Cache.md#setttl)

## Constructors

### constructor

• **new Cache**(`ttl`, `maxEntries`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ttl` | `Record`<[`CacheDataType`](../enums/CacheDataType.md), `number`\> |
| `maxEntries` | `Record`<`string`, `number`\> |

#### Defined in

[lib/utils/Cache.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L13)

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

[lib/utils/Cache.ts:74](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L74)

___

### get

▸ **get**<`T`\>(`type`, `key`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[lib/utils/Cache.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L39)

___

### getKeys

▸ **getKeys**(`type`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |

#### Returns

`string`[]

#### Defined in

[lib/utils/Cache.ts:70](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L70)

___

### getMaxEntries

▸ **getMaxEntries**(`type`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |

#### Returns

`number`

#### Defined in

[lib/utils/Cache.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L35)

___

### getOrSet

▸ **getOrSet**<`T`\>(`type`, `key`, `promiseCallback`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `key` | `string` |
| `promiseCallback` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[lib/utils/Cache.ts:85](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L85)

___

### put

▸ **put**<`T`\>(`type`, `key`, `value`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `key` | `string` |
| `value` | `T` |

#### Returns

`boolean`

#### Defined in

[lib/utils/Cache.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L43)

___

### reduceEntries

▸ **reduceEntries**(`type`, `reduceTo?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `reduceTo?` | `number` |

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L58)

___

### setMaxEntries

▸ **setMaxEntries**(`type`, `maxEntries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CacheDataType`](../enums/CacheDataType.md) |
| `maxEntries` | `number` |

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L30)

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

[lib/utils/Cache.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/utils/Cache.ts#L21)
