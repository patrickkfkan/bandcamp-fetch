[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / ArticleAPI

# Class: ArticleAPI

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterArticleAPI`](LimiterArticleAPI.md)

## Constructors

### new ArticleAPI()

> **new ArticleAPI**(`params`): [`ArticleAPI`](ArticleAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

[`ArticleAPI`](ArticleAPI.md)

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

### getArticle()

> **getArticle**(`params`): `Promise`\<[`Article`](../interfaces/Article.md)\>

#### Parameters

• **params**: [`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md)

#### Returns

`Promise`\<[`Article`](../interfaces/Article.md)\>

#### Defined in

[lib/article/ArticleAPI.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L32)

***

### getCategories()

> **getCategories**(): `Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Returns

`Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Defined in

[lib/article/ArticleAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L27)

***

### list()

> **list**(`params`?): `Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Parameters

• **params?**: [`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md)

#### Returns

`Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Defined in

[lib/article/ArticleAPI.ts:44](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L44)
