[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / Track

# Interface: Track

Defined in: [lib/types/Track.ts:4](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L4)

## Extends

- [`MediaKind`](MediaKind.md)

## Properties

### album?

> `optional` **album?**: `Omit`\<[`Album`](Album.md), `"type"`\>

Defined in: [lib/types/Track.ts:10](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L10)

***

### artist?

> `optional` **artist?**: `Omit`\<[`Artist`](Artist.md), `"type"`\>

Defined in: [lib/types/MediaKind.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L11)

#### Inherited from

[`MediaKind`](MediaKind.md).[`artist`](MediaKind.md#artist)

***

### duration?

> `optional` **duration?**: `number`

Defined in: [lib/types/Track.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L6)

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

### label?

> `optional` **label?**: `Omit`\<[`Label`](Label.md), `"type"`\>

Defined in: [lib/types/MediaKind.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L12)

#### Inherited from

[`MediaKind`](MediaKind.md).[`label`](MediaKind.md#label)

***

### lyrics?

> `optional` **lyrics?**: `string`

Defined in: [lib/types/Track.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L12)

***

### name

> **name**: `string`

Defined in: [lib/types/MediaKind.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L7)

#### Inherited from

[`MediaKind`](MediaKind.md).[`name`](MediaKind.md#name)

***

### position?

> `optional` **position?**: `number`

Defined in: [lib/types/Track.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L11)

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

### seekPosition?

> `optional` **seekPosition?**: `number`

Defined in: [lib/types/Track.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L7)

***

### streamUrl?

> `optional` **streamUrl?**: `string`

Defined in: [lib/types/Track.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L8)

***

### streamUrlHQ?

> `optional` **streamUrlHQ?**: `string`

Defined in: [lib/types/Track.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L9)

***

### type

> **type**: `"track"`

Defined in: [lib/types/Track.ts:5](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Track.ts#L5)

***

### url?

> `optional` **url?**: `string`

Defined in: [lib/types/MediaKind.ts:8](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/MediaKind.ts#L8)

#### Inherited from

[`MediaKind`](MediaKind.md).[`url`](MediaKind.md#url)
