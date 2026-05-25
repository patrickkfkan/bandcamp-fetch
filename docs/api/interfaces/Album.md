[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / Album

# Interface: Album

Defined in: [lib/types/Album.ts:4](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L4)

## Extends

- [`MediaKind`](MediaKind.md)

## Properties

### artist?

> `optional` **artist?**: `Omit`\<[`Artist`](Artist.md), `"type"`\>

Defined in: [lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L11)

#### Inherited from

[`MediaKind`](MediaKind.md).[`artist`](MediaKind.md#artist)

***

### description?

> `optional` **description?**: `string`

Defined in: [lib/types/Album.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L8)

***

### featuredTrack?

> `optional` **featuredTrack?**: `Omit`\<[`Track`](Track.md), `"type"`\>

Defined in: [lib/types/Album.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L11)

***

### genre?

> `optional` **genre?**: `string`

Defined in: [lib/types/Album.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L9)

***

### id?

> `optional` **id?**: `number`

Defined in: [lib/types/MediaKind.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L6)

#### Inherited from

[`MediaKind`](MediaKind.md).[`id`](MediaKind.md#id)

***

### imageUrl?

> `optional` **imageUrl?**: `string`

Defined in: [lib/types/MediaKind.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L9)

#### Inherited from

[`MediaKind`](MediaKind.md).[`imageUrl`](MediaKind.md#imageurl)

***

### keywords?

> `optional` **keywords?**: `string`[]

Defined in: [lib/types/Album.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L7)

***

### label?

> `optional` **label?**: `Omit`\<[`Label`](Label.md), `"type"`\>

Defined in: [lib/types/MediaKind.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L12)

#### Inherited from

[`MediaKind`](MediaKind.md).[`label`](MediaKind.md#label)

***

### location?

> `optional` **location?**: `string`

Defined in: [lib/types/Album.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L10)

***

### name

> **name**: `string`

Defined in: [lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L7)

#### Inherited from

[`MediaKind`](MediaKind.md).[`name`](MediaKind.md#name)

***

### numTracks?

> `optional` **numTracks?**: `number`

Defined in: [lib/types/Album.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L6)

***

### publisher?

> `optional` **publisher?**: [`UserKind`](UserKind.md)

Defined in: [lib/types/MediaKind.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L13)

#### Inherited from

[`MediaKind`](MediaKind.md).[`publisher`](MediaKind.md#publisher)

***

### raw?

> `optional` **raw?**: `object`

Defined in: [lib/types/MediaKind.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L14)

#### basic

> **basic**: `string`

#### extra

> **extra**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`raw`](MediaKind.md#raw)

***

### releaseDate?

> `optional` **releaseDate?**: `string`

Defined in: [lib/types/MediaKind.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L10)

#### Inherited from

[`MediaKind`](MediaKind.md).[`releaseDate`](MediaKind.md#releasedate)

***

### releases?

> `optional` **releases?**: [`AlbumRelease`](AlbumRelease.md)[]

Defined in: [lib/types/Album.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L12)

***

### tracks?

> `optional` **tracks?**: `Omit`\<[`Track`](Track.md), `"type"`\>[]

Defined in: [lib/types/Album.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L13)

***

### type

> **type**: `"album"`

Defined in: [lib/types/Album.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Album.ts#L5)

***

### url?

> `optional` **url?**: `string`

Defined in: [lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L8)

#### Inherited from

[`MediaKind`](MediaKind.md).[`url`](MediaKind.md#url)
