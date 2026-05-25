[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterArticleAPI

# Class: LimiterArticleAPI

Defined in: [lib/article/ArticleAPI.ts:70](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/article/ArticleAPI.ts#L70)

## Extends

- [`ArticleAPI`](ArticleAPI.md)

## Constructors

### Constructor

> **new LimiterArticleAPI**(`params`): `LimiterArticleAPI`

Defined in: [lib/article/ArticleAPI.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/article/ArticleAPI.ts#L73)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterArticleAPI`

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`constructor`](ArticleAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`cache`](ArticleAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`imageAPI`](ArticleAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`logger`](ArticleAPI.md#logger)

## Methods

### fetch()

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/common/BaseAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L23)

##### Parameters

###### url

`string`

###### jsonResponse

`false`

###### method

[`HEAD`](../enumerations/FetchMethod.md#head)

###### payload?

`undefined`

###### requireCookie?

`boolean`

##### Returns

`Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

##### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/common/BaseAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L30)

##### Parameters

###### url

`string`

###### jsonResponse

`true`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/common/BaseAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L37)

##### Parameters

###### url

`string`

###### jsonResponse?

`boolean`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`fetch`](ArticleAPI.md#fetch)

***

### getArticle()

> **getArticle**(`params`): `Promise`\<[`Article`](../interfaces/Article.md)\>

Defined in: [lib/article/ArticleAPI.ts:82](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/article/ArticleAPI.ts#L82)

#### Parameters

##### params

[`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md)

#### Returns

`Promise`\<[`Article`](../interfaces/Article.md)\>

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`getArticle`](ArticleAPI.md#getarticle)

***

### getCategories()

> **getCategories**(): `Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

Defined in: [lib/article/ArticleAPI.ts:78](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/article/ArticleAPI.ts#L78)

#### Returns

`Promise`\<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Overrides

[`ArticleAPI`](ArticleAPI.md).[`getCategories`](ArticleAPI.md#getcategories)

***

### list()

> **list**(`params?`): `Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

Defined in: [lib/article/ArticleAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/article/ArticleAPI.ts#L54)

#### Parameters

##### params?

[`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md)

#### Returns

`Promise`\<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Inherited from

[`ArticleAPI`](ArticleAPI.md).[`list`](ArticleAPI.md#list)
