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

[lib/types/Discovery.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L17)

___

### formats

• **formats**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

[lib/types/Discovery.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L16)

___

### genres

• **genres**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

[lib/types/Discovery.ts:11](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L11)

___

### locations

• **locations**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

[lib/types/Discovery.ts:15](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L15)

___

### sortBys

• **sortBys**: [`NameValuePair`](NameValuePair.md)<`string`\>[]

#### Defined in

[lib/types/Discovery.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L12)

___

### subgenres

• **subgenres**: `Record`<`string`, [`NameValuePair`](NameValuePair.md)<`string`\>[]\>

#### Defined in

[lib/types/Discovery.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L14)

___

### times

• **times**: [`NameValuePair`](NameValuePair.md)<`number`\> & { `title`: `string`  }[]

#### Defined in

[lib/types/Discovery.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Discovery.ts#L13)
