[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / DiscoveryAPI

# Class: DiscoveryAPI

Defined in: [lib/discovery/DiscoveryAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L31)

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterDiscoveryAPI`](LimiterDiscoveryAPI.md)

## Constructors

### Constructor

> **new DiscoveryAPI**(`params`): `DiscoveryAPI`

Defined in: [lib/common/BaseAPIWithImageSupport.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L11)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

`DiscoveryAPI`

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`constructor`](BaseAPIWithImageSupport.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`cache`](BaseAPIWithImageSupport.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`imageAPI`](BaseAPIWithImageSupport.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`logger`](BaseAPIWithImageSupport.md#logger)

## Methods

### discover()

> **discover**(`params?`): `Promise`\<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:95](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L95)

#### Parameters

##### params?

[`DiscoverParams`](../interfaces/DiscoverParams.md) \| [`DiscoverResultContinuation`](../interfaces/DiscoverResultContinuation.md)

#### Returns

`Promise`\<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

***

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

***

### getAvailableOptions()

> **getAvailableOptions**(): `Promise`\<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L32)

#### Returns

`Promise`\<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

***

### getRecommendedTagsAndLocations()

> **getRecommendedTagsAndLocations**(): `Promise`\<[`TagsAndLocations`](../interfaces/TagsAndLocations.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:185](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L185)

#### Returns

`Promise`\<[`TagsAndLocations`](../interfaces/TagsAndLocations.md)\>

***

### sanitizeDiscoverParams()

> **sanitizeDiscoverParams**(`params?`): `Promise`\<[`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L43)

#### Parameters

##### params?

[`DiscoverParams`](../interfaces/DiscoverParams.md)

#### Returns

`Promise`\<[`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)\>
