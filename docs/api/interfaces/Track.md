[bandcamp-fetch](../README.md) / Track

# Interface: Track

## Hierarchy

- [`MediaKind`](MediaKind.md)

  ↳ **`Track`**

## Table of contents

### Properties

- [album](Track.md#album)
- [artist](Track.md#artist)
- [duration](Track.md#duration)
- [imageUrl](Track.md#imageurl)
- [label](Track.md#label)
- [name](Track.md#name)
- [position](Track.md#position)
- [publisher](Track.md#publisher)
- [raw](Track.md#raw)
- [releaseDate](Track.md#releasedate)
- [seekPosition](Track.md#seekposition)
- [streamUrl](Track.md#streamurl)
- [type](Track.md#type)
- [url](Track.md#url)

## Properties

### album

• `Optional` **album**: `Omit`<[`Album`](Album.md), ``"type"``\>

#### Defined in

lib/types/Track.ts:9

___

### artist

• `Optional` **artist**: `Omit`<[`Artist`](Artist.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[artist](MediaKind.md#artist)

#### Defined in

lib/types/MediaKind.ts:10

___

### duration

• `Optional` **duration**: `number`

#### Defined in

lib/types/Track.ts:6

___

### imageUrl

• `Optional` **imageUrl**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[imageUrl](MediaKind.md#imageurl)

#### Defined in

lib/types/MediaKind.ts:8

___

### label

• `Optional` **label**: `Omit`<[`Label`](Label.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[label](MediaKind.md#label)

#### Defined in

lib/types/MediaKind.ts:11

___

### name

• **name**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[name](MediaKind.md#name)

#### Defined in

lib/types/MediaKind.ts:6

___

### position

• `Optional` **position**: `number`

#### Defined in

lib/types/Track.ts:10

___

### publisher

• `Optional` **publisher**: [`UserKind`](UserKind.md)

#### Inherited from

[MediaKind](MediaKind.md).[publisher](MediaKind.md#publisher)

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

#### Inherited from

[MediaKind](MediaKind.md).[raw](MediaKind.md#raw)

#### Defined in

lib/types/MediaKind.ts:13

___

### releaseDate

• `Optional` **releaseDate**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[releaseDate](MediaKind.md#releasedate)

#### Defined in

lib/types/MediaKind.ts:9

___

### seekPosition

• `Optional` **seekPosition**: `number`

#### Defined in

lib/types/Track.ts:7

___

### streamUrl

• `Optional` **streamUrl**: `string`

#### Defined in

lib/types/Track.ts:8

___

### type

• **type**: ``"track"``

#### Defined in

lib/types/Track.ts:5

___

### url

• `Optional` **url**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[url](MediaKind.md#url)

#### Defined in

lib/types/MediaKind.ts:7