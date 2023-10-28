[bandcamp-fetch](../README.md) / TrackAPI

# Class: TrackAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`TrackAPI`**

  ↳↳ [`LimiterTrackAPI`](LimiterTrackAPI.md)

## Table of contents

### Constructors

- [constructor](TrackAPI.md#constructor)

### Accessors

- [cache](TrackAPI.md#cache)
- [imageAPI](TrackAPI.md#imageapi)

### Methods

- [fetch](TrackAPI.md#fetch)
- [getInfo](TrackAPI.md#getinfo)

## Constructors

### constructor

• **new TrackAPI**(`params`)

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

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Track`](../interfaces/Track.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TrackAPIGetInfoParams`](../interfaces/TrackAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)\>

#### Defined in

[lib/track/TrackAPI.ts:15](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/track/TrackAPI.ts#L15)
