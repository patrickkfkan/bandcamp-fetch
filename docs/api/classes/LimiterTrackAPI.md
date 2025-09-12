[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterTrackAPI

# Class: LimiterTrackAPI

## Extends

- [`TrackAPI`](TrackAPI.md)

## Constructors

### new LimiterTrackAPI()

> **new LimiterTrackAPI**(`params`): [`LimiterTrackAPI`](LimiterTrackAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterTrackAPI`](LimiterTrackAPI.md)

#### Overrides

[`TrackAPI`](TrackAPI.md).[`constructor`](TrackAPI.md#constructors)

#### Defined in

[lib/track/TrackAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/track/TrackAPI.ts#L33)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`TrackAPI`](TrackAPI.md).[`cache`](TrackAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`TrackAPI`](TrackAPI.md).[`imageAPI`](TrackAPI.md#imageapi)

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

[`TrackAPI`](TrackAPI.md).[`fetch`](TrackAPI.md#fetch)

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

[`TrackAPI`](TrackAPI.md).[`fetch`](TrackAPI.md#fetch)

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

[`TrackAPI`](TrackAPI.md).[`fetch`](TrackAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Track`](../interfaces/Track.md)\>

#### Parameters

• **params**: [`TrackAPIGetInfoParams`](../interfaces/TrackAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Track`](../interfaces/Track.md)\>

#### Overrides

[`TrackAPI`](TrackAPI.md).[`getInfo`](TrackAPI.md#getinfo)

#### Defined in

[lib/track/TrackAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/track/TrackAPI.ts#L37)
