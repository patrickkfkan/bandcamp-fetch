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

[lib/autocomplete/AutocompleteAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L64)

## Accessors

### cache

• `Protected` `get` **cache**(): [`Cache`](Cache.md)

#### Returns

[`Cache`](Cache.md)

#### Inherited from

AutocompleteAPI.cache

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

[AutocompleteAPI](AutocompleteAPI.md).[fetch](AutocompleteAPI.md#fetch)

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

[AutocompleteAPI](AutocompleteAPI.md).[fetch](AutocompleteAPI.md#fetch)

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

[AutocompleteAPI](AutocompleteAPI.md).[fetch](AutocompleteAPI.md#fetch)

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

#### Overrides

[AutocompleteAPI](AutocompleteAPI.md).[getSuggestions](AutocompleteAPI.md#getsuggestions)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:69](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L69)

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

[lib/autocomplete/AutocompleteAPI.ts:70](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L70)

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

[lib/autocomplete/AutocompleteAPI.ts:71](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/autocomplete/AutocompleteAPI.ts#L71)
