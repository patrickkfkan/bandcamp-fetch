[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterAutocompleteAPI

# Class: LimiterAutocompleteAPI

## Extends

- [`AutocompleteAPI`](AutocompleteAPI.md)

## Constructors

### new LimiterAutocompleteAPI()

> **new LimiterAutocompleteAPI**(`params`): [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

#### Parameters

• **params**: [`BaseAPIParams`](../interfaces/BaseAPIParams.md) & `object`

#### Returns

[`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

#### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`constructor`](AutocompleteAPI.md#constructors)

#### Defined in

[lib/autocomplete/AutocompleteAPI.ts:66](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/autocomplete/AutocompleteAPI.ts#L66)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`cache`](AutocompleteAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

## Methods

### fetch()

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload`?): `Promise`\<`object`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `false`

• **method**: [`HEAD`](../enumerations/FetchMethod.md#head)

• **payload?**: `undefined`

##### Returns

`Promise`\<`object`\>

###### ok

> **ok**: `boolean`

###### status

> **status**: `number`

##### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:20](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L20)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`, `method`?, `payload`?): `Promise`\<`any`\>

##### Parameters

• **url**: `string`

• **jsonResponse**: `true`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:21](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L21)

#### fetch(url, jsonResponse, method, payload)

> `protected` **fetch**(`url`, `jsonResponse`?, `method`?, `payload`?): `Promise`\<`string`\>

##### Parameters

• **url**: `string`

• **jsonResponse?**: `boolean`

• **method?**: [`FetchMethod`](../enumerations/FetchMethod.md)

• **payload?**: `Record`\<`string`, `any`\>

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getSuggestions()

#### getSuggestions(params)

> **getSuggestions**(`params`): `Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Parameters

• **params**: [`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)

##### Defined in

[lib/autocomplete/AutocompleteAPI.ts:71](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/autocomplete/AutocompleteAPI.ts#L71)

#### getSuggestions(params)

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

##### Parameters

• **params**: [`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)

##### Defined in

[lib/autocomplete/AutocompleteAPI.ts:72](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/autocomplete/AutocompleteAPI.ts#L72)

#### getSuggestions(params)

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Parameters

• **params**: [`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md)

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)

##### Defined in

[lib/autocomplete/AutocompleteAPI.ts:73](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/autocomplete/AutocompleteAPI.ts#L73)
