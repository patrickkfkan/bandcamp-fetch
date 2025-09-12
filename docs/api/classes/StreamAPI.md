[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / StreamAPI

# Class: StreamAPI

## Extends

- [`BaseAPI`](BaseAPI.md)

## Extended by

- [`LimiterStreamAPI`](LimiterStreamAPI.md)

## Constructors

### new StreamAPI()

> **new StreamAPI**(`params`): [`StreamAPI`](StreamAPI.md)

#### Parameters

• **params**: [`BaseAPIParams`](../interfaces/BaseAPIParams.md)

#### Returns

[`StreamAPI`](StreamAPI.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`constructor`](BaseAPI.md#constructors)

#### Defined in

[lib/common/BaseAPI.ts:15](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L15)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`cache`](BaseAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

## Methods

### fetch()

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload`?): `Promise`\<`object`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `false`

• **method**: [`HEAD`](../enumerations/FetchMethod.md#head)

• **payload?**: `undefined`

##### Returns

`Promise`\<`object`\>

###### ok

> **ok**: `boolean`

###### status

> **status**: `number`

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L20)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`?, `payload`?): `Promise`\<`any`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `true`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L21)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`?, `method`?, `payload`?): `Promise`\<`string`\>

##### Parameters

• **url**: `string`

• **jsonResponse?**: `boolean`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### refresh()

> **refresh**(`url`): `Promise`\<`null` \| `string`\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Defined in

[lib/stream/StreamAPI.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/stream/StreamAPI.ts#L17)

***

### test()

> **test**(`url`): `Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Defined in

[lib/stream/StreamAPI.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/stream/StreamAPI.ts#L13)
