[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / DiscoverResult

# Interface: DiscoverResult

Results returned by [DiscoveryAPI.discover](../classes/DiscoveryAPI.md#discover).

## Properties

### continuation?

> `optional` **continuation**: [`DiscoverResultContinuation`](DiscoverResultContinuation.md)

#### Defined in

[lib/types/Discovery.ts:79](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Discovery.ts#L79)

***

### items

> **items**: ([`Album`](Album.md) \| [`Shirt`](Shirt.md))[]

List of discovered albums .

#### Defined in

[lib/types/Discovery.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Discovery.ts#L69)

***

### params

> **params**: [`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)

Sanitized params used in the discovery request.

#### Defined in

[lib/types/Discovery.ts:77](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Discovery.ts#L77)

***

### total

> **total**: `number`

Total number of albums discovered.

#### Defined in

[lib/types/Discovery.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/types/Discovery.ts#L73)
