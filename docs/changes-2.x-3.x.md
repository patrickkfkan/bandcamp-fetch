## Breaking changes from v2.x to v3.x

### Tag API

#### Removed `list()` method

Use Discovery API's `getRecommendedTagsAndLocations()` instead.

```
// v2.x

import bcfetch from 'bandcamp-fetch';

const { tags, locations } = await bcfetch.tag.list();

// Result
tags: [
  {
    "type": "tag",
    "name": "electronic",
    "value": "electronic"
  },
  ...
]

locations: [
  {
    "type": "tag",
    "name": "United Kingdom",
    "value": "united-kingdom"
  },
  ...
]
```

```
// v3.x

import bcfetch from 'bandcamp-fetch';

const { tags, locations } = await bcfetch.discovery.getRecommendedTagsAndLocations();

// Result
tags: [
  {
    "type": "tag",
    "name": "electronic",
    "value": "electronic"
  },
  ...
]

locations: [
  {
    "type": "location",
    "name": "Los Angeles",
    "value": 5368361  // Note `value` is a number, not a string as in v2.x
  },
  ...
]
```

### Show API

#### Changed type definition of `Show`

| Property | v2.x | v3.x | Reason |
|----------|------|------|--------|
| `streamUrl` | `object: { mp3-128: ..., opus-lo: ...}` | `string` | `opus-lo` encoding no longer offered by Bandcamp. |
| `subtitle` | `string` | `string` \| `undefined` | `getShow()` no longer returns `subtitle`. |

#### Reduced `getShow()` data

Compared to v2.x, `getShow()` now returns fewer details due to Bandcamp changes. Given the following:

```
import bcfetch from 'bandcamp-fetch';

const show = await bcfetch.show.getShow(...);
```

The following will always return `undefined`:

```
show.subtitle
show.tracks[number].artist.location
show.tracks[number].artist.imageUrl
show.tracks[number].album.id
```
