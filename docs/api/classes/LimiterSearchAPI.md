[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterSearchAPI

# Class: LimiterSearchAPI

Defined in: [lib/search/SearchAPI.ts:130](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L130)

## Extends

- [`SearchAPI`](SearchAPI.md)

## Constructors

### Constructor

> **new LimiterSearchAPI**(`params`): `LimiterSearchAPI`

Defined in: [lib/search/SearchAPI.ts:133](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L133)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterSearchAPI`

#### Overrides

[`SearchAPI`](SearchAPI.md).[`constructor`](SearchAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`SearchAPI`](SearchAPI.md).[`cache`](SearchAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`SearchAPI`](SearchAPI.md).[`imageAPI`](SearchAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`SearchAPI`](SearchAPI.md).[`logger`](SearchAPI.md#logger)

## Methods

### albums()

> **albums**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

Defined in: [lib/search/SearchAPI.ts:150](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L150)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`albums`](SearchAPI.md#albums)

***

### all()

> **all**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

Defined in: [lib/search/SearchAPI.ts:138](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L138)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`all`](SearchAPI.md#all)

***

### artistsAndLabels()

> **artistsAndLabels**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

Defined in: [lib/search/SearchAPI.ts:144](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L144)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`artistsAndLabels`](SearchAPI.md#artistsandlabels)

***

### fans()

> **fans**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

Defined in: [lib/search/SearchAPI.ts:162](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L162)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`fans`](SearchAPI.md#fans)

***

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

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

[`SearchAPI`](SearchAPI.md).[`fetch`](SearchAPI.md#fetch)

***

### tracks()

> **tracks**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

Defined in: [lib/search/SearchAPI.ts:156](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L156)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

#### Overrides

[`SearchAPI`](SearchAPI.md).[`tracks`](SearchAPI.md#tracks)
