# Changelog

v3.2.1
- fix: adapt Playlist and Discovery APIs to site changes.

v3.2.0
- fix: fetch cookie automatically if not provided for search requests. This requires at least the `puppeteer` package to be installed.
- fix: adapt Show API to site changes.
- feat: add logging.
- feat: add Playlist API.

v3.1.0
- Fix parsers following Bandcamp site changes.

3.0.0 ([breaking changes](docs/changes-2.x-3.x.md)!)
- Revise API to reflect Bandcamp changes

2.0.0 ([breaking changes](docs/changes-1.x-2.x.md)!)
- Revise API to reflect Bandcamp changes
- Add `lyrics` property to `Track`
- Add `id` property to `Album` and `Track`
- Add `slug` property to categories returned by `DiscoveryAPI.getAvailableOptions()`
- Parse missing discog items ([#8](https://github.com/patrickkfkan/bandcamp-fetch/issues/8))

1.2.1
- Fix `duration` not returned in result of `TrackAPI::getInfo()` ([#7](https://github.com/patrickkfkan/bandcamp-fetch/issues/7))

1.2.0
- Add Stream API for testing and refreshing stream URLs

1.1.1
- Fix exports

1.1.0
- Add support for user sessions through cookies. This means you can access your private collection and high-quality MP3 streams of purchased media.
- Add ability to create multiple `BandcampFetch` instances

1.0.2
- Improve parsing of album track info

1.0.1
- Fix limiter throwing private access errors

1.0.0 (breaking changes!)
- Move to TypeScript
- Package as ESM + CJS hybrid module
- Restructure API
- Remove `safe-eval` dependency

0.3.1-b.1
- Add `getFanCollection()` function

0.3.0-b.1
- Add fan functions

0.2.2-b.1
- Add `itemType` option to search params

0.2.1-b.20211020b
- Fix URL sometimes null in result of `getArtistOrLabelInfo()`

0.2.1-b.20211020
- Improve data fetching in `getArtistOrLabelInfo()`

0.2.0-b.20211020
- Adapt to Bandcamp changes since last version
- Add `publisher` and `label` to data fetched by `getAlbumInfo()` and `getTrackInfo()`
- Add `labelId` to data fetched by `getArtistOrLabelInfo(labelUrl)`
- Add `labelId` option to `getArtistOrLabelInfo()` for artist URLs

...(no changelog for earlier versions due to laziness)