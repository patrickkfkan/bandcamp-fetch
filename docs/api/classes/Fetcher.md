[bandcamp-fetch](../README.md) / Fetcher

# Class: Fetcher

## Table of contents

### Constructors

- [constructor](Fetcher.md#constructor)

### Accessors

- [cookie](Fetcher.md#cookie)

### Methods

- [fetch](Fetcher.md#fetch)
- [setCookie](Fetcher.md#setcookie)

## Constructors

### constructor

• **new Fetcher**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FetcherParams`](../interfaces/FetcherParams.md) |

#### Defined in

[lib/utils/Fetcher.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L21)

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[lib/utils/Fetcher.ts:34](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L34)

## Methods

### fetch

▸ **fetch**(`url`, `jsonResponse`, `method`, `payload?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``false`` |
| `method` | [`HEAD`](../enums/FetchMethod.md#head) |
| `payload?` | `undefined` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[lib/utils/Fetcher.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L38)

▸ **fetch**(`url`, `jsonResponse`, `method?`, `payload?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse` | ``true`` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/utils/Fetcher.ts:39](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L39)

▸ **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `jsonResponse?` | `boolean` |
| `method?` | [`FetchMethod`](../enums/FetchMethod.md) |
| `payload?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib/utils/Fetcher.ts:40](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L40)

___

### setCookie

▸ **setCookie**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/utils/Fetcher.ts:26](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Fetcher.ts#L26)
