[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / LimiterBandAPI

# Class: LimiterBandAPI

Defined in: [lib/band/BandAPI.ts:146](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/band/BandAPI.ts#L146)

## Extends

- [`BandAPI`](BandAPI.md)

## Constructors

### Constructor

> **new LimiterBandAPI**(`params`): `LimiterBandAPI`

Defined in: [lib/band/BandAPI.ts:149](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/band/BandAPI.ts#L149)

#### Parameters

##### params

[`BaseAPIWithImageSupportParams`](../interfaces/BaseAPIWithImageSupportParams.md) & `object`

#### Returns

`LimiterBandAPI`

#### Overrides

[`BandAPI`](BandAPI.md).[`constructor`](BandAPI.md#constructor)

## Accessors

### cache

#### Get Signature

> **get** `protected` **cache**(): [`Cache`](Cache.md)

Defined in: [lib/common/BaseAPI.ts:54](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L54)

##### Returns

[`Cache`](Cache.md)

#### Inherited from

[`BandAPI`](BandAPI.md).[`cache`](BandAPI.md#cache)

***

### imageAPI

#### Get Signature

> **get** **imageAPI**(): [`ImageAPI`](ImageAPI.md)

Defined in: [lib/common/BaseAPIWithImageSupport.ts:16](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPIWithImageSupport.ts#L16)

##### Returns

[`ImageAPI`](ImageAPI.md)

#### Inherited from

[`BandAPI`](BandAPI.md).[`imageAPI`](BandAPI.md#imageapi)

***

### logger

#### Get Signature

> **get** `protected` **logger**(): [`Logger`](../interfaces/Logger.md)

Defined in: [lib/common/BaseAPI.ts:58](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/common/BaseAPI.ts#L58)

##### Returns

[`Logger`](../interfaces/Logger.md)

#### Inherited from

[`BandAPI`](BandAPI.md).[`logger`](BandAPI.md#logger)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

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

[`BandAPI`](BandAPI.md).[`fetch`](BandAPI.md#fetch)

***

### getDiscography()

> **getDiscography**(`params`): `Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

Defined in: [lib/band/BandAPI.ts:154](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/band/BandAPI.ts#L154)

#### Parameters

##### params

[`BandAPIGetDiscographyParams`](../interfaces/BandAPIGetDiscographyParams.md)

#### Returns

`Promise`\<([`Track`](../interfaces/Track.md) \| [`Album`](../interfaces/Album.md))[]\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getDiscography`](BandAPI.md#getdiscography)

***

### getInfo()

> **getInfo**(`params`): `Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

Defined in: [lib/band/BandAPI.ts:160](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/band/BandAPI.ts#L160)

#### Parameters

##### params

[`BandAPIGetInfoParams`](../interfaces/BandAPIGetInfoParams.md)

#### Returns

`Promise`\<[`Label`](../interfaces/Label.md) \| [`Artist`](../interfaces/Artist.md)\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getInfo`](BandAPI.md#getinfo)

***

### getLabelArtists()

> **getLabelArtists**(`params`): `Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

Defined in: [lib/band/BandAPI.ts:164](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/band/BandAPI.ts#L164)

#### Parameters

##### params

[`BandAPIGetLabelArtistsParams`](../interfaces/BandAPIGetLabelArtistsParams.md)

#### Returns

`Promise`\<[`LabelArtist`](../type-aliases/LabelArtist.md)[]\>

#### Overrides

[`BandAPI`](BandAPI.md).[`getLabelArtists`](BandAPI.md#getlabelartists)
