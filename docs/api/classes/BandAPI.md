[**bandcamp-fetch**](../README.md) • **Docs**

***

[bandcamp-fetch](../README.md) / BandAPI

# Class: BandAPI

## Extends

- [`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md)

## Extended by

- [`LimiterBandAPI`](LimiterBandAPI.md)

## Constructors

### new BandAPI()

> **new BandAPI**(`params`): [`BandAPI`](BandAPI.md)

#### Parameters

• **params**: [`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md)

#### Returns

[`BandAPI`](BandAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`constructor`](BaseAPIWithImageSupport.md#constructors)

#### Defined in

[lib/common/BaseAPIWithImageSupport.ts:12](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPIWithImageSupport.ts#L12)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`cache`](BaseAPIWithImageSupport.md#cache)

#### Defined in

[lib/common/BaseAPI.ts:27](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L27)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`imageAPI`](BaseAPIWithImageSupport.md#imageapi)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

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

[`BaseAPIWithImageSupport`](BaseAPIWithImageSupport.md).[`fetch`](BaseAPIWithImageSupport.md#fetch)

##### Defined in

[lib/common/BaseAPI.ts:22](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/common/BaseAPI.ts#L22)

***

### getDiscography()

> **getDiscography**(`params`): `Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Parameters

• **params**: [`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md)

#### Returns

`Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Defined in

[lib/band/BandAPI.ts:32](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L32)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Parameters

• **params**: [`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Defined in

[lib/band/BandAPI.ts:43](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L43)

***

### getLabelArtists()

> **getLabelArtists**(`params`): `Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

#### Parameters

• **params**: [`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md)

#### Returns

`Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

#### Defined in

[lib/band/BandAPI.ts:86](https://github.com/patrickkfkan/bandcamp-fetch/blob/6544f9f2618d556b50a25abbc720d0291101d631/src/lib/band/BandAPI.ts#L86)
