[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / FanAPI

# Class: FanAPI

Defined in: [lib/fan/FanAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L53)

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterFanAPI`](LimiterFanAPI.md)

## Constructors

### Constructor

> **new FanAPI**(`params`): `FanAPI`

Defined in: [lib/common/BaseAPIWithImageSupport.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L11)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

`FanAPI`

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`constructor`](BaseAPIWithImageSupport.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`cache`](BaseAPIWithImageSupport.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`imageAPI`](BaseAPIWithImageSupport.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`logger`](BaseAPIWithImageSupport.md#logger)

## Methods

### fetch()

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/common/BaseAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L23)

##### Parameters

###### url

`string`

###### jsonResponse

`false`

###### method

[`HEAD`](../enumerations/FetchMethod.md#head)

###### payload?

`undefined`

###### requireCookie?

`boolean`

##### Returns

`Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

##### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/common/BaseAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L30)

##### Parameters

###### url

`string`

###### jsonResponse

`true`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/common/BaseAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L37)

##### Parameters

###### url

`string`

###### jsonResponse?

`boolean`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

***

### getCollection()

> **getCollection**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

Defined in: [lib/fan/FanAPI.ts:72](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L72)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

***

### getFollowingArtistsAndLabels()

> **getFollowingArtistsAndLabels**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

Defined in: [lib/fan/FanAPI.ts:98](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L98)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

***

### getFollowingGenres()

> **getFollowingGenres**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

Defined in: [lib/fan/FanAPI.ts:112](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L112)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Fan`](../interfaces/Fan.md)\>

Defined in: [lib/fan/FanAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L54)

#### Parameters

##### params

[`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Fan`](../interfaces/Fan.md)\>

***

### getWishlist()

> **getWishlist**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

Defined in: [lib/fan/FanAPI.ts:86](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L86)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>
