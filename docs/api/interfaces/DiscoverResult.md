[bandcamp-fetch](../README.md) / DiscoverResult

# Interface: DiscoverResult

Results returned by [discover](../classes/DiscoveryAPI.md#discover).

## Table of contents

### Properties

- [items](DiscoverResult.md#items)
- [params](DiscoverResult.md#params)
- [total](DiscoverResult.md#total)

## Properties

### items

• **items**: [`Album`](Album.md)[]

List of discovered albums.

#### Defined in

[lib/types/Discovery.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/types/Discovery.ts#L51)

___

### params

• **params**: [`DiscoverParams`](DiscoverParams.md)

Sanitized params used in the discovery request.

#### Defined in

[lib/types/Discovery.ts:59](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/types/Discovery.ts#L59)

___

### total

• **total**: `number`

Total number of albums discovered.

#### Defined in

[lib/types/Discovery.ts:55](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/types/Discovery.ts#L55)
