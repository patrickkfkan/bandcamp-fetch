[bandcamp-fetch](../README.md) / LimiterDiscoveryAPI

# Class: LimiterDiscoveryAPI

## Hierarchy

- [`DiscoveryAPI`](DiscoveryAPI.md)

  ↳ **`LimiterDiscoveryAPI`**

## Table of contents

### Constructors

- [constructor](LimiterDiscoveryAPI.md#constructor)

### Accessors

- [cache](LimiterDiscoveryAPI.md#cache)
- [imageAPI](LimiterDiscoveryAPI.md#imageapi)

### Methods

- [discover](LimiterDiscoveryAPI.md#discover)
- [fetch](LimiterDiscoveryAPI.md#fetch)
- [getAvailableOptions](LimiterDiscoveryAPI.md#getavailableoptions)
- [sanitizeDiscoverParams](LimiterDiscoveryAPI.md#sanitizediscoverparams)

## Constructors

### constructor

• **new LimiterDiscoveryAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[constructor](DiscoveryAPI.md#constructor)

#### Defined in

[lib/discovery/DiscoveryAPI.ts:136](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L136)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

DiscoveryAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

DiscoveryAPI.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### discover

▸ **discover**(`params`): `Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[discover](DiscoveryAPI.md#discover)

#### Defined in

[lib/discovery/DiscoveryAPI.ts:149](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L149)

___

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``true`` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`\>

#### Inherited from

[DiscoveryAPI](DiscoveryAPI.md).[fetch](DiscoveryAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L19)

▸ `Protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse?` | `boolean` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[DiscoveryAPI](DiscoveryAPI.md).[fetch](DiscoveryAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getAvailableOptions

▸ **getAvailableOptions**(): `Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Returns

`Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[getAvailableOptions](DiscoveryAPI.md#getavailableoptions)

#### Defined in

[lib/discovery/DiscoveryAPI.ts:141](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L141)

___

### sanitizeDiscoverParams

▸ **sanitizeDiscoverParams**(`params`): `Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[sanitizeDiscoverParams](DiscoveryAPI.md#sanitizediscoverparams)

#### Defined in

[lib/discovery/DiscoveryAPI.ts:145](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L145)
