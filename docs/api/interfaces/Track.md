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
- [streamUrlHQ](Track.md#streamurlhq)
- [type](Track.md#type)
- [url](Track.md#url)

## Properties

### album

• `Optional` **album**: `Omit`<[`Album`](Album.md), ``"type"``\>

#### Defined in

[lib/types/Track.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L10)

___

### artist

• `Optional` **artist**: `Omit`<[`Artist`](Artist.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[artist](MediaKind.md#artist)

#### Defined in

[lib/types/MediaKind.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L10)

___

### duration

• `Optional` **duration**: `number`

#### Defined in

[lib/types/Track.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L6)

___

### imageUrl

• `Optional` **imageUrl**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[imageUrl](MediaKind.md#imageurl)

#### Defined in

[lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L8)

___

### label

• `Optional` **label**: `Omit`<[`Label`](Label.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[label](MediaKind.md#label)

#### Defined in

[lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L11)

___

### name

• **name**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[name](MediaKind.md#name)

#### Defined in

[lib/types/MediaKind.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L6)

___

### position

• `Optional` **position**: `number`

#### Defined in

[lib/types/Track.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L11)

___

### publisher

• `Optional` **publisher**: [`UserKind`](UserKind.md)

#### Inherited from

[MediaKind](MediaKind.md).[publisher](MediaKind.md#publisher)

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

#### Inherited from

[MediaKind](MediaKind.md).[raw](MediaKind.md#raw)

#### Defined in

[lib/types/MediaKind.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L13)

___

### releaseDate

• `Optional` **releaseDate**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[releaseDate](MediaKind.md#releasedate)

#### Defined in

[lib/types/MediaKind.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L9)

___

### seekPosition

• `Optional` **seekPosition**: `number`

#### Defined in

[lib/types/Track.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L7)

___

### streamUrl

• `Optional` **streamUrl**: `string`

#### Defined in

[lib/types/Track.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L8)

___

### streamUrlHQ

• `Optional` **streamUrlHQ**: `string`

#### Defined in

[lib/types/Track.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L9)

___

### type

• **type**: ``"track"``

#### Defined in

[lib/types/Track.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/Track.ts#L5)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[url](MediaKind.md#url)

#### Defined in

[lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/types/MediaKind.ts#L7)
