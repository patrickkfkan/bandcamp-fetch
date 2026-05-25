[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterShowAPI

# Class: LimiterShowAPI

Defined in: [lib/show/ShowAPI.ts:61](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/show/ShowAPI.ts#L61)

## Extends

- [`ShowAPI`](ShowAPI.md)

## Constructors

### Constructor

> **new LimiterShowAPI**(`params`): `LimiterShowAPI`

Defined in: [lib/show/ShowAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/show/ShowAPI.ts#L64)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterShowAPI`

#### Overrides

[`ShowAPI`](ShowAPI.md).[`constructor`](ShowAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`ShowAPI`](ShowAPI.md).[`cache`](ShowAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`ShowAPI`](ShowAPI.md).[`imageAPI`](ShowAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`ShowAPI`](ShowAPI.md).[`logger`](ShowAPI.md#logger)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

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

[`ShowAPI`](ShowAPI.md).[`fetch`](ShowAPI.md#fetch)

***

### getShow()

> **getShow**(`params`): `Promise`\<[`Show`](../interfaces/Show.md)\>

Defined in: [lib/show/ShowAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/show/ShowAPI.ts#L69)

#### Parameters

##### params

[`ShowAPIGetShowParams`](../interfaces/ShowAPIGetShowParams.md)

#### Returns

`Promise`\<[`Show`](../interfaces/Show.md)\>

#### Overrides

[`ShowAPI`](ShowAPI.md).[`getShow`](ShowAPI.md#getshow)

***

### list()

> **list**(`params?`): `Promise`\<[`Show`](../interfaces/Show.md)[]\>

Defined in: [lib/show/ShowAPI.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/show/ShowAPI.ts#L73)

#### Parameters

##### params?

[`ShowAPIListParams`](../interfaces/ShowAPIListParams.md)

#### Returns

`Promise`\<[`Show`](../interfaces/Show.md)[]\>

#### Overrides

[`ShowAPI`](ShowAPI.md).[`list`](ShowAPI.md#list)
