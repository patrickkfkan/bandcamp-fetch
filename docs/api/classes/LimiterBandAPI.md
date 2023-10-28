[bandcamp-fetch](../README.md) / LimiterBandAPI

# Class: LimiterBandAPI

## Hierarchy

- [`BandAPI`](BandAPI.md)

  ↳ **`LimiterBandAPI`**

## Table of contents

### Constructors

- [constructor](LimiterBandAPI.md#constructor)

### Accessors

- [cache](LimiterBandAPI.md#cache)
- [imageAPI](LimiterBandAPI.md#imageapi)

### Methods

- [fetch](LimiterBandAPI.md#fetch)
- [getDiscography](LimiterBandAPI.md#getdiscography)
- [getInfo](LimiterBandAPI.md#getinfo)
- [getLabelArtists](LimiterBandAPI.md#getlabelartists)

## Constructors

### constructor

• **new LimiterBandAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[BandAPI](BandAPI.md).[constructor](BandAPI.md#constructor)

#### Defined in

[lib/band/BandAPI.ts:136](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/band/BandAPI.ts#L136)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BandAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BandAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``true`` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[BandAPI](BandAPI.md).[fetch](BandAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L19)

▸ `Protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse?` | `boolean` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BandAPI](BandAPI.md).[fetch](BandAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getDiscography

▸ **getDiscography**(`params`): `Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md) |

#### Returns

`Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Overrides

[BandAPI](BandAPI.md).[getDiscography](BandAPI.md#getdiscography)

#### Defined in

[lib/band/BandAPI.ts:141](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/band/BandAPI.ts#L141)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Overrides

[BandAPI](BandAPI.md).[getInfo](BandAPI.md#getinfo)

#### Defined in

[lib/band/BandAPI.ts:145](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/band/BandAPI.ts#L145)

___

### getLabelArtists

▸ **getLabelArtists**(`params`): `Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md) |

#### Returns

`Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Overrides

[BandAPI](BandAPI.md).[getLabelArtists](BandAPI.md#getlabelartists)

#### Defined in

[lib/band/BandAPI.ts:149](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/band/BandAPI.ts#L149)
