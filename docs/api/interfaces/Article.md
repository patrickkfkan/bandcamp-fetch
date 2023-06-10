[bandcamp-fetch](../README.md) / Article

# Interface: Article

## Table of contents

### Properties

- [author](Article.md#author)
- [category](Article.md#category)
- [date](Article.md#date)
- [description](Article.md#description)
- [genre](Article.md#genre)
- [imageUrl](Article.md#imageurl)
- [mediaItems](Article.md#mediaitems)
- [raw](Article.md#raw)
- [sections](Article.md#sections)
- [title](Article.md#title)
- [url](Article.md#url)

## Properties

### author

• **author**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `url` | `string` |

#### Defined in

lib/types/Article.ts:16

___

### category

• **category**: [`ArticleCategory`](ArticleCategory.md)

#### Defined in

lib/types/Article.ts:10

___

### date

• **date**: `string`

#### Defined in

lib/types/Article.ts:9

___

### description

• **description**: `string`

#### Defined in

lib/types/Article.ts:6

___

### genre

• `Optional` **genre**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `readMoreUrl?` | `string` |
| `url?` | `string` |

#### Defined in

lib/types/Article.ts:11

___

### imageUrl

• **imageUrl**: `string`

#### Defined in

lib/types/Article.ts:8

___

### mediaItems

• **mediaItems**: [`ArticleMediaItem`](../README.md#articlemediaitem)[]

#### Defined in

lib/types/Article.ts:20

___

### raw

• `Optional` **raw**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic` | `any` |
| `body` | `string` |
| `mediaItems` | `any` |

#### Defined in

lib/types/Article.ts:22

___

### sections

• **sections**: [`ArticleSection`](ArticleSection.md)[]

#### Defined in

lib/types/Article.ts:21

___

### title

• **title**: `string`

#### Defined in

lib/types/Article.ts:5

___

### url

• **url**: `string`

#### Defined in

lib/types/Article.ts:7
