[bandcamp-fetch](../README.md) / LimiterArticleAPI

# Class: LimiterArticleAPI

## Hierarchy

- [`ArticleAPI`](ArticleAPI.md)

  ↳ **`LimiterArticleAPI`**

## Table of contents

### Constructors

- [constructor](LimiterArticleAPI.md#constructor)

### Methods

- [getArticle](LimiterArticleAPI.md#getarticle)
- [getCategories](LimiterArticleAPI.md#getcategories)
- [list](LimiterArticleAPI.md#list)

## Constructors

### constructor

• **new LimiterArticleAPI**()

#### Inherited from

[ArticleAPI](ArticleAPI.md).[constructor](ArticleAPI.md#constructor)

## Methods

### getArticle

▸ `Static` **getArticle**(`params`): `Promise`<[`Article`](../interfaces/Article.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md) |

#### Returns

`Promise`<[`Article`](../interfaces/Article.md)\>

#### Overrides

[ArticleAPI](ArticleAPI.md).[getArticle](ArticleAPI.md#getarticle)

#### Defined in

[lib/article/ArticleAPI.ts:63](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/article/ArticleAPI.ts#L63)

___

### getCategories

▸ `Static` **getCategories**(): `Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Returns

`Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Overrides

[ArticleAPI](ArticleAPI.md).[getCategories](ArticleAPI.md#getcategories)

#### Defined in

[lib/article/ArticleAPI.ts:59](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/article/ArticleAPI.ts#L59)

___

### list

▸ `Static` **list**(`params?`): `Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md) |

#### Returns

`Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Inherited from

[ArticleAPI](ArticleAPI.md).[list](ArticleAPI.md#list)

#### Defined in

[lib/article/ArticleAPI.ts:44](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/article/ArticleAPI.ts#L44)
