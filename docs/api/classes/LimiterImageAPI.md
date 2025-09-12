[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterImageAPI

# Class: LimiterImageAPI

## Extends

- [`ImageAPI`](ImageAPI.md)

## Constructors

### new LimiterImageAPI()

> **new LimiterImageAPI**(`params`): [`LimiterImageAPI`](LimiterImageAPI.md)

#### Parameters

• **params**: [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & `object`

#### Returns

[`LimiterImageAPI`](LimiterImageAPI.md)

#### Overrides

[`ImageAPI`](ImageAPI.md).[`constructor`](ImageAPI.md#constructors)

#### Defined in

[lib/image/ImageAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/image/ImageAPI.ts#L64)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`ImageAPI`](ImageAPI.md).[`cache`](ImageAPI.md#cache)

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

[`ImageAPI`](ImageAPI.md).[`fetch`](ImageAPI.md#fetch)

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

[`ImageAPI`](ImageAPI.md).[`fetch`](ImageAPI.md#fetch)

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

[`ImageAPI`](ImageAPI.md).[`fetch`](ImageAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getFormat()

> **getFormat**(`target`?, `fallbackId`?): `Promise`\<`null` \| [`ImageFormat`](../interfaces/ImageFormat.md)\>

#### Parameters

• **target?**: `string` \| `number` \| [`ImageFormat`](../interfaces/ImageFormat.md)

• **fallbackId?**: `number`

#### Returns

`Promise`\<`null` \| [`ImageFormat`](../interfaces/ImageFormat.md)\>

#### Overrides

[`ImageAPI`](ImageAPI.md).[`getFormat`](ImageAPI.md#getformat)

#### Defined in

[lib/image/ImageAPI.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/image/ImageAPI.ts#L73)

***

### getFormats()

> **getFormats**(`filter`?): `Promise`\<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Parameters

• **filter?**: [`ImageFormatFilter`](../enumerations/ImageFormatFilter.md)

#### Returns

`Promise`\<[`ImageFormat`](../interfaces/ImageFormat.md)[]\>

#### Overrides

[`ImageAPI`](ImageAPI.md).[`getFormats`](ImageAPI.md#getformats)

#### Defined in

[lib/image/ImageAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/image/ImageAPI.ts#L69)
