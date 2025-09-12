[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterArticleAPI

# Class: LimiterArticleAPI

## Extends

- [`ArticleAPI`](ArticleAPI.md)

## Constructors

### new LimiterArticleAPI()

> **new LimiterArticleAPI**(`params`): [`LimiterArticleAPI`](LimiterArticleAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterArticleAPI`](LimiterArticleAPI.md)

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`constructor`](ArticleAPI.md#constructors)

#### Defined in

[lib/article/ArticleAPI.ts:61](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L61)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`cache`](ArticleAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`imageAPI`](ArticleAPI.md#imageapi)

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

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

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

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

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

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getArticle()

> **getArticle**(`params`): `Promise`\<[`Article`](../interfaces/Article.md)\>

#### Parameters

• **params**: [`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md)

#### Returns

`Promise`\<[`Article`](../interfaces/Article.md)\>

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`getArticle`](ArticleAPI.md#getarticle)

#### Defined in

[lib/article/ArticleAPI.ts:70](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L70)

***

### getCategories()

> **getCategories**(): `Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Returns

`Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`getCategories`](ArticleAPI.md#getcategories)

#### Defined in

[lib/article/ArticleAPI.ts:66](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L66)

***

### list()

> **list**(`params`?): `Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Parameters

• **params?**: [`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md)

#### Returns

`Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`list`](ArticleAPI.md#list)

#### Defined in

[lib/article/ArticleAPI.ts:44](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/article/ArticleAPI.ts#L44)
