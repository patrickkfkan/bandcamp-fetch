[bandcamp-fetch](../README.md) / DiscoverOptions

# Interface: DiscoverOptions

Options and list of values for each option that can be used to formulate [DiscoverParams](DiscoverParams.md).

**`See`**

DiscoveryAPI.getAvailableOptions

## Table of contents

### Properties

- [artistRecommendationTypes](DiscoverOptions.md#artistrecommendationtypes)
- [formats](DiscoverOptions.md#formats)
- [genres](DiscoverOptions.md#genres)
- [locations](DiscoverOptions.md#locations)
- [sortBys](DiscoverOptions.md#sortbys)
- [subgenres](DiscoverOptions.md#subgenres)
- [times](DiscoverOptions.md#times)

## Properties

### artistRecommendationTypes

• **artistRecommendationTypes**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

lib/types/Discovery.ts:17

___

### formats

• **formats**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

lib/types/Discovery.ts:16

___

### genres

• **genres**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

lib/types/Discovery.ts:11

___

### locations

• **locations**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

lib/types/Discovery.ts:15

___

### sortBys

• **sortBys**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

lib/types/Discovery.ts:12

___

### subgenres

• **subgenres**: `Record`<`string`, [`NameValuePair`](NameValuePair.md)<`string`\>[]\>

#### Defined in

lib/types/Discovery.ts:14

___

### times

• **times**: [`NameValuePair`](NameValuePair.md)<`number`\> & { `title`: `string`  }[]

#### Defined in

lib/types/Discovery.ts:13
