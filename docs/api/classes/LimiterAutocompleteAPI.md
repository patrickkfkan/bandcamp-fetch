[bandcamp-fetch](../README.md) / LimiterAutocompleteAPI

# Class: LimiterAutocompleteAPI

## Hierarchy

- [`AutocompleteAPI`](AutocompleteAPI.md)

  ↳ **`LimiterAutocompleteAPI`**

## Table of contents

### Constructors

- [constructor](LimiterAutocompleteAPI.md#constructor)

### Accessors

- [cache](LimiterAutocompleteAPI.md#cache)

### Methods

- [fetch](LimiterAutocompleteAPI.md#fetch)
- [getSuggestions](LimiterAutocompleteAPI.md#getsuggestions)

## Constructors

### constructor

• **new LimiterAutocompleteAPI**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & { `limiter`: [`Limiter`](Limiter.md)  } |

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[constructor](AutocompleteAPI.md#constructor)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L64)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

AutocompleteAPI.cache

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

[AutocompleteAPI](AutocompleteAPI.md).[fetch](AutocompleteAPI.md#fetch)

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

[AutocompleteAPI](AutocompleteAPI.md).[fetch](AutocompleteAPI.md#fetch)

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

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L69)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Tag`](../enums/AutocompleteItemType.md#tag)  } |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:70](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L70)

▸ **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:71](https://github.com/patrickkfkan/bandcamp-fetch/blob/19ec315/src/lib/autocomplete/AutocompleteAPI.ts#L71)
