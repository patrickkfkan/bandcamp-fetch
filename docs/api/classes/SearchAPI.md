[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / SearchAPI

# Class: SearchAPI

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterSearchAPI`](LimiterSearchAPI.md)

## Constructors

### new SearchAPI()

> **new SearchAPI**(`params`): [`SearchAPI`](SearchAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

[`SearchAPI`](SearchAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`constructor`](BaseAPIWithImageSupport.md#constructors)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`cache`](BaseAPIWithImageSupport.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`imageAPI`](BaseAPIWithImageSupport.md#imageapi)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### albums()

> **albums**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L34)

***

### all()

> **all**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:26](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L26)

***

### artistsAndLabels()

> **artistsAndLabels**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L30)

***

### fans()

> **fans**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L42)

***

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### search()

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

##### Defined in

[lib/search/SearchAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L50)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

##### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L51)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

##### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L52)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

##### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L53)

***

### tracks()

> **tracks**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Defined in

[lib/search/SearchAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L38)
