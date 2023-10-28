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

[lib/common/BaseAPI.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L14)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

BaseAPI.cache

#### Defined in

[lib/common/BaseAPI.ts:25](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L25)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[fetch](BaseAPI.md#fetch)

#### Defined in

[lib/common/BaseAPI.ts:19](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L19)

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

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/common/BaseAPI.ts#L20)

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

[lib/autocomplete/AutocompleteAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L21)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Tag`](../enums/AutocompleteItemType.md#tag)  } |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L22)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L23)
