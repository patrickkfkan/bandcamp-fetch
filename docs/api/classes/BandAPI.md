[bandcamp-fetch](../README.md) / BandAPI

# Class: BandAPI

## Hierarchy

- **`BandAPI`**

  ↳ [`LimiterBandAPI`](LimiterBandAPI.md)

## Table of contents

### Constructors

- [constructor](BandAPI.md#constructor)

### Methods

- [getDiscography](BandAPI.md#getdiscography)
- [getInfo](BandAPI.md#getinfo)
- [getLabelArtists](BandAPI.md#getlabelartists)

## Constructors

### constructor

• **new BandAPI**()

## Methods

### getDiscography

▸ `Static` **getDiscography**(`params`): `Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md) |

#### Returns

`Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Defined in

lib/band/BandAPI.ts:32

___

### getInfo

▸ `Static` **getInfo**(`params`): `Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Defined in

lib/band/BandAPI.ts:43

___

### getLabelArtists

▸ `Static` **getLabelArtists**(`params`): `Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md) |

#### Returns

`Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Defined in

lib/band/BandAPI.ts:86
