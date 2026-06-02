[**bandcamp-fetch**](../README.md)

***

[bandcamp-fetch](../README.md) / PlaylistAPIGetAdditionalTracksParams

# Type Alias: PlaylistAPIGetAdditionalTracksParams

> **PlaylistAPIGetAdditionalTracksParams** = \{ `fromId?`: `never`; `start`: `number`; \} \| \{ `fromId`: `number`; `start?`: `never`; \} \| \{ `fromId?`: `never`; `start?`: `never`; \} & `object`

Defined in: [lib/playlist/PlaylistAPI.ts:35](https://github.com/patrickkfkan/bandcamp-fetch/blob/10e019814a1d9594303b4c46666928caab282185/src/lib/playlist/PlaylistAPI.ts#L35)

## Type Declaration

### artistImageFormat?

> `optional` **artistImageFormat?**: `string` \| `number` \| [`ImageFormat`](../interfaces/ImageFormat.md)

### count?

> `optional` **count?**: `number`

### playlist

> **playlist**: [`Playlist`](../interfaces/Playlist.md)

### trackImageFormat?

> `optional` **trackImageFormat?**: `string` \| `number` \| [`ImageFormat`](../interfaces/ImageFormat.md)
