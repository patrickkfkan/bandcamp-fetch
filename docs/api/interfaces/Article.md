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

[lib/types/Article.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L16)

___

### category

• **category**: [`ArticleCategory`](ArticleCategory.md)

#### Defined in

[lib/types/Article.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L10)

___

### date

• **date**: `string`

#### Defined in

[lib/types/Article.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L9)

___

### description

• **description**: `string`

#### Defined in

[lib/types/Article.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L6)

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

[lib/types/Article.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L11)

___

### imageUrl

• **imageUrl**: `string`

#### Defined in

[lib/types/Article.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L8)

___

### mediaItems

• **mediaItems**: [`ArticleMediaItem`](../README.md#articlemediaitem)[]

#### Defined in

[lib/types/Article.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L20)

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

[lib/types/Article.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L22)

___

### sections

• **sections**: [`ArticleSection`](ArticleSection.md)[]

#### Defined in

[lib/types/Article.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L21)

___

### title

• **title**: `string`

#### Defined in

[lib/types/Article.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L5)

___

### url

• **url**: `string`

#### Defined in

[lib/types/Article.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L7)
