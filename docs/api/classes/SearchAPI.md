[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / SearchAPI

# Class: SearchAPI

Defined in: [lib/search/SearchAPI.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L34)

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterSearchAPI`](LimiterSearchAPI.md)

## Constructors

### Constructor

> **new SearchAPI**(`params`): `SearchAPI`

Defined in: [lib/common/BaseAPIWithImageSupport.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L11)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

`SearchAPI`

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

### albums()

> **albums**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

Defined in: [lib/search/SearchAPI.ts:46](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L46)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAlbum`](../interfaces/SearchResultAlbum.md)\>\>

***

### all()

> **all**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

Defined in: [lib/search/SearchAPI.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L35)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultAny`](../type-aliases/SearchResultAny.md)\>\>

***

### artistsAndLabels()

> **artistsAndLabels**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

Defined in: [lib/search/SearchAPI.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L39)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultArtist`](../interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](../interfaces/SearchResultLabel.md)\>\>

***

### fans()

> **fans**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

Defined in: [lib/search/SearchAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L54)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultFan`](../interfaces/SearchResultFan.md)\>\>

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

### tracks()

> **tracks**(`params`): `Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>

Defined in: [lib/search/SearchAPI.ts:50](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/search/SearchAPI.ts#L50)

#### Parameters

##### params

[`SearchAPISearchParams`](../interfaces/SearchAPISearchParams.md)

#### Returns

`Promise`\<[`SearchResults`](../interfaces/SearchResults.md)\<[`SearchResultTrack`](../interfaces/SearchResultTrack.md)\>\>
