[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterStreamAPI

# Class: LimiterStreamAPI

## Extends

- [`StreamAPI`](StreamAPI.md)

## Constructors

### new LimiterStreamAPI()

> **new LimiterStreamAPI**(`params`): [`LimiterStreamAPI`](LimiterStreamAPI.md)

#### Parameters

• **params**: [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & `object`

#### Returns

[`LimiterStreamAPI`](LimiterStreamAPI.md)

#### Overrides

[`StreamAPI`](StreamAPI.md).[`constructor`](StreamAPI.md#constructors)

#### Defined in

[lib/stream/StreamAPI.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/stream/StreamAPI.ts#L32)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`StreamAPI`](StreamAPI.md).[`cache`](StreamAPI.md#cache)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### refresh()

> **refresh**(`url`): `Promise`\<`null` \| `string`\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

[`StreamAPI`](StreamAPI.md).[`refresh`](StreamAPI.md#refresh)

#### Defined in

[lib/stream/StreamAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/stream/StreamAPI.ts#L37)

***

### test()

> **test**(`url`): `Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Inherited from

[`StreamAPI`](StreamAPI.md).[`test`](StreamAPI.md#test)

#### Defined in

[lib/stream/StreamAPI.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/stream/StreamAPI.ts#L13)
