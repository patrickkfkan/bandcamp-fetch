[bandcamp-fetch](../README.md) / LimiterTrackAPI

# Class: LimiterTrackAPI

## Hierarchy

- [`TrackAPI`](TrackAPI.md)

  ↳ **`LimiterTrackAPI`**

## Table of contents

### Constructors

- [constructor](LimiterTrackAPI.md#constructor)

### Accessors

- [cache](LimiterTrackAPI.md#cache)
- [imageAPI](LimiterTrackAPI.md#imageapi)

### Methods

- [fetch](LimiterTrackAPI.md#fetch)
- [getInfo](LimiterTrackAPI.md#getinfo)

## Constructors

### constructor

• **new LimiterTrackAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[TrackAPI](TrackAPI.md).[constructor](TrackAPI.md#constructor)

#### Defined in

[lib/track/TrackAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/track/TrackAPI.ts#L33)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

TrackAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

TrackAPI.imageAPI

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

[TrackAPI](TrackAPI.md).[fetch](TrackAPI.md#fetch)

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

[TrackAPI](TrackAPI.md).[fetch](TrackAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Track`](../interfaces/Track.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TrackAPIGetInfoParams`](../interfaces/TrackAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)\>

#### Overrides

[TrackAPI](TrackAPI.md).[getInfo](TrackAPI.md#getinfo)

#### Defined in

[lib/track/TrackAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/track/TrackAPI.ts#L37)
