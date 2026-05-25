[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / Limiter

# Class: Limiter

Defined in: [lib/utils/Limiter.ts:3](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Limiter.ts#L3)

## Constructors

### Constructor

> **new Limiter**(): `Limiter`

Defined in: [lib/utils/Limiter.ts:6](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Limiter.ts#L6)

#### Returns

`Limiter`

## Methods

### schedule()

> **schedule**\<`R`\>(`fn`): `Promise`\<`R`\>

Defined in: [lib/utils/Limiter.ts:17](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Limiter.ts#L17)

#### Type Parameters

##### R

`R`

#### Parameters

##### fn

() => `PromiseLike`\<`R`\>

#### Returns

`Promise`\<`R`\>

***

### updateSettings()

> **updateSettings**(`options?`): `void`

Defined in: [lib/utils/Limiter.ts:13](https://github.com/patrickkfkan/bandcamp-fetch/blob/e24cefd42a0d0101ed4482ab85947ab34689c8d5/src/lib/utils/Limiter.ts#L13)

#### Parameters

##### options?

`ConstructorOptions`

#### Returns

`void`
