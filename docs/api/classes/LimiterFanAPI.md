[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterFanAPI

# Class: LimiterFanAPI

Defined in: [lib/fan/FanAPI.ts:203](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L203)

## Extends

- [`FanAPI`](FanAPI.md)

## Constructors

### Constructor

> **new LimiterFanAPI**(`params`): `LimiterFanAPI`

Defined in: [lib/fan/FanAPI.ts:206](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L206)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterFanAPI`

#### Overrides

[`FanAPI`](FanAPI.md).[`constructor`](FanAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`FanAPI`](FanAPI.md).[`cache`](FanAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`FanAPI`](FanAPI.md).[`imageAPI`](FanAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`FanAPI`](FanAPI.md).[`logger`](FanAPI.md#logger)

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

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

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

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

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

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

***

### getCollection()

> **getCollection**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

Defined in: [lib/fan/FanAPI.ts:215](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L215)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getCollection`](FanAPI.md#getcollection)

***

### getFollowingArtistsAndLabels()

> **getFollowingArtistsAndLabels**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

Defined in: [lib/fan/FanAPI.ts:233](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L233)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getFollowingArtistsAndLabels`](FanAPI.md#getfollowingartistsandlabels)

***

### getFollowingGenres()

> **getFollowingGenres**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

Defined in: [lib/fan/FanAPI.ts:243](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L243)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getFollowingGenres`](FanAPI.md#getfollowinggenres)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Fan`](../interfaces/Fan.md)\>

Defined in: [lib/fan/FanAPI.ts:211](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L211)

#### Parameters

##### params

[`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Fan`](../interfaces/Fan.md)\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getInfo`](FanAPI.md#getinfo)

***

### getWishlist()

> **getWishlist**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

Defined in: [lib/fan/FanAPI.ts:224](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/fan/FanAPI.ts#L224)

#### Parameters

##### params

[`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<[`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md) \| `null`\>\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getWishlist`](FanAPI.md#getwishlist)
