[bandcamp-fetch](../README.md) / DiscoveryAPI

# Class: DiscoveryAPI

## Hierarchy

- **`DiscoveryAPI`**

  ↳ [`LimiterDiscoveryAPI`](LimiterDiscoveryAPI.md)

## Table of contents

### Constructors

- [constructor](DiscoveryAPI.md#constructor)

### Methods

- [discover](DiscoveryAPI.md#discover)
- [getAvailableOptions](DiscoveryAPI.md#getavailableoptions)
- [sanitizeDiscoverParams](DiscoveryAPI.md#sanitizediscoverparams)

## Constructors

### constructor

• **new DiscoveryAPI**()

## Methods

### discover

▸ `Static` **discover**(`params?`): `Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:76](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/discovery/DiscoveryAPI.ts#L76)

___

### getAvailableOptions

▸ `Static` **getAvailableOptions**(): `Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Returns

`Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:24](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/discovery/DiscoveryAPI.ts#L24)

___

### sanitizeDiscoverParams

▸ `Static` **sanitizeDiscoverParams**(`params?`): `Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Defined in

[lib/discovery/DiscoveryAPI.ts:31](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/discovery/DiscoveryAPI.ts#L31)
