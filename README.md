# bandcamp-fetch

A JS library for scraping Bandcamp content; inspired by [bandcamp-scraper](https://github.com/masterT/bandcamp-scraper).

# Installation

```
npm i bandcamp-fetch --save
```

# Usage

```
const bcfetch = require('bandcamp-fetch');

bcfetch.discover(...).then( results => {
    ...
});
```

# API

Each function returns a Promise which resolves to the fetched data.

### `discover([params], [options])`

[**Example**](examples/discover.js) ([output](examples/discover_output.txt))

Fetches albums through Bandcamp Discover.

- `params` (optional) - object specifying params to be passed to Bandcamp Discover
    - genre
    - subgenre: only valid when genre is something other than 'all'
    - location
    - sortBy
    - artistRecommendationType: only valid when sortBy is 'rec' (artist recommended)
    - format
    - time
    - page

  All properties are optional. Possible values for each property can be obtained with the `getDiscoverOptions()` function.

  `params` passed to this function will be sanitized with `sanitizeDiscoverParams()`. A copy of the sanitized params can obtained through the `params` property of the returned result.

- `options` (optional) - object specifying options to be used when formulating results:
    - albumImageFormat: name, Id or object referring to an image format.
    - artistImageFormat

  All properties are optional. Image formats can be obtained with the `getImageFormats()` function.

### `getDiscoverOptions()`

[**Example**](examples/getDiscoverOptions.js) ([output](examples/getDiscoverOptions_output.txt))

Fetches Bandcamp Discover options that can be passed back to `discover()`.

### `sanitizeDiscoverParams(params)`

[**Example**](examples/sanitizeDiscoverParams.js) ([output](examples/sanitizeDiscoverParams_output.txt))

Sanitizes `params` by setting default values for omitted params and removing irrelevant ones.

You don't have to call this function on params passed to `discover()` - they will be sanitized automatically.

### `getImageFormats([filter])`

[**Example**](examples/getImageFormats.js) ([output](examples/getImageFormats_output.txt))

Fetches the list of image formats used in Bandcamp.

- `filter` (optional) - 'bio' (for artist / profile-type images)* or 'album'. If specified, narrows down the result to include only formats applicable to the specified value.

> The 'artist' filter value is deprecated. Use 'bio' instead.

### `getImageFormat(idOrName)`

Fetches the image format that matches Id or name. If none is found, the result will be `null`.

### `getArtistOrLabelInfo(artistOrLabelUrl, [options])`

[**Example**](examples/getArtistOrLabelInfo.js) ([output](examples/getArtistOrLabelInfo_output.txt))

Fetches information about an artist or label.

- `artistOrLabelUrl`
- `options` (optional)
    - imageFormat
    - labelId

This function tries to fetch the most complete set of data by scraping the following pages (returning immediately at any point the data becomes complete):

1. The page referred to by `artistOrLabelUrl`
2. The 'music' page of the artist or label (`artistOrLabelUrl/music`)
3. The first album or track in the artist's or label's discography

Sometimes, the label could not be fetched successfully for artists. If you know the `labelId` of the label that the artist belongs to, you can specify it in `options`. This will ensure that `label` will not be `null` in the artist info. If you pass a label URL to this function, you can find the `labelId` in the result.

### `getLabelArtists(labelUrl, [options])`

[**Example**](examples/getLabelArtists.js) ([output](examples/getLabelArtists_output.txt))

Fetches the list of artists belonging to a label.

- `labelUrl`
- `options` (optional)
    - imageFormat

### `getDiscography(artistOrLabelUrl, [options])`

[**Example**](examples/getDiscography.js) ([output](examples/getDiscography_output.txt))

Fetches the list of albums and standalone tracks belonging to an artist or label.

- `artistOrLabelUrl`
- `options` (optional)
    - imageFormat

### `getAlbumInfo(albumUrl, [options])`

[**Example**](examples/getAlbumInfo.js) ([output](examples/getAlbumInfo_output.txt))

Fetches information about an album.

- `albumUrl`
- `options` (optional)
    - albumImageFormat
    - artistImageFormat
    - includeRawData

Following Bandcamp's removal of description and image URL from artist metadata, `artist.description` and `artist.imageUrl` of the returned object are now set to to the same values as `publisher.description` and `publisher.imageUrl`, respectively. This is for backward comaptibility and the `artist.description` and `artist.imageUrl` properties might be removed in a future release. 
 
Furthermore, if the artist URL is not found in the scraped data, then `artist.url` will be set to the same value as `publisher.url`. This behavior might be subject to change in the future.

### `getTrackInfo(trackUrl, [options])`

[**Example**](examples/getTrackInfo.js) ([output](examples/getTrackInfo_output.txt))

Fetches information about a track.

- `trackUrl`
- `options` (optional)
    - albumImageFormat
    - artistImageFormat
    - includeRawData

Following Bandcamp's removal of description and image URL from artist metadata, `artist.description` and `artist.imageUrl` of the returned object are now set to to the same values as `publisher.description` and `publisher.imageUrl`, respectively. This is for backward comaptibility and the `artist.description` and `artist.imageUrl` properties might be removed in a future release. 

Furthermore, if the artist URL is not found in the scraped data, then `artist.url` will be set to the same value as `publisher.url`. This behavior might be subject to change in the future.

### `getAlbumHighlightsByTag(tagUrl, [options])`

[**Example**](examples/getAlbumHighlightsByTag.js) ([output](examples/getAlbumHighlightsByTag_output.txt))

Fetches album highlights for the tag referred to by `tagUrl`. The result is an array of album collections, with each collection corresponding to a highlight category such as 'new and notable' and 'all-time best selling'.

- `tagUrl`

  Tag URLs can be obtained with the `getTags()` function.

- `options` (optional)
    - imageFormat

### `getTags()`

[**Example**](examples/getTags.js) ([output](examples/getTags_output.txt))

Fetches Bandcamp tags. The result is an object with the following properties:
- `tags`: non-location tags
- `locations`: location tags

### `search(params, [options])`

[**Example**](examples/search.js) ([output](examples/search_output.txt))

Searches for `params.query`.

- `params`
    - query: search string
    - itemType (optional): 'artistsAndLabels', 'albums' or 'tracks'. Searches all item types if unknown value or omitted.
    - page (1 if omitted)
- `options` (optional)
    - albumImageFormat
    - artistImageFormat

### `getAllShows([options])`

[**Example**](examples/getAllShows.js) ([output](examples/getAllShows_output.txt))

Fetches all Bandcamp shows. Each entry in the returned array contains basic information about a show. To retrieve details of a show, pass the `url` property of the entry to `getShow()`.

- `options` (optional)
    - showImageFormat

### `getShow(showUrl, [options])`

[**Example**](examples/getShow.js) ([output](examples/getShow_output.txt))

Get show details for the given `showUrl`.

- `options` (optional)
    - albumImageFormat
    - artistImageFormat
    - showImageFormat

### `getArticleCategories()`

[**Example**](examples/getArticleCategories.js) ([output](examples/getArticleCategories_output.txt))

Fetches the list of Bandcamp Daily article categories. Categories are grouped into sections.

### `getArticleList([params], [options])`

[**Example**](examples/getArticleList.js) ([output](examples/getArticleList_output.txt))

Fetches the list of Bandcamp Daily articles under the category specified by `params.categoryUrl` (or all categories if not specified).

- `params` (optional)
    - categoryUrl
- `options` (optional)
    - imageFormat

### `getArticle(articleUrl, [options])`

[**Example**](examples/getArticle.js) ([output](examples/getArticle_output.txt))

Fetches the contents of the Bandcamp Daily article at `articleUrl`.

- `articleUrl`
- `options` (optional)
    - albumImageFormat
    - artistImageFormat
    - includeRawData

### `getTagInfo(tagUrl)`

[**Example**](examples/getTagInfo.js) ([output](examples/getTagInfo_output.txt))

Fetches information about the tag referred to by `tagUrl`.

### `getReleasesByTag(tagUrl, [params], [options])`

[**Example**](examples/getReleasesByTag.js) ([output](examples/getReleasesByTag_output.txt))

Fetches releases matching the tag referred to by `tagUrl`.

- `tagUrl`
- `params` (optional)
    - filters:
        - location
        - tags: array of tag values to match, in addition to the one referred to by `tagUrl`.
        - sort
        - format
    - page (1 if omitted)

  All properties are optional. For omitted properties, default values obtained from `tagUrl` will be used. Possible filter values can be obtained by calling `getReleasesByTagFilterOptions()`. For `filters.location` and `filters.tag`, you may look up additional values not returned by `getReleasesByTagFilterOptions()` through `searchLocation()` and `searchTag()`, respectively.

- `options` (optional)
    - imageFormat
    - useHardcodedDefaultFilters: if `true`, use hardcoded default values for filters not specified in `params.filters`. If `false` or unspecified, default filter values will be obtained by calling `getReleasesByTagFilterOptions()` (extra query means slower performance).

### `getReleasesByTagFilterOptions(tagUrl)`

[**Example**](examples/getReleasesByTagFilterOptions.js) ([output](examples/getReleasesByTagFilterOptions_output.txt))

Fetches the list of possible filter values for `getReleasesByTag()`. For `location` and `tag` filters, this function does not return a conclusive list of values. You may use `searchLocation()` and `searchTag()` to look up additional values.

- `tagUrl`: the URL of the tag for which filter values should be returned

### `searchLocation(params)`

[**Example**](examples/searchLocation.js) ([output](examples/searchLocation_output.txt))

Fetches the list of locations matching `params.q`. Results include both partial and full matches. Each item in the returned array corresponds to a matching location, and its `value` property can be used for setting the `location` filter in `getReleasesByTag()`.

- `params`:
    - q: the string to match
    - limit: the maximum number of results to return

### `searchTag(params)`

[**Example**](examples/searchTag.js) ([output](examples/searchTag_output.txt))

Fetches the list of tags matching `params.q`. Results include both partial and full matches. Each item in the returned array corresponds to a matching tag, and its `value` property can be used for setting the `tags` filter in `getReleasesByTag()`.

- `params`:
    - q: the string to match
    - limit: the maximum number of results to return

### `getFanInfo(username, [options])`

[**Example**](examples/getFanInfo.js) ([output](examples/getFanInfo_output.txt))

Fetches information about a fan.

- `username`
- `options` (optional)
    - imageFormat

### `getFanCollection(usernameOrContinuationToken, [options])`

[**Example**](examples/getFanCollection.js) ([output](examples/getFanCollection_output.txt))

Fetches the list of albums / tracks in a fan's collection.

- `usernameOrContinuationToken`: if username is provided, returns the first batch of items in the collection. To obtain further items, call the function again but, instead of username, pass `continuationToken` from the result of the first call. If there are no further items available, `continuationToken` will be `null`.
- `options` (optional)
    - imageFormat

### `getFanWishlist(usernameOrContinuationToken, [options])`

[**Example**](examples/getFanWishlist.js) ([output](examples/getFanWishlist_output.txt))

Fetches the list of albums / tracks added to a fan's wishlist.

- `usernameOrContinuationToken`: if username is provided, returns the first batch of wishlist items. To obtain further items, call the function again but, instead of username, pass `continuationToken` from the result of the first call. If there are no further items available, `continuationToken` will be `null`.
- `options` (optional)
    - imageFormat

### `getFanFollowingArtistsAndLabels(usernameOrContinuationToken, [options])`

[**Example**](examples/getFanFollowingArtistsAndLabels.js) ([output](examples/getFanFollowingArtistsAndLabels_output.txt))

Fetches the list of artists and labels followed by a fan.

- `usernameOrContinuationToken`: if username is provided, returns the first batch of artists and labels. To obtain further items, call the function again but, instead of username, pass `continuationToken` from the result of the first call. If there are no further items available, `continuationToken` will be `null`.
- `options` (optional)
    - imageFormat

### `getFanFollowingGenres(usernameOrContinuationToken, [options])`

[**Example**](examples/getFanFollowingGenres.js) ([output](examples/getFanFollowingGenres_output.txt))

Fetches the list of genres followed by a fan. Each genre is actually a Bandcamp tag, so you can, for example, pass its `url` value to `getReleasesByTag()`.

- `usernameOrContinuationToken`: if username is provided, returns the first batch of genres. To obtain further items, call the function again but, instead of username, pass `continuationToken` from the result of the first call. If there are no further items available, `continuationToken` will be `null`.
- `options` (optional)
    - imageFormat

## Rate Limiting

The API functions can be called with rate limiting like this:

```
bcfetch.limiter.getAlbumInfo(...);
```

[**Example**](examples/limiter.js) ([output](examples/limiter_output.txt))

Rate limiting is useful when you need to make a large number of queries and don't want to run the risk of getting rejected by the server for making too many requests within a short time interval. If you get a '429 Too Many Requests' error, then you should consider using the rate limiter.

The library uses [Bottleneck](https://www.npmjs.com/package/bottleneck) for rate limiting. You can configure the rate limiter like this:

```
bcfetch.limiter.updateSettings({
    maxConcurrent: 10,  // default: 5
    minTime: 100        // default: 200
});
```

`updateSettings()` is just a passthrough function to Bottleneck. Check the [Bottleneck doc](https://www.npmjs.com/package/bottleneck#docs) for the list of options you can set.

## Caching

The library maintains an in-memory cache for two types of resources:
1. `page` - pages fetched during scraping
2. `constant` - image formats and discover options

Functions related to the cache can be called this way:

```
const bcfetch = require('bandcamp-fetch');

bcfetch.cache.setTTL('page', 500);
bcfetch.cache.setMaxPages(20);
bcfetch.cache.clear('constant');

```

### `cache.setTTL(type, TTL)`

Sets the expiry time, in seconds, of cache entries for the given resource type.

- `type`: 'page' or 'constant'
- `TTL`: expiry time in seconds (default: `300` for 'page' and `3600` for 'constant')

### `cache.setMaxPages(maxPages)`

Sets the maximum number of pages that can be stored in the cache. A negative value means unlimited. Default: `10`.

### `cache.clear([type])`

Clears the cache entries for the given resource type.

- `type` (optional): 'page' or 'constant'. If unspecified, clears the entire cache.

# Changelog

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

# License

MIT