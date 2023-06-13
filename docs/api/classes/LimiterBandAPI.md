[bandcamp-fetch](../README.md) / LimiterBandAPI

# Class: LimiterBandAPI

## Hierarchy

- [`BandAPI`](BandAPI.md)

  ↳ **`LimiterBandAPI`**

## Table of contents

### Constructors

- [constructor](LimiterBandAPI.md#constructor)

### Methods

- [getDiscography](LimiterBandAPI.md#getdiscography)
- [getInfo](LimiterBandAPI.md#getinfo)
- [getLabelArtists](LimiterBandAPI.md#getlabelartists)

## Constructors

### constructor

• **new LimiterBandAPI**()

#### Inherited from

[BandAPI](BandAPI.md).[constructor](BandAPI.md#constructor)

## Methods

### getDiscography

▸ `Static` **getDiscography**(`params`): `Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md) |

#### Returns

`Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Overrides

[BandAPI](BandAPI.md).[getDiscography](BandAPI.md#getdiscography)

#### Defined in

[lib/band/BandAPI.ts:135](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/band/BandAPI.ts#L135)

___

### getInfo

▸ `Static` **getInfo**(`params`): `Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Overrides

[BandAPI](BandAPI.md).[getInfo](BandAPI.md#getinfo)

#### Defined in

[lib/band/BandAPI.ts:139](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/band/BandAPI.ts#L139)

___

### getLabelArtists

▸ `Static` **getLabelArtists**(`params`): `Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md) |

#### Returns

`Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Overrides

[BandAPI](BandAPI.md).[getLabelArtists](BandAPI.md#getlabelartists)

#### Defined in

[lib/band/BandAPI.ts:143](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/band/BandAPI.ts#L143)
