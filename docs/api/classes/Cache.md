[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / Cache

# Class: Cache

Defined in: [lib/utils/Cache.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L8)

## Constructors

### Constructor

> **new Cache**(`ttl`, `maxEntries`): `Cache`

Defined in: [lib/utils/Cache.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L13)

#### Parameters

##### ttl

`Record`\<[`CacheDataType`](../enumerations/CacheDataType.md), `number`\>

##### maxEntries

`Record`\<`string`, `number`\>

#### Returns

`Cache`

## Methods

### clear()

> **clear**(`type?`): `void`

Defined in: [lib/utils/Cache.ts:82](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L82)

#### Parameters

##### type?

[`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`type`, `key`): `T` \| `undefined`

Defined in: [lib/utils/Cache.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L43)

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### key

`string`

#### Returns

`T` \| `undefined`

***

### getKeys()

> **getKeys**(`type`): `string`[]

Defined in: [lib/utils/Cache.ts:78](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L78)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`string`[]

***

### getMaxEntries()

> **getMaxEntries**(`type`): `number`

Defined in: [lib/utils/Cache.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L38)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

#### Returns

`number`

***

### getOrSet()

> **getOrSet**\<`T`\>(`type`, `key`, `promiseCallback`): `Promise`\<`T`\>

Defined in: [lib/utils/Cache.ts:92](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L92)

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### key

`string`

##### promiseCallback

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### put()

> **put**\<`T`\>(`type`, `key`, `value`): `boolean`

Defined in: [lib/utils/Cache.ts:48](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L48)

#### Type Parameters

##### T

`T`

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### key

`string`

##### value

`T`

#### Returns

`boolean`

***

### reduceEntries()

> **reduceEntries**(`type`, `reduceTo?`): `void`

Defined in: [lib/utils/Cache.ts:66](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L66)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### reduceTo?

`number`

#### Returns

`void`

***

### setMaxEntries()

> **setMaxEntries**(`type`, `maxEntries`): `void`

Defined in: [lib/utils/Cache.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L33)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### maxEntries

`number`

#### Returns

`void`

***

### setTTL()

> **setTTL**(`type`, `ttl`): `void`

Defined in: [lib/utils/Cache.ts:24](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Cache.ts#L24)

#### Parameters

##### type

[`CacheDataType`](../enumerations/CacheDataType.md)

##### ttl

`number`

#### Returns

`void`
