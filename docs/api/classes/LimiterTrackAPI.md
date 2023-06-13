[bandcamp-fetch](../README.md) / LimiterTrackAPI

# Class: LimiterTrackAPI

## Hierarchy

- [`TrackAPI`](TrackAPI.md)

  ↳ **`LimiterTrackAPI`**

## Table of contents

### Constructors

- [constructor](LimiterTrackAPI.md#constructor)

### Methods

- [getInfo](LimiterTrackAPI.md#getinfo)

## Constructors

### constructor

• **new LimiterTrackAPI**()

#### Inherited from

[TrackAPI](TrackAPI.md).[constructor](TrackAPI.md#constructor)

## Methods

### getInfo

▸ `Static` **getInfo**(`params`): `Promise`<[`Track`](../interfaces/Track.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TrackAPIGetInfoParams`](../interfaces/TrackAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)\>

#### Overrides

[TrackAPI](TrackAPI.md).[getInfo](TrackAPI.md#getinfo)

#### Defined in

[lib/track/TrackAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/track/TrackAPI.ts#L31)
