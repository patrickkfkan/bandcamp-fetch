[bandcamp-fetch](../README.md) / LimiterDiscoveryAPI

# Class: LimiterDiscoveryAPI

## Hierarchy

- [`DiscoveryAPI`](DiscoveryAPI.md)

  ↳ **`LimiterDiscoveryAPI`**

## Table of contents

### Constructors

- [constructor](LimiterDiscoveryAPI.md#constructor)

### Methods

- [discover](LimiterDiscoveryAPI.md#discover)
- [getAvailableOptions](LimiterDiscoveryAPI.md#getavailableoptions)
- [sanitizeDiscoverParams](LimiterDiscoveryAPI.md#sanitizediscoverparams)

## Constructors

### constructor

• **new LimiterDiscoveryAPI**()

#### Inherited from

[DiscoveryAPI](DiscoveryAPI.md).[constructor](DiscoveryAPI.md#constructor)

## Methods

### discover

▸ `Static` **discover**(`params`): `Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverResult`](../interfaces/DiscoverResult.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[discover](DiscoveryAPI.md#discover)

#### Defined in

lib/discovery/DiscoveryAPI.ts:139

___

### getAvailableOptions

▸ `Static` **getAvailableOptions**(): `Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Returns

`Promise`<[`DiscoverOptions`](../interfaces/DiscoverOptions.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[getAvailableOptions](DiscoveryAPI.md#getavailableoptions)

#### Defined in

lib/discovery/DiscoveryAPI.ts:131

___

### sanitizeDiscoverParams

▸ `Static` **sanitizeDiscoverParams**(`params`): `Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DiscoverParams`](../interfaces/DiscoverParams.md) |

#### Returns

`Promise`<[`DiscoverParams`](../interfaces/DiscoverParams.md)\>

#### Overrides

[DiscoveryAPI](DiscoveryAPI.md).[sanitizeDiscoverParams](DiscoveryAPI.md#sanitizediscoverparams)

#### Defined in

lib/discovery/DiscoveryAPI.ts:135
