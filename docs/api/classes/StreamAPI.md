[bandcamp-fetch](../README.md) / StreamAPI

# Class: StreamAPI

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`StreamAPI`**

  ↳↳ [`LimiterStreamAPI`](LimiterStreamAPI.md)

## Table of contents

### Constructors

- [constructor](StreamAPI.md#constructor)

### Accessors

- [cache](StreamAPI.md#cache)

### Methods

- [fetch](StreamAPI.md#fetch)
- [refresh](StreamAPI.md#refresh)
- [test](StreamAPI.md#test)

## Constructors

### constructor

• **new StreamAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[lib/common/BaseAPI.ts:15](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/common/BaseAPI.ts#L15)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPI.cache

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

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

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

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

#### Defined in

[lib/stream/StreamAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/stream/StreamAPI.ts#L21)

___

### test

▸ **test**(`url`): `Promise`<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<[`StreamTestResult`](../interfaces/StreamTestResult.md)\>

#### Defined in

[lib/stream/StreamAPI.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/stream/StreamAPI.ts#L13)
