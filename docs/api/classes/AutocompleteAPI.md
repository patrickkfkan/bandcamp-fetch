[bandcamp-fetch](../README.md) / AutocompleteAPI

# Class: AutocompleteAPI

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AutocompleteAPI`**

  ↳↳ [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

## Table of contents

### Constructors

- [constructor](AutocompleteAPI.md#constructor)

### Accessors

- [cache](AutocompleteAPI.md#cache)

### Methods

- [fetch](AutocompleteAPI.md#fetch)
- [getSuggestions](AutocompleteAPI.md#getsuggestions)

## Constructors

### constructor

• **new AutocompleteAPI**(`params`)

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

### getSuggestions

▸ **getSuggestions**(`params`): `Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Location`](../enums/AutocompleteItemType.md#location)  } |

#### Returns

`Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L21)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Tag`](../enums/AutocompleteItemType.md#tag)  } |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L22)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L23)
