[bandcamp-fetch](../README.md) / FanAPI

# Class: FanAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`FanAPI`**

  ↳↳ [`LimiterFanAPI`](LimiterFanAPI.md)

## Table of contents

### Constructors

- [constructor](FanAPI.md#constructor)

### Accessors

- [cache](FanAPI.md#cache)
- [imageAPI](FanAPI.md#imageapi)

### Methods

- [fetch](FanAPI.md#fetch)
- [getCollection](FanAPI.md#getcollection)
- [getFollowingArtistsAndLabels](FanAPI.md#getfollowingartistsandlabels)
- [getFollowingGenres](FanAPI.md#getfollowinggenres)
- [getInfo](FanAPI.md#getinfo)
- [getWishlist](FanAPI.md#getwishlist)

## Constructors

### constructor

• **new FanAPI**(`params`)

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

### getCollection

▸ **getCollection**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Defined in

[lib/fan/FanAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/fan/FanAPI.ts#L52)

___

### getFollowingArtistsAndLabels

▸ **getFollowingArtistsAndLabels**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Defined in

[lib/fan/FanAPI.ts:72](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/fan/FanAPI.ts#L72)

___

### getFollowingGenres

▸ **getFollowingGenres**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[lib/fan/FanAPI.ts:82](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/fan/FanAPI.ts#L82)

___

### getInfo

▸ **getInfo**(`params`): `Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md) |

#### Returns

`Promise`<[`Fan`](../interfaces/Fan.md)\>

#### Defined in

[lib/fan/FanAPI.ts:41](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/fan/FanAPI.ts#L41)

___

### getWishlist

▸ **getWishlist**(`params`): `Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md) |

#### Returns

`Promise`<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)<`NonNullable`<``null`` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Defined in

[lib/fan/FanAPI.ts:62](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/fan/FanAPI.ts#L62)
