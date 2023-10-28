[bandcamp-fetch](../README.md) / DiscoveryAPI

# Class: DiscoveryAPI

## Hierarchy

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ **`DiscoveryAPI`**

  ↳↳ [`LimiterDiscoveryAPI`](LimiterDiscoveryAPI.md)

## Table of contents

### Constructors

- [constructor](DiscoveryAPI.md#constructor)

### Accessors

- [cache](DiscoveryAPI.md#cache)
- [imageAPI](DiscoveryAPI.md#imageapi)

### Methods

- [discover](DiscoveryAPI.md#discover)
- [fetch](DiscoveryAPI.md#fetch)
- [getAvailableOptions](DiscoveryAPI.md#getavailableoptions)
- [sanitizeDiscoverParams](DiscoveryAPI.md#sanitizediscoverparams)

## Constructors

### constructor

• **new DiscoveryAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) |

#### Inherited from

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[constructor](BaseAPIWithImageSupport.md#constructor)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPIWithImageSupport.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

___

### imageAPI

• `get` **imageAPI**(): [`ImageAPI`](ImageAPI.md)

#### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

BaseAPIWithImageSupport.imageAPI

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPIWithImageSupport.ts#L17)

## Methods

### discover

▸ **discover**(`params?`): `Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:76](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L76)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

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

[BaseAPIWithImageSupport](BaseAPIWithImageSupport.md).[fetch](BaseAPIWithImageSupport.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)

___

### getAvailableOptions

▸ **getAvailableOptions**(): `Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Returns

`Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:24](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L24)

___

### sanitizeDiscoverParams

▸ **sanitizeDiscoverParams**(`params?`): `Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/discovery/DiscoveryAPI.ts#L31)
