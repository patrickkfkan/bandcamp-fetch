[bandcamp-fetch](../README.md) / LimiterFanAPI

# Class: LimiterFanAPI

## Hierarchy

- [`FanAPI`](FanAPI.md)

  ↳ **`LimiterFanAPI`**

## Table of contents

### Constructors

- [constructor](LimiterFanAPI.md#constructor)

### Accessors

- [cache](LimiterFanAPI.md#cache)
- [imageAPI](LimiterFanAPI.md#imageapi)

### Methods

- [fetch](LimiterFanAPI.md#fetch)
- [getCollection](LimiterFanAPI.md#getcollection)
- [getFollowingArtistsAndLabels](LimiterFanAPI.md#getfollowingartistsandlabels)
- [getFollowingGenres](LimiterFanAPI.md#getfollowinggenres)
- [getInfo](LimiterFanAPI.md#getinfo)
- [getWishlist](LimiterFanAPI.md#getwishlist)

## Constructors

### constructor

• **new LimiterFanAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[FanAPI](FanAPI.md).[constructor](FanAPI.md#constructor)

#### Defined in

[lib/fan/FanAPI.ts:166](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L166)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

FanAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L27)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

FanAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``false`` |
| `method` | [`HEAD`](../enums/FetchMethod.md#head) |
| `payload?` | `undefined` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[FanAPI](FanAPI.md).[fetch](FanAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L20)

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

[FanAPI](FanAPI.md).[fetch](FanAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L21)

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

[FanAPI](FanAPI.md).[fetch](FanAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L22)

___

### getCollection

▸ **getCollection**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[FanAPI](FanAPI.md).[getCollection](FanAPI.md#getcollection)

#### Defined in

[lib/fan/FanAPI.ts:175](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L175)

___

### getFollowingArtistsAndLabels

▸ **getFollowingArtistsAndLabels**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Overrides

[FanAPI](FanAPI.md).[getFollowingArtistsAndLabels](FanAPI.md#getfollowingartistsandlabels)

#### Defined in

[lib/fan/FanAPI.ts:183](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L183)

___

### getFollowingGenres

▸ **getFollowingGenres**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Overrides

[FanAPI](FanAPI.md).[getFollowingGenres](FanAPI.md#getfollowinggenres)

#### Defined in

[lib/fan/FanAPI.ts:187](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L187)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Overrides

[FanAPI](FanAPI.md).[getInfo](FanAPI.md#getinfo)

#### Defined in

[lib/fan/FanAPI.ts:171](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L171)

___

### getWishlist

▸ **getWishlist**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[FanAPI](FanAPI.md).[getWishlist](FanAPI.md#getwishlist)

#### Defined in

[lib/fan/FanAPI.ts:179](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/fan/FanAPI.ts#L179)
