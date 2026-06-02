[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterStreamAPI

# Class: LimiterStreamAPI

Defined in: [lib/stream/StreamAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/stream/StreamAPI.ts#L27)

## Extends

- [`StreamAPI`](StreamAPI.md)

## Constructors

### Constructor

> **new LimiterStreamAPI**(`params`): `LimiterStreamAPI`

Defined in: [lib/stream/StreamAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/stream/StreamAPI.ts#L30)

#### Parameters

##### params

[`BaseAPIParams`](../interfaces/BaseAPIParams.md) & `object`

#### Returns

`LimiterStreamAPI`

#### Overrides

[`StreamAPI`](StreamAPI.md).[`constructor`](StreamAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`StreamAPI`](StreamAPI.md).[`cache`](StreamAPI.md#cache)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`StreamAPI`](StreamAPI.md).[`logger`](StreamAPI.md#logger)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

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

[`StreamAPI`](StreamAPI.md).[`fetch`](StreamAPI.md#fetch)

***

### refresh()

> **refresh**(`url`): `Promise`\<`string` \| `null`\>

Defined in: [lib/stream/StreamAPI.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/stream/StreamAPI.ts#L35)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`string` \| `null`\>

#### Overrides

[`StreamAPI`](StreamAPI.md).[`refresh`](StreamAPI.md#refresh)

***

### test()

> **test**(`url`): `Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

Defined in: [lib/stream/StreamAPI.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/stream/StreamAPI.ts#L12)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Inherited from

[`StreamAPI`](StreamAPI.md).[`test`](StreamAPI.md#test)
