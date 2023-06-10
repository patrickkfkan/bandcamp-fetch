[bandcamp-fetch](../README.md) / ArticleAPI

# Class: ArticleAPI

## Hierarchy

- **`ArticleAPI`**

  ↳ [`LimiterArticleAPI`](LimiterArticleAPI.md)

## Table of contents

### Constructors

- [constructor](ArticleAPI.md#constructor)

### Methods

- [getArticle](ArticleAPI.md#getarticle)
- [getCategories](ArticleAPI.md#getcategories)
- [list](ArticleAPI.md#list)

## Constructors

### constructor

• **new ArticleAPI**()

## Methods

### getArticle

▸ `Static` **getArticle**(`params`): `Promise`<[`Article`](../interfaces/Article.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ArticleAPIGetArticleParams`](../interfaces/ArticleAPIGetArticleParams.md) |

#### Returns

`Promise`<[`Article`](../interfaces/Article.md)\>

#### Defined in

lib/article/ArticleAPI.ts:32

___

### getCategories

▸ `Static` **getCategories**(): `Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Returns

`Promise`<[`ArticleCategorySection`](../interfaces/ArticleCategorySection.md)[]\>

#### Defined in

lib/article/ArticleAPI.ts:27

___

### list

▸ `Static` **list**(`params?`): `Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ArticleAPIListParams`](../interfaces/ArticleAPIListParams.md) |

#### Returns

`Promise`<[`ArticleList`](../interfaces/ArticleList.md)\>

#### Defined in

lib/article/ArticleAPI.ts:44
