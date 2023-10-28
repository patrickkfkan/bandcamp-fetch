[bandcamp-fetch](../README.md) / BaseAPI

# Class: BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

  ↳ [`ImageAPI`](ImageAPI.md)

  ↳ [`AutocompleteAPI`](AutocompleteAPI.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Accessors

- [cache](BaseAPI.md#cache)

### Methods

- [fetch](BaseAPI.md#fetch)

## Constructors

### constructor

• **new BaseAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) |

#### Defined in

[lib/common/BaseAPI.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L14)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L25)

## Methods

### fetch

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

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L19)

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

#### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/common/BaseAPI.ts#L20)
