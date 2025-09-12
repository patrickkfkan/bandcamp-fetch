[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / Fetcher

# Class: Fetcher

## Constructors

### new Fetcher()

> **new Fetcher**(`params`): [`Fetcher`](Fetcher.md)

#### Parameters

• **params**: [`FetcherParams`](../interfaces/FetcherParams.md)

#### Returns

[`Fetcher`](Fetcher.md)

#### Defined in

[lib/utils/Fetcher.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L21)

## Accessors

### cookie

#### Get Signature

> **get** **cookie**(): `undefined` \| `null` \| `string`

##### Returns

`undefined` \| `null` \| `string`

#### Defined in

[lib/utils/Fetcher.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L34)

## Methods

### fetch()

#### fetch(url, jsonResponse, method, payload)

> **fetch**(`url`, `jsonResponse`, `method`, `payload`?): `Promise`\<`object`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `false`

• **method**: [`HEAD`](../enumerations/FetchMethod.md#head)

• **payload?**: `undefined`

##### Returns

`Promise`\<`object`\>

###### ok

> **ok**: `boolean`

###### status

> **status**: `number`

##### Defined in

[lib/utils/Fetcher.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L38)

#### fetch(url, jsonResponse, method, payload)

> **fetch**(`url`, `jsonResponse`, `method`?, `payload`?): `Promise`\<`any`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `true`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`any`\>

##### Defined in

[lib/utils/Fetcher.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L39)

#### fetch(url, jsonResponse, method, payload)

> **fetch**(`url`, `jsonResponse`?, `method`?, `payload`?): `Promise`\<`string`\>

##### Parameters

• **url**: `string`

• **jsonResponse?**: `boolean`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`string`\>

##### Defined in

[lib/utils/Fetcher.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L40)

***

### setCookie()

> **setCookie**(`value`?): `void`

#### Parameters

• **value?**: `null` \| `string`

#### Returns

`void`

#### Defined in

[lib/utils/Fetcher.ts:26](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/utils/Fetcher.ts#L26)
