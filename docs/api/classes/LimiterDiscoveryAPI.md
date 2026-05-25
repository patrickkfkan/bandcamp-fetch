[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterDiscoveryAPI

# Class: LimiterDiscoveryAPI

Defined in: [lib/discovery/DiscoveryAPI.ts:191](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L191)

## Extends

- [`DiscoveryAPI`](DiscoveryAPI.md)

## Constructors

### Constructor

> **new LimiterDiscoveryAPI**(`params`): `LimiterDiscoveryAPI`

Defined in: [lib/discovery/DiscoveryAPI.ts:194](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L194)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterDiscoveryAPI`

#### Overrides

[`DiscoveryAPI`](DiscoveryAPI.md).[`constructor`](DiscoveryAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`DiscoveryAPI`](DiscoveryAPI.md).[`cache`](DiscoveryAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`DiscoveryAPI`](DiscoveryAPI.md).[`imageAPI`](DiscoveryAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`DiscoveryAPI`](DiscoveryAPI.md).[`logger`](DiscoveryAPI.md#logger)

## Methods

### discover()

> **discover**(`params`): `Promise`\<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:209](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L209)

#### Parameters

##### params

[`DiscoverParams`](../interfaces/DiscoverParams.md)

#### Returns

`Promise`\<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Overrides

[`DiscoveryAPI`](DiscoveryAPI.md).[`discover`](DiscoveryAPI.md#discover)

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

[`DiscoveryAPI`](DiscoveryAPI.md).[`fetch`](DiscoveryAPI.md#fetch)

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

[`DiscoveryAPI`](DiscoveryAPI.md).[`fetch`](DiscoveryAPI.md#fetch)

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

[`DiscoveryAPI`](DiscoveryAPI.md).[`fetch`](DiscoveryAPI.md#fetch)

***

### getAvailableOptions()

> **getAvailableOptions**(): `Promise`\<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:199](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L199)

#### Returns

`Promise`\<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Overrides

[`DiscoveryAPI`](DiscoveryAPI.md).[`getAvailableOptions`](DiscoveryAPI.md#getavailableoptions)

***

### getRecommendedTagsAndLocations()

> **getRecommendedTagsAndLocations**(): `Promise`\<[`TagsAndLocations`](../interfaces/TagsAndLocations.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:213](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L213)

#### Returns

`Promise`\<[`TagsAndLocations`](../interfaces/TagsAndLocations.md)\>

#### Overrides

[`DiscoveryAPI`](DiscoveryAPI.md).[`getRecommendedTagsAndLocations`](DiscoveryAPI.md#getrecommendedtagsandlocations)

***

### sanitizeDiscoverParams()

> **sanitizeDiscoverParams**(`params`): `Promise`\<[`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)\>

Defined in: [lib/discovery/DiscoveryAPI.ts:203](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/discovery/DiscoveryAPI.ts#L203)

#### Parameters

##### params

[`DiscoverParams`](../interfaces/DiscoverParams.md)

#### Returns

`Promise`\<[`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)\>

#### Overrides

[`DiscoveryAPI`](DiscoveryAPI.md).[`sanitizeDiscoverParams`](DiscoveryAPI.md#sanitizediscoverparams)
