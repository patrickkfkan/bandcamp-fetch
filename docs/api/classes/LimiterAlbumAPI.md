[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterAlbumAPI

# Class: LimiterAlbumAPI

Defined in: [lib/album/AlbumAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/album/AlbumAPI.ts#L37)

## Extends

- [`AlbumAPI`](AlbumAPI.md)

## Constructors

### Constructor

> **new LimiterAlbumAPI**(`params`): `LimiterAlbumAPI`

Defined in: [lib/album/AlbumAPI.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/album/AlbumAPI.ts#L40)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterAlbumAPI`

#### Overrides

[`AlbumAPI`](AlbumAPI.md).[`constructor`](AlbumAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`AlbumAPI`](AlbumAPI.md).[`cache`](AlbumAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`AlbumAPI`](AlbumAPI.md).[`imageAPI`](AlbumAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`AlbumAPI`](AlbumAPI.md).[`logger`](AlbumAPI.md#logger)

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

[`AlbumAPI`](AlbumAPI.md).[`fetch`](AlbumAPI.md#fetch)

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

[`AlbumAPI`](AlbumAPI.md).[`fetch`](AlbumAPI.md#fetch)

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

[`AlbumAPI`](AlbumAPI.md).[`fetch`](AlbumAPI.md#fetch)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Album`](../interfaces/Album.md)\>

Defined in: [lib/album/AlbumAPI.ts:45](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/album/AlbumAPI.ts#L45)

#### Parameters

##### params

[`AlbumAPIGetInfoParams`](../interfaces/AlbumAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Album`](../interfaces/Album.md)\>

#### Overrides

[`AlbumAPI`](AlbumAPI.md).[`getInfo`](AlbumAPI.md#getinfo)
