[bandcamp-fetch](../README.md) / LimiterAutocompleteAPI

# Class: LimiterAutocompleteAPI

## Hierarchy

- [`AutocompleteAPI`](AutocompleteAPI.md)

  ↳ **`LimiterAutocompleteAPI`**

## Table of contents

### Constructors

- [constructor](LimiterAutocompleteAPI.md#constructor)

### Methods

- [getSuggestions](LimiterAutocompleteAPI.md#getsuggestions)

## Constructors

### constructor

• **new LimiterAutocompleteAPI**()

#### Inherited from

[AutocompleteAPI](AutocompleteAPI.md).[constructor](AutocompleteAPI.md#constructor)

## Methods

### getSuggestions

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Location`](../enums/AutocompleteItemType.md#location)  } |

#### Returns

`Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:61](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/autocomplete/AutocompleteAPI.ts#L61)

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Tag`](../enums/AutocompleteItemType.md#tag)  } |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:62](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/autocomplete/AutocompleteAPI.ts#L62)

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:63](https://github.com/patrickkfkan/bandcamp-fetch/blob/eace49c/src/lib/autocomplete/AutocompleteAPI.ts#L63)
