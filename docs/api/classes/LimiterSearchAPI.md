[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterSearchAPI

# Class: LimiterSearchAPI

## Extends

- [`SearchAPI`](SearchAPI.md)

## Constructors

### new LimiterSearchAPI()

> **new LimiterSearchAPI**(`params`): [`LimiterSearchAPI`](LimiterSearchAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterSearchAPI`](LimiterSearchAPI.md)

#### Overrides

[`SearchAPI`](SearchAPI.md).[`constructor`](SearchAPI.md#constructors)

#### Defined in

[lib/search/SearchAPI.ts:94](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L94)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`SearchAPI`](SearchAPI.md).[`cache`](SearchAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`SearchAPI`](SearchAPI.md).[`imageAPI`](SearchAPI.md#imageapi)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### albums()

> **albums**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`albums`](SearchAPI.md#albums)

#### Defined in

[lib/search/SearchAPI.ts:107](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L107)

***

### all()

> **all**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`all`](SearchAPI.md#all)

#### Defined in

[lib/search/SearchAPI.ts:99](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L99)

***

### artistsAndLabels()

> **artistsAndLabels**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`artistsAndLabels`](SearchAPI.md#artistsandlabels)

#### Defined in

[lib/search/SearchAPI.ts:103](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L103)

***

### fans()

> **fans**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`fans`](SearchAPI.md#fans)

#### Defined in

[lib/search/SearchAPI.ts:115](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L115)

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

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

##### Inherited from

[`SearchAPI`](SearchAPI.md).[`search`](SearchAPI.md#search)

##### Defined in

[lib/search/SearchAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L50)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

##### Inherited from

[`SearchAPI`](SearchAPI.md).[`search`](SearchAPI.md#search)

##### Defined in

[lib/search/SearchAPI.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L51)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

##### Inherited from

[`SearchAPI`](SearchAPI.md).[`search`](SearchAPI.md#search)

##### Defined in

[lib/search/SearchAPI.ts:52](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L52)

#### search(params)

> `protected` **search**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

##### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md) & `object`

##### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

##### Inherited from

[`SearchAPI`](SearchAPI.md).[`search`](SearchAPI.md#search)

##### Defined in

[lib/search/SearchAPI.ts:53](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L53)

***

### tracks()

> **tracks**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Parameters

• **params**: [`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`tracks`](SearchAPI.md#tracks)

#### Defined in

[lib/search/SearchAPI.ts:111](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/search/SearchAPI.ts#L111)
