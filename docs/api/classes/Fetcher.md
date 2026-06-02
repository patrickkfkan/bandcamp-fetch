[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / Fetcher

# Class: Fetcher

Defined in: [lib/utils/Fetcher.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L19)

## Constructors

### Constructor

> **new Fetcher**(`params`): `Fetcher`

Defined in: [lib/utils/Fetcher.ts:24](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L24)

#### Parameters

##### params

[`FetcherParams`](../interfaces/FetcherParams.md)

#### Returns

`Fetcher`

## Accessors

### cookie

#### Get Signature

> **get** **cookie**(): `string` \| `null` \| `undefined`

Defined in: [lib/utils/Fetcher.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L38)

##### Returns

`string` \| `null` \| `undefined`

## Methods

### fetch()

#### Call Signature

> **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/utils/Fetcher.ts:42](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L42)

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

#### Call Signature

> **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/utils/Fetcher.ts:49](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L49)

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

#### Call Signature

> **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/utils/Fetcher.ts:56](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L56)

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

***

### setCookie()

> **setCookie**(`value?`): `void`

Defined in: [lib/utils/Fetcher.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/utils/Fetcher.ts#L30)

#### Parameters

##### value?

`string` \| `null`

#### Returns

`void`
