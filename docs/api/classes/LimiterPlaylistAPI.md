[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterPlaylistAPI

# Class: LimiterPlaylistAPI

Defined in: [lib/playlist/PlaylistAPI.ts:163](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L163)

## Extends

- [`PlaylistAPI`](PlaylistAPI.md)

## Constructors

### Constructor

> **new LimiterPlaylistAPI**(`params`): `LimiterPlaylistAPI`

Defined in: [lib/playlist/PlaylistAPI.ts:166](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L166)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterPlaylistAPI`

#### Overrides

[`PlaylistAPI`](PlaylistAPI.md).[`constructor`](PlaylistAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`PlaylistAPI`](PlaylistAPI.md).[`cache`](PlaylistAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`PlaylistAPI`](PlaylistAPI.md).[`imageAPI`](PlaylistAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`PlaylistAPI`](PlaylistAPI.md).[`logger`](PlaylistAPI.md#logger)

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

[`PlaylistAPI`](PlaylistAPI.md).[`fetch`](PlaylistAPI.md#fetch)

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

[`PlaylistAPI`](PlaylistAPI.md).[`fetch`](PlaylistAPI.md#fetch)

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

[`PlaylistAPI`](PlaylistAPI.md).[`fetch`](PlaylistAPI.md#fetch)

***

### getAdditionalTracks()

> **getAdditionalTracks**(`params`): `Promise`\<[`PlaylistTrack`](../interfaces/PlaylistTrack.md)[]\>

Defined in: [lib/playlist/PlaylistAPI.ts:175](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L175)

#### Parameters

##### params

[`PlaylistAPIGetAdditionalTracksParams`](../type-aliases/PlaylistAPIGetAdditionalTracksParams.md)

#### Returns

`Promise`\<[`PlaylistTrack`](../interfaces/PlaylistTrack.md)[]\>

#### Overrides

[`PlaylistAPI`](PlaylistAPI.md).[`getAdditionalTracks`](PlaylistAPI.md#getadditionaltracks)

***

### getPlaylist()

> **getPlaylist**(`params`): `Promise`\<[`Playlist`](../interfaces/Playlist.md)\>

Defined in: [lib/playlist/PlaylistAPI.ts:171](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L171)

#### Parameters

##### params

[`PlaylistAPIGetPlaylistParams`](../interfaces/PlaylistAPIGetPlaylistParams.md)

#### Returns

`Promise`\<[`Playlist`](../interfaces/Playlist.md)\>

#### Overrides

[`PlaylistAPI`](PlaylistAPI.md).[`getPlaylist`](PlaylistAPI.md#getplaylist)

***

### list()

> **list**(`params`): `Promise`\<[`PlaylistList`](../interfaces/PlaylistList.md)\>

Defined in: [lib/playlist/PlaylistAPI.ts:181](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L181)

#### Parameters

##### params

[`PlaylistAPIListParams`](../type-aliases/PlaylistAPIListParams.md)

#### Returns

`Promise`\<[`PlaylistList`](../interfaces/PlaylistList.md)\>

#### Overrides

[`PlaylistAPI`](PlaylistAPI.md).[`list`](PlaylistAPI.md#list)
