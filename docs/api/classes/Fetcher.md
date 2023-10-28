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

[lib/utils/Fetcher.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/utils/Fetcher.ts#L20)

## Accessors

### cookie

• `get` **cookie**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[lib/utils/Fetcher.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/utils/Fetcher.ts#L33)

## Methods

### fetch

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

[lib/utils/Fetcher.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/utils/Fetcher.ts#L37)

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

[lib/utils/Fetcher.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/utils/Fetcher.ts#L38)

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

[lib/utils/Fetcher.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/utils/Fetcher.ts#L25)
