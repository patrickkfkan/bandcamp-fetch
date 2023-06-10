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

lib/types/MediaKind.ts:10

___

### imageUrl

• `Optional` **imageUrl**: `string`

#### Defined in

lib/types/MediaKind.ts:8

___

### label

• `Optional` **label**: `Omit`<[`Label`](Label.md), ``"type"``\>

#### Defined in

lib/types/MediaKind.ts:11

___

### name

• **name**: `string`

#### Defined in

lib/types/MediaKind.ts:6

___

### publisher

• `Optional` **publisher**: [`UserKind`](UserKind.md)

#### Defined in

lib/types/MediaKind.ts:12

___

### raw

• `Optional` **raw**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basic` | `string` |
| `extra` | `string` |

#### Defined in

lib/types/MediaKind.ts:13

___

### releaseDate

• `Optional` **releaseDate**: `string`

#### Defined in

lib/types/MediaKind.ts:9

___

### url

• `Optional` **url**: `string`

#### Defined in

lib/types/MediaKind.ts:7
