[bandcamp-fetch](../README.md) / Limiter

# Class: Limiter

## Table of contents

### Constructors

- [constructor](Limiter.md#constructor)

### Methods

- [schedule](Limiter.md#schedule)
- [updateSettings](Limiter.md#updatesettings)

## Constructors

### constructor

• **new Limiter**()

#### Defined in

[lib/utils/Limiter.ts:7](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Limiter.ts#L7)

## Methods

### schedule

▸ **schedule**<`R`\>(`fn`): `Promise`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `PromiseLike`<`R`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[lib/utils/Limiter.ts:18](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Limiter.ts#L18)

___

### updateSettings

▸ **updateSettings**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ConstructorOptions` |

#### Returns

`void`

#### Defined in

[lib/utils/Limiter.ts:14](https://github.com/patrickkfkan/bandcamp-fetch/blob/7bb1899/src/lib/utils/Limiter.ts#L14)
