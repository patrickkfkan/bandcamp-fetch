[bandcamp-fetch](../README.md) / LimiterFanAPI

# Class: LimiterFanAPI

## Hierarchy

- [`FanAPI`](FanAPI.md)

  ↳ **`LimiterFanAPI`**

## Table of contents

### Constructors

- [constructor](LimiterFanAPI.md#constructor)

### Methods

- [getCollection](LimiterFanAPI.md#getcollection)
- [getFollowingArtistsAndLabels](LimiterFanAPI.md#getfollowingartistsandlabels)
- [getFollowingGenres](LimiterFanAPI.md#getfollowinggenres)
- [getInfo](LimiterFanAPI.md#getinfo)
- [getWishlist](LimiterFanAPI.md#getwishlist)

## Constructors

### constructor

• **new LimiterFanAPI**()

#### Inherited from

[FanAPI](FanAPI.md).[constructor](FanAPI.md#constructor)

## Methods

### getCollection

▸ `Static` **getCollection**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[FanAPI](FanAPI.md).[getCollection](FanAPI.md#getcollection)

#### Defined in

lib/fan/FanAPI.ts:136

___

### getFollowingArtistsAndLabels

▸ `Static` **getFollowingArtistsAndLabels**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Overrides

[FanAPI](FanAPI.md).[getFollowingArtistsAndLabels](FanAPI.md#getfollowingartistsandlabels)

#### Defined in

lib/fan/FanAPI.ts:144

___

### getFollowingGenres

▸ `Static` **getFollowingGenres**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Overrides

[FanAPI](FanAPI.md).[getFollowingGenres](FanAPI.md#getfollowinggenres)

#### Defined in

lib/fan/FanAPI.ts:148

___

### getInfo

▸ `Static` **getInfo**(`params`): `Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Overrides

[FanAPI](FanAPI.md).[getInfo](FanAPI.md#getinfo)

#### Defined in

lib/fan/FanAPI.ts:132

___

### getWishlist

▸ `Static` **getWishlist**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[FanAPI](FanAPI.md).[getWishlist](FanAPI.md#getwishlist)

#### Defined in

lib/fan/FanAPI.ts:140
