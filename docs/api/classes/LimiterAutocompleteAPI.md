[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterAutocompleteAPI

# Class: LimiterAutocompleteAPI

Defined in: [lib/autocomplete/AutocompleteAPI.ts:94](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/autocomplete/AutocompleteAPI.ts#L94)

## Extends

- [`AutocompleteAPI`](AutocompleteAPI.md)

## Constructors

### Constructor

> **new LimiterAutocompleteAPI**(`params`): `LimiterAutocompleteAPI`

Defined in: [lib/autocomplete/AutocompleteAPI.ts:97](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/autocomplete/AutocompleteAPI.ts#L97)

#### Parameters

##### params

[`BaseAPIParams`](../interfaces/BaseAPIParams.md) & `object`

#### Returns

`LimiterAutocompleteAPI`

#### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`constructor`](AutocompleteAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`cache`](AutocompleteAPI.md#cache)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`AutocompleteAPI`](AutocompleteAPI.md).[`logger`](AutocompleteAPI.md#logger)

## Methods

### fetch()

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method`, `payload?`, `requireCookie?`): `Promise`\<\{ `ok`: `boolean`; `status`: `number`; \}\>

Defined in: [lib/common/BaseAPI.ts:23](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L23)

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

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`any`\>

Defined in: [lib/common/BaseAPI.ts:30](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L30)

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

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

#### Call Signature

> `protected` **fetch**(`url`, `jsonResponse?`, `method?`, `payload?`, `requireCookie?`): `Promise`\<`string`\>

Defined in: [lib/common/BaseAPI.ts:37](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L37)

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

[`AutocompleteAPI`](AutocompleteAPI.md).[`fetch`](AutocompleteAPI.md#fetch)

***

### getSuggestions()

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:102](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/autocomplete/AutocompleteAPI.ts#L102)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:107](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/autocomplete/AutocompleteAPI.ts#L107)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md) & `object`

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)

#### Call Signature

> **getSuggestions**(`params`): `Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

Defined in: [lib/autocomplete/AutocompleteAPI.ts:112](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/autocomplete/AutocompleteAPI.ts#L112)

##### Parameters

###### params

[`AutocompleteAPIGetSuggestionsParams`](../type-aliases/AutocompleteAPIGetSuggestionsParams.md)

##### Returns

`Promise`\<[`AutoCompleteTag`](../interfaces/AutoCompleteTag.md)[] \| [`AutocompleteLocation`](../interfaces/AutocompleteLocation.md)[]\>

##### Overrides

[`AutocompleteAPI`](AutocompleteAPI.md).[`getSuggestions`](AutocompleteAPI.md#getsuggestions)
