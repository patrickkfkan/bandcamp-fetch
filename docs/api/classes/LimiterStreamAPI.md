[bandcamp-fetch](../README.md) / LimiterStreamAPI

# Class: LimiterStreamAPI

## Hierarchy

- [`StreamAPI`](StreamAPI.md)

  ↳ **`LimiterStreamAPI`**

## Table of contents

### Constructors

- [constructor](LimiterStreamAPI.md#constructor)

### Accessors

- [cache](LimiterStreamAPI.md#cache)

### Methods

- [fetch](LimiterStreamAPI.md#fetch)
- [refresh](LimiterStreamAPI.md#refresh)
- [test](LimiterStreamAPI.md#test)

## Constructors

### constructor

• **new LimiterStreamAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[StreamAPI](StreamAPI.md).[constructor](StreamAPI.md#constructor)

#### Defined in

[lib/stream/StreamAPI.ts:36](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/stream/StreamAPI.ts#L36)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

StreamAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L27)

## Methods

### fetch

▸ `Protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``false`` |
| `method` | [`HEAD`](../enums/FetchMethod.md#head) |
| `payload?` | `undefined` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[StreamAPI](StreamAPI.md).[fetch](StreamAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L20)

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

[StreamAPI](StreamAPI.md).[fetch](StreamAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L21)

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

[StreamAPI](StreamAPI.md).[fetch](StreamAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L22)

___

### refresh

▸ **refresh**(`url`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Overrides

[StreamAPI](StreamAPI.md).[refresh](StreamAPI.md#refresh)

#### Defined in

[lib/stream/StreamAPI.ts:41](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/stream/StreamAPI.ts#L41)

___

### test

▸ **test**(`url`): `Promise`<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Inherited from

[StreamAPI](StreamAPI.md).[test](StreamAPI.md#test)

#### Defined in

[lib/stream/StreamAPI.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/stream/StreamAPI.ts#L13)
