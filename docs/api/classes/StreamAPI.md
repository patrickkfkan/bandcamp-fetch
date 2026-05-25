[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / StreamAPI

# Class: StreamAPI

Defined in: [lib/stream/StreamAPI.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/stream/StreamAPI.ts#L11)

## Extends

- [`BaseAPI`](BaseAPI.md)

## Extended by

- [`LimiterStreamAPI`](LimiterStreamAPI.md)

## Constructors

### Constructor

> **new StreamAPI**(`params`): `StreamAPI`

Defined in: [lib/common/BaseAPI.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L17)

#### Parameters

##### params

[`BaseAPIParams`](../interfaces/BaseAPIParams.md)

#### Returns

`StreamAPI`

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`constructor`](BaseAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`cache`](BaseAPI.md#cache)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`logger`](BaseAPI.md#logger)

## Methods

### fetch()

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/common/BaseAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L23)

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

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/common/BaseAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L30)

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

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/common/BaseAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L37)

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

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

***

### refresh()

> **refresh**(`url`): `Promise`\<`string` \| `null`\>

Defined in: [lib/stream/StreamAPI.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/stream/StreamAPI.ts#L16)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### test()

> **test**(`url`): `Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

Defined in: [lib/stream/StreamAPI.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/stream/StreamAPI.ts#L12)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>
