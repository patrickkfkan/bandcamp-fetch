[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / DiscoverResult

# Interface: DiscoverResult

Defined in: [lib/types/Discovery.ts:61](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Discovery.ts#L61)

Results returned by [DiscoveryAPI.discover](../classes/DiscoveryAPI.md#discover).

## Properties

### continuation?

> `optional` **continuation?**: [`DiscoverResultContinuation`](DiscoverResultContinuation.md)

Defined in: [lib/types/Discovery.ts:75](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Discovery.ts#L75)

***

### items

> **items**: ([`Album`](Album.md) \| [`Shirt`](Shirt.md))[]

Defined in: [lib/types/Discovery.ts:65](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Discovery.ts#L65)

List of discovered albums .

***

### params

> **params**: [`SanitizedDiscoverParams`](../type-aliases/SanitizedDiscoverParams.md)

Defined in: [lib/types/Discovery.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Discovery.ts#L73)

Sanitized params used in the discovery request.

***

### total

> **total**: `number`

Defined in: [lib/types/Discovery.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/types/Discovery.ts#L69)

Total number of albums discovered.
