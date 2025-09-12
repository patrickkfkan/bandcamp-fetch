[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / LimiterBandAPI

# Class: LimiterBandAPI

## Extends

- [`BandAPI`](BandAPI.md)

## Constructors

### new LimiterBandAPI()

> **new LimiterBandAPI**(`params`): [`LimiterBandAPI`](LimiterBandAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

[`LimiterBandAPI`](LimiterBandAPI.md)

#### Overrides

[`BandAPI`](BandAPI.md).[`constructor`](BandAPI.md#constructors)

#### Defined in

[lib/band/BandAPI.ts:137](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L137)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BandAPI`](BandAPI.md).[`cache`](BandAPI.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BandAPI`](BandAPI.md).[`imageAPI`](BandAPI.md#imageapi)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L17)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getDiscography()

> **getDiscography**(`params`): `Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

• **params**: [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md)

#### Returns

`Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getDiscography`](BandAPI.md#getdiscography)

#### Defined in

[lib/band/BandAPI.ts:142](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L142)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

• **params**: [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getInfo`](BandAPI.md#getinfo)

#### Defined in

[lib/band/BandAPI.ts:146](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L146)

***

### getLabelArtists()

> **getLabelArtists**(`params`): `Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

#### Parameters

• **params**: [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md)

#### Returns

`Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getLabelArtists`](BandAPI.md#getlabelartists)

#### Defined in

[lib/band/BandAPI.ts:150](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L150)
