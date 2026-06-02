[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / PlaylistAPI

# Class: PlaylistAPI

Defined in: [lib/playlist/PlaylistAPI.ts:55](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L55)

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterPlaylistAPI`](LimiterPlaylistAPI.md)

## Constructors

### Constructor

> **new PlaylistAPI**(`params`): `PlaylistAPI`

Defined in: [lib/common/BaseAPIWithImageSupport.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L11)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

`PlaylistAPI`

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

### getAdditionalTracks()

> **getAdditionalTracks**(`params`): `Promise`\<[`PlaylistTrack`](../interfaces/PlaylistTrack.md)[]\>

Defined in: [lib/playlist/PlaylistAPI.ts:81](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L81)

#### Parameters

##### params

[`PlaylistAPIGetAdditionalTracksParams`](../type-aliases/PlaylistAPIGetAdditionalTracksParams.md)

#### Returns

`Promise`\<[`PlaylistTrack`](../interfaces/PlaylistTrack.md)[]\>

***

### getPlaylist()

> **getPlaylist**(`params`): `Promise`\<[`Playlist`](../interfaces/Playlist.md)\>

Defined in: [lib/playlist/PlaylistAPI.ts:56](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L56)

#### Parameters

##### params

[`PlaylistAPIGetPlaylistParams`](../interfaces/PlaylistAPIGetPlaylistParams.md)

#### Returns

`Promise`\<[`Playlist`](../interfaces/Playlist.md)\>

***

### list()

> **list**(`params`): `Promise`\<[`PlaylistList`](../interfaces/PlaylistList.md)\>

Defined in: [lib/playlist/PlaylistAPI.ts:134](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L134)

#### Parameters

##### params

[`PlaylistAPIListParams`](../type-aliases/PlaylistAPIListParams.md)

#### Returns

`Promise`\<[`PlaylistList`](../interfaces/PlaylistList.md)\>
