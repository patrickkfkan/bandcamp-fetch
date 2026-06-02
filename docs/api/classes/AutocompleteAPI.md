[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / AutocompleteAPI

# Class: AutocompleteAPI

Defined in: [lib/autocomplete/AutocompleteAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/autocomplete/AutocompleteAPI.ts#L27)

## Extends

- [`BaseAPI`](BaseAPI.md)

## Extended by

- [`LimiterAutocompleteAPI`](LimiterAutocompleteAPI.md)

## Constructors

### Constructor

> **new AutocompleteAPI**(`params`): `AutocompleteAPI`

Defined in: [lib/common/BaseAPI.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L17)

#### Parameters

##### params

[`BaseAPIParams`](../interfaces/BaseAPIParams.md)

#### Returns

`AutocompleteAPI`

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`constructor`](BaseAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:60](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L60)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`cache`](BaseAPI.md#cache)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:64](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L64)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`BaseAPI`](BaseAPI.md).[`logger`](BaseAPI.md#logger)

## Methods

### fetch()

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/common/BaseAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L23)

##### Parameters

###### url

`string`

###### jsonResponse

`false`

###### method

[`HEAD`](../enumerations/FetchMethod.md#head)

###### payload?

`undefined`

###### requireCookie?

`boolean`

##### Returns

`Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/common/BaseAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L30)

##### Parameters

###### url

`string`

###### jsonResponse

`true`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/common/BaseAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/common/BaseAPI.ts#L37)

##### Parameters

###### url

`string`

###### jsonResponse?

`boolean`

###### method?

[`FetchMethod`](../enumerations/FetchMethod.md)

###### payload?

`Record`\<`string`, `any`\>

###### requireCookie?

`boolean`

##### Returns

`Promise`\<`string`\>

##### Inherited from

[`BaseAPI`](BaseAPI.md).[`fetch`](BaseAPI.md#fetch)

***

### getSuggestions()

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:28](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/autocomplete/AutocompleteAPI.ts#L28)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:33](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/autocomplete/AutocompleteAPI.ts#L33)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:38](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/autocomplete/AutocompleteAPI.ts#L38)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md)

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>
