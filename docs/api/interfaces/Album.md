[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / Album

# Interface: Album

## Extends

- [`MediaKind`](MediaKind.md)

## Properties

### artist?

> `optional` **artist**: `Omit`\<[`Artist`](Artist.md), `"type"`\>

#### Inherited from

[`MediaKind`](MediaKind.md).[`artist`](MediaKind.md#artist)

#### Defined in

[lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L11)

***

### description?

> `optional` **description**: `string`

#### Defined in

[lib/types/Album.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L8)

***

### featuredTrack?

> `optional` **featuredTrack**: `Omit`\<[`Track`](Track.md), `"type"`\>

#### Defined in

[lib/types/Album.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L11)

***

### genre?

> `optional` **genre**: `string`

#### Defined in

[lib/types/Album.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L9)

***

### id?

> `optional` **id**: `number`

#### Inherited from

[`MediaKind`](MediaKind.md).[`id`](MediaKind.md#id)

#### Defined in

[lib/types/MediaKind.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L6)

***

### imageUrl?

> `optional` **imageUrl**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`imageUrl`](MediaKind.md#imageurl)

#### Defined in

[lib/types/MediaKind.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L9)

***

### keywords?

> `optional` **keywords**: `string`[]

#### Defined in

[lib/types/Album.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L7)

***

### label?

> `optional` **label**: `Omit`\<[`Label`](Label.md), `"type"`\>

#### Inherited from

[`MediaKind`](MediaKind.md).[`label`](MediaKind.md#label)

#### Defined in

[lib/types/MediaKind.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L12)

***

### location?

> `optional` **location**: `string`

#### Defined in

[lib/types/Album.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L10)

***

### name

> **name**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`name`](MediaKind.md#name)

#### Defined in

[lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L7)

***

### numTracks?

> `optional` **numTracks**: `number`

#### Defined in

[lib/types/Album.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L6)

***

### publisher?

> `optional` **publisher**: [`UserKind`](UserKind.md)

#### Inherited from

[`MediaKind`](MediaKind.md).[`publisher`](MediaKind.md#publisher)

#### Defined in

[lib/types/MediaKind.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L13)

***

### raw?

> `optional` **raw**: `object`

#### basic

> **basic**: `string`

#### extra

> **extra**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`raw`](MediaKind.md#raw)

#### Defined in

[lib/types/MediaKind.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L14)

***

### releaseDate?

> `optional` **releaseDate**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`releaseDate`](MediaKind.md#releasedate)

#### Defined in

[lib/types/MediaKind.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L10)

***

### releases?

> `optional` **releases**: [`AlbumRelease`](AlbumRelease.md)[]

#### Defined in

[lib/types/Album.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L12)

***

### tracks?

> `optional` **tracks**: `Omit`\<[`Track`](Track.md), `"type"`\>[]

#### Defined in

[lib/types/Album.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L13)

***

### type

> **type**: `"album"`

#### Defined in

[lib/types/Album.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Album.ts#L5)

***

### url?

> `optional` **url**: `string`

#### Inherited from

[`MediaKind`](MediaKind.md).[`url`](MediaKind.md#url)

#### Defined in

[lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/MediaKind.ts#L8)
