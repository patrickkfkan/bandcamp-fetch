[bandcamp-fetch](../README.md) / BandAPI

# Class: BandAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`BandAPI`**

  ↳↳ [`LimiterBandAPI`](LimiterBandAPI.md)

## Table of contents

### Constructors

- [constructor](BandAPI.md#constructor)

### Accessors

- [cache](BandAPI.md#cache)
- [imageAPI](BandAPI.md#imageapi)

### Methods

- [fetch](BandAPI.md#fetch)
- [getDiscography](BandAPI.md#getdiscography)
- [getInfo](BandAPI.md#getinfo)
- [getLabelArtists](BandAPI.md#getlabelartists)

## Constructors

### constructor

• **new BandAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPIWithImageSupport.ts#L17)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L19)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

___

### getDiscography

▸ **getDiscography**(`params`): `Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md) |

#### Returns

`Promise`<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Defined in

[lib/band/BandAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/band/BandAPI.ts#L31)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Defined in

[lib/band/BandAPI.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/band/BandAPI.ts#L42)

___

### getLabelArtists

▸ **getLabelArtists**(`params`): `Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md) |

#### Returns

`Promise`<[`LabelArtist`](../README.md#labelartist)[]\>

#### Defined in

[lib/band/BandAPI.ts:85](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/band/BandAPI.ts#L85)
