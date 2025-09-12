[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterShowAPI

# Class: LimiterShowAPI

## Extends

- [`ShowAPI`](ShowAPI.md)

## Constructors

### new LimiterShowAPI()

> **new LimiterShowAPI**(`params`): [`LimiterShowAPI`](LimiterShowAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterShowAPI`](LimiterShowAPI.md)

#### Overrides

[`ShowAPI`](ShowAPI.md).[`constructor`](ShowAPI.md#constructors)

#### Defined in

[lib/show/ShowAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/show/ShowAPI.ts#L58)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`ShowAPI`](ShowAPI.md).[`cache`](ShowAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`ShowAPI`](ShowAPI.md).[`imageAPI`](ShowAPI.md#imageapi)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L17)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getShow()

> **getShow**(`params`): `Promise`\<[`Show`](../interfaces/Show.md)\>

#### Parameters

• **params**: [`ShowAPIGetShowParams`](../interfaces/ShowAPIGetShowParams.md)

#### Returns

`Promise`\<[`Show`](../interfaces/Show.md)\>

#### Overrides

[`ShowAPI`](ShowAPI.md).[`getShow`](ShowAPI.md#getshow)

#### Defined in

[lib/show/ShowAPI.ts:63](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/show/ShowAPI.ts#L63)

***

### list()

> **list**(`params`?): `Promise`\<[`Show`](../interfaces/Show.md)[]\>

#### Parameters

• **params?**: [`ShowAPIListParams`](../interfaces/ShowAPIListParams.md)

#### Returns

`Promise`\<[`Show`](../interfaces/Show.md)[]\>

#### Overrides

[`ShowAPI`](ShowAPI.md).[`list`](ShowAPI.md#list)

#### Defined in

[lib/show/ShowAPI.ts:67](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/show/ShowAPI.ts#L67)
