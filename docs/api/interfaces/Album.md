[bandcamp-fetch](../README.md) / Album

# Interface: Album

## Hierarchy

- [`MediaKind`](MediaKind.md)

  ↳ **`Album`**

## Table of contents

### Properties

- [artist](Album.md#artist)
- [description](Album.md#description)
- [featuredTrack](Album.md#featuredtrack)
- [genre](Album.md#genre)
- [imageUrl](Album.md#imageurl)
- [keywords](Album.md#keywords)
- [label](Album.md#label)
- [location](Album.md#location)
- [name](Album.md#name)
- [numTracks](Album.md#numtracks)
- [publisher](Album.md#publisher)
- [raw](Album.md#raw)
- [releaseDate](Album.md#releasedate)
- [releases](Album.md#releases)
- [tracks](Album.md#tracks)
- [type](Album.md#type)
- [url](Album.md#url)

## Properties

### artist

• `Optional` **artist**: `Omit`<[`Artist`](Artist.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[artist](MediaKind.md#artist)

#### Defined in

[lib/types/MediaKind.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L10)

___

### description

• `Optional` **description**: `string`

#### Defined in

[lib/types/Album.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L8)

___

### featuredTrack

• `Optional` **featuredTrack**: `Omit`<[`Track`](Track.md), ``"type"``\>

#### Defined in

[lib/types/Album.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L11)

___

### genre

• `Optional` **genre**: `string`

#### Defined in

[lib/types/Album.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L9)

___

### imageUrl

• `Optional` **imageUrl**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[imageUrl](MediaKind.md#imageurl)

#### Defined in

[lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L8)

___

### keywords

• `Optional` **keywords**: `string`[]

#### Defined in

[lib/types/Album.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L7)

___

### label

• `Optional` **label**: `Omit`<[`Label`](Label.md), ``"type"``\>

#### Inherited from

[MediaKind](MediaKind.md).[label](MediaKind.md#label)

#### Defined in

[lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L11)

___

### location

• `Optional` **location**: `string`

#### Defined in

[lib/types/Album.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L10)

___

### name

• **name**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[name](MediaKind.md#name)

#### Defined in

[lib/types/MediaKind.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L6)

___

### numTracks

• `Optional` **numTracks**: `number`

#### Defined in

[lib/types/Album.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L6)

___

### publisher

• `Optional` **publisher**: [`UserKind`](UserKind.md)

#### Inherited from

[MediaKind](MediaKind.md).[publisher](MediaKind.md#publisher)

#### Defined in

[lib/types/MediaKind.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L12)

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

[lib/types/MediaKind.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L13)

___

### releaseDate

• `Optional` **releaseDate**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[releaseDate](MediaKind.md#releasedate)

#### Defined in

[lib/types/MediaKind.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L9)

___

### releases

• `Optional` **releases**: [`AlbumRelease`](AlbumRelease.md)[]

#### Defined in

[lib/types/Album.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L12)

___

### tracks

• `Optional` **tracks**: `Omit`<[`Track`](Track.md), ``"type"``\>[]

#### Defined in

[lib/types/Album.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L13)

___

### type

• **type**: ``"album"``

#### Defined in

[lib/types/Album.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Album.ts#L5)

___

### url

• `Optional` **url**: `string`

#### Inherited from

[MediaKind](MediaKind.md).[url](MediaKind.md#url)

#### Defined in

[lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/MediaKind.ts#L7)
