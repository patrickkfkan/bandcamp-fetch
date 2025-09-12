[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / Cache

# Class: Cache

## Constructors

### new Cache()

> **new Cache**(`ttl`, `maxEntries`): [`Cache`](Cache.md)

#### Parameters

• **ttl**: `Record`\<[`CacheDataType`](../enumerations/CacheDataType.md), `number`\>

• **maxEntries**: `Record`\<`string`, `number`\>

#### Returns

[`Cache`](Cache.md)

#### Defined in

[lib/utils/Cache.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L13)

## Methods

### clear()

> **clear**(`type`?): `void`

#### Parameters

• **type?**: [`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:76](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L76)

***

### get()

> **get**\<`T`\>(`type`, `key`): `undefined` \| `T`

#### Type Parameters

• **T**

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **key**: `string`

#### Returns

`undefined` \| `T`

#### Defined in

[lib/utils/Cache.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L40)

***

### getKeys()

> **getKeys**(`type`): `string`[]

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`string`[]

#### Defined in

[lib/utils/Cache.ts:72](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L72)

***

### getMaxEntries()

> **getMaxEntries**(`type`): `number`

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`number`

#### Defined in

[lib/utils/Cache.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L35)

***

### getOrSet()

> **getOrSet**\<`T`\>(`type`, `key`, `promiseCallback`): `Promise`\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **key**: `string`

• **promiseCallback**

#### Returns

`Promise`\<`T`\>

#### Defined in

[lib/utils/Cache.ts:87](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L87)

***

### put()

> **put**\<`T`\>(`type`, `key`, `value`): `boolean`

#### Type Parameters

• **T**

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **key**: `string`

• **value**: `T`

#### Returns

`boolean`

#### Defined in

[lib/utils/Cache.ts:45](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L45)

***

### reduceEntries()

> **reduceEntries**(`type`, `reduceTo`?): `void`

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **reduceTo?**: `number`

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L60)

***

### setMaxEntries()

> **setMaxEntries**(`type`, `maxEntries`): `void`

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **maxEntries**: `number`

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L30)

***

### setTTL()

> **setTTL**(`type`, `ttl`): `void`

#### Parameters

• **type**: [`CacheDataType`](../enumerations/CacheDataType.md)

• **ttl**: `number`

#### Returns

`void`

#### Defined in

[lib/utils/Cache.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Cache.ts#L21)
