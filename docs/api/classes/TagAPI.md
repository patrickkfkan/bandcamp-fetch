[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / TagAPI

# Class: TagAPI

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterTagAPI`](LimiterTagAPI.md)

## Constructors

### new TagAPI()

> **new TagAPI**(`params`): [`TagAPI`](TagAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

[`TagAPI`](TagAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`constructor`](BaseAPIWithImageSupport.md#constructors)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`cache`](BaseAPIWithImageSupport.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`imageAPI`](BaseAPIWithImageSupport.md#imageapi)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getRelated()

> **getRelated**(`params`): `Promise`\<[`RelatedTags`](../interfaces/RelatedTags.md)\>

#### Parameters

• **params**: [`TagAPIGetRelatedParams`](../interfaces/TagAPIGetRelatedParams.md)

#### Returns

`Promise`\<[`RelatedTags`](../interfaces/RelatedTags.md)\>

#### Defined in

[lib/tag/TagAPI.ts:15](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/tag/TagAPI.ts#L15)
