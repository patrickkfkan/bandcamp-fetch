[bandcamp-fetch](../README.md) / AutocompleteAPI

# Class: AutocompleteAPI

## Hierarchy

- **`AutocompleteAPI`**

  ↳ [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

## Table of contents

### Constructors

- [constructor](AutocompleteAPI.md#constructor)

### Methods

- [getSuggestions](AutocompleteAPI.md#getsuggestions)

## Constructors

### constructor

• **new AutocompleteAPI**()

## Methods

### getSuggestions

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Location`](../enums/AutocompleteItemType.md#location)  } |

#### Returns

`Promise`<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Defined in

lib/autocomplete/AutocompleteAPI.ts:20

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) & { `itemType`: [`Tag`](../enums/AutocompleteItemType.md#tag)  } |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Defined in

lib/autocomplete/AutocompleteAPI.ts:21

▸ `Static` **getSuggestions**(`params`): `Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AutocompleteAPIGetSuggestionsParams`](../interfaces/AutocompleteAPIGetSuggestionsParams.md) |

#### Returns

`Promise`<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Defined in

lib/autocomplete/AutocompleteAPI.ts:22
