[bandcamp-fetch](../README.md) / MediaKind

# Interface: MediaKind

## Hierarchy

- **`MediaKind`**

  ↳ [`Album`](Album.md)

  ↳ [`Track`](Track.md)

## Table of contents

### Properties

- [artist](MediaKind.md#artist)
- [imageUrl](MediaKind.md#imageurl)
- [label](MediaKind.md#label)
- [name](MediaKind.md#name)
- [publisher](MediaKind.md#publisher)
- [raw](MediaKind.md#raw)
- [releaseDate](MediaKind.md#releasedate)
- [url](MediaKind.md#url)

## Properties

### artist

• `Optional` **artist**: `Omit`<[`Artist`](Artist.md), ``"type"``\>

#### Defined in

[lib/types/MediaKind.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L10)

___

### imageUrl

• `Optional` **imageUrl**: `string`

#### Defined in

[lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L8)

___

### label

• `Optional` **label**: `Omit`<[`Label`](Label.md), ``"type"``\>

#### Defined in

[lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L11)

___

### name

• **name**: `string`

#### Defined in

[lib/types/MediaKind.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L6)

___

### publisher

• `Optional` **publisher**: [`UserKind`](UserKind.md)

#### Defined in

[lib/types/MediaKind.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L12)

___

### raw

• `Optional` **raw**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic` | `string` |
| `extra` | `string` |

#### Defined in

[lib/types/MediaKind.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L13)

___

### releaseDate

• `Optional` **releaseDate**: `string`

#### Defined in

[lib/types/MediaKind.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L9)

___

### url

• `Optional` **url**: `string`

#### Defined in

[lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L7)
