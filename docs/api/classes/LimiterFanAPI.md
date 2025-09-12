[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterFanAPI

# Class: LimiterFanAPI

## Extends

- [`FanAPI`](FanAPI.md)

## Constructors

### new LimiterFanAPI()

> **new LimiterFanAPI**(`params`): [`LimiterFanAPI`](LimiterFanAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterFanAPI`](LimiterFanAPI.md)

#### Overrides

[`FanAPI`](FanAPI.md).[`constructor`](FanAPI.md#constructors)

#### Defined in

[lib/fan/FanAPI.ts:167](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L167)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`FanAPI`](FanAPI.md).[`cache`](FanAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`FanAPI`](FanAPI.md).[`imageAPI`](FanAPI.md#imageapi)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### fetch()

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload`?): `Promise`\<`object`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `false`

• **method**: [`HEAD`](../enumerations/FetchMethod.md#head)

• **payload?**: `undefined`

##### Returns

`Promise`\<`object`\>

###### ok

> **ok**: `boolean`

###### status

> **status**: `number`

##### Inherited from

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L20)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`?, `payload`?): `Promise`\<`any`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `true`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L21)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`?, `method`?, `payload`?): `Promise`\<`string`\>

##### Parameters

• **url**: `string`

• **jsonResponse?**: `boolean`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`FanAPI`](FanAPI.md).[`fetch`](FanAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getCollection()

> **getCollection**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

• **params**: [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getCollection`](FanAPI.md#getcollection)

#### Defined in

[lib/fan/FanAPI.ts:176](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L176)

***

### getFollowingArtistsAndLabels()

> **getFollowingArtistsAndLabels**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Parameters

• **params**: [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`UserKind`](../interfaces/UserKind.md)\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getFollowingArtistsAndLabels`](FanAPI.md#getfollowingartistsandlabels)

#### Defined in

[lib/fan/FanAPI.ts:184](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L184)

***

### getFollowingGenres()

> **getFollowingGenres**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

#### Parameters

• **params**: [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<[`Tag`](../interfaces/Tag.md)\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getFollowingGenres`](FanAPI.md#getfollowinggenres)

#### Defined in

[lib/fan/FanAPI.ts:188](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L188)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Fan`](../interfaces/Fan.md)\>

#### Parameters

• **params**: [`FanAPIGetInfoParams`](../interfaces/FanAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Fan`](../interfaces/Fan.md)\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getInfo`](FanAPI.md#getinfo)

#### Defined in

[lib/fan/FanAPI.ts:172](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L172)

***

### getWishlist()

> **getWishlist**(`params`): `Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Parameters

• **params**: [`FanAPIGetItemsParams`](../interfaces/FanAPIGetItemsParams.md)

#### Returns

`Promise`\<[`FanPageItemsResult`](../interfaces/FanPageItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\> \| [`FanContinuationItemsResult`](../interfaces/FanContinuationItemsResult.md)\<`NonNullable`\<`null` \| [`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md)\>\>\>

#### Overrides

[`FanAPI`](FanAPI.md).[`getWishlist`](FanAPI.md#getwishlist)

#### Defined in

[lib/fan/FanAPI.ts:180](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/fan/FanAPI.ts#L180)
