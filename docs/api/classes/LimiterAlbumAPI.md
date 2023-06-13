[bandcamp-fetch](../README.md) / LimiterAlbumAPI

# Class: LimiterAlbumAPI

## Hierarchy

- [`AlbumAPI`](AlbumAPI.md)

  ↳ **`LimiterAlbumAPI`**

## Table of contents

### Constructors

- [constructor](LimiterAlbumAPI.md#constructor)

### Methods

- [getInfo](LimiterAlbumAPI.md#getinfo)

## Constructors

### constructor

• **new LimiterAlbumAPI**()

#### Inherited from

[AlbumAPI](AlbumAPI.md).[constructor](AlbumAPI.md#constructor)

## Methods

### getInfo

▸ `Static` **getInfo**(`params`): `Promise`<[`Album`](../interfaces/Album.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AlbumAPIGetInfoParams`](../interfaces/AlbumAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Album`](../interfaces/Album.md)\>

#### Overrides

[AlbumAPI](AlbumAPI.md).[getInfo](AlbumAPI.md#getinfo)

#### Defined in

[lib/album/AlbumAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/album/AlbumAPI.ts#L30)
