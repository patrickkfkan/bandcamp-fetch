[bandcamp-fetch](../README.md) / LimiterArticleAPI

# Class: LimiterArticleAPI

## Hierarchy

- [`ArticleAPI`](ArticleAPI.md)

  ↳ **`LimiterArticleAPI`**

## Table of contents

### Constructors

- [constructor](LimiterArticleAPI.md#constructor)

### Accessors

- [cache](LimiterArticleAPI.md#cache)
- [imageAPI](LimiterArticleAPI.md#imageapi)

### Methods

- [fetch](LimiterArticleAPI.md#fetch)
- [getArticle](LimiterArticleAPI.md#getarticle)
- [getCategories](LimiterArticleAPI.md#getcategories)
- [list](LimiterArticleAPI.md#list)

## Constructors

### constructor

• **new LimiterArticleAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[ArticleAPI](ArticleAPI.md).[constructor](ArticleAPI.md#constructor)

#### Defined in

[lib/article/ArticleAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/article/ArticleAPI.ts#L60)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

ArticleAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

ArticleAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``true`` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[ArticleAPI](ArticleAPI.md).[fetch](ArticleAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L19)

▸ `Protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse?` | `boolean` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[ArticleAPI](ArticleAPI.md).[fetch](ArticleAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getArticle

▸ **getArticle**(`params`): `Promise`<[`Article`](../interfaces/Article.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md) |

#### Returns

`Promise`<[`Article`](../interfaces/Article.md)\>

#### Overrides

[ArticleAPI](ArticleAPI.md).[getArticle](ArticleAPI.md#getarticle)

#### Defined in

[lib/article/ArticleAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/article/ArticleAPI.ts#L69)

___

### getCategories

▸ **getCategories**(): `Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Returns

`Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Overrides

[ArticleAPI](ArticleAPI.md).[getCategories](ArticleAPI.md#getcategories)

#### Defined in

[lib/article/ArticleAPI.ts:65](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/article/ArticleAPI.ts#L65)

___

### list

▸ **list**(`params?`): `Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md) |

#### Returns

`Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Inherited from

[ArticleAPI](ArticleAPI.md).[list](ArticleAPI.md#list)

#### Defined in

[lib/article/ArticleAPI.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/article/ArticleAPI.ts#L43)
