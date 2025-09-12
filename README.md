<a href='https://ko-fi.com/C0C5RGOOP' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

# bandcamp-fetch

Library for scraping Bandcamp content.

Coverage:

- Bandcamp Discover
- Album and track info
- Artists, labels, label artists, discography
- Articles (aka. Bandcamp Daily)
- Shows
- Tags, including releases and highlights by tag
- Search
- Fan collections, wishlists and following artists / genres

Packaged as ESM + CJS hybrid module with typings.

# Installation

```
npm i bandcamp-fetch --save
```

# Usage

```
import bcfetch from 'bandcamp-fetch';

const results = await bcfetch.discovery.discover(...);
```

### User Sessions

When you sign into Bandcamp, a "Cookie" is created to identify the user session. You can pass the value of this cookie to the library and gain access to your private collection as well as high-quality MP3 streams of purchased media:

```
bcfetch.setCookie('xxxx');

const album = await bcfetch.album.getInfo({
    albumUrl: '...'  // URL of purchased album
});

// Normal quality stream
const streamUrl = album.tracks[0].streamUrl;

// High quality stream - only available when `cookie` is set
const streamUrlHQ = album.tracks[0].streamUrlHQ;
```

Guide: [How to obtain Cookie](https://github.com/patrickkfkan/bandcamp-fetch/wiki/How-to-obtain-Cookie)

### `BandcampFetch`

The library exports a default [BandcampFetch](./docs/api/classes/BandcampFetch.md) instance mainly for backward compatibility with previous versions:

```
// Imports the default `BandcampFetch` instance
import bcfetch from 'bandcamp-fetch';
```

You can also create separate instances. This is useful when you want to support multiple user sessions:

```
import { BandcampFetch } from 'bandcamp-fetch';

const bcfetch1 = new BandcampFetch({
    cookie: 'xxxx' // Cookie for user session 1
});

const bcfetch2 = new BandcampFetch();
bcfetch2.setCookie('yyyy'); // Cookie for user sesion 2
```

### 

# API

## Discovery API

To access the Discovery API:

```
import bcfetch from 'bandcamp-fetch';

const discovery = bcfetch.discovery;

const options = await discovery.getAvailableOptions();
const results = await discovery.discover(...);
```
**Methods:**
<details>
<summary><code>discover([params])</code></summary>
<br />

[**Example**](examples/discovery/discover.mjs) ([output](examples/discovery/discover_output.txt))

<p>Fetches items through Bandcamp Discover.</p>

**Params**

- `params`: ([DiscoverParams](docs/api/interfaces/DiscoverParams.md)) (*optional* and *all properties optional*)
    - `genre`: (string)
    - `subgenre`: (string) only valid when `genre` is set to something other than 'all'.
    - `location`: (string)
    - `sortBy`: (string)
    - `category`: (number)
    - `time`: (number)
    - `customTags`: (Array&lt;string&gt;)
    - `size`: number
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md))
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md))
    - `merchImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md))

To see what values can be set in `params`, call `getAvailableOptions()`.

**Returns**

Promise resolving to [DiscoverResult](docs/api/interfaces/DiscoverResult.md).

**Continuation**

Check the `continuation` property of the returned result to see if more results are available. To obtain the next set of results, pass the value of `continuation` to `discover()`:

```
const results = await discovery.discover(...);

// More results
if (results.continuation) {
  const moreResults = await discovery.discover(results.continuation);
  ...
}
```

---
</details>

<details>
<summary><code>getAvailableOptions()</code></summary>
<br />

[**Example**](examples/discovery/getAvailableOptions.mjs) ([output](examples/discovery/getAvailableOptions_output.txt))

<p>Fetches Bandcamp Discover options that can be used to configure <code>params</code> for passing into <code>discover()</code>.</p>

**Returns**

Promise resolving to [DiscoverOptions](docs/api/interfaces/DiscoverOptions.md).

---
</details>

<details>
<summary><code>sanitizeDiscoverParams([params])</code></summary>
<br />

[**Example**](examples/discovery/sanitizeDiscoverParams.mjs) ([output](examples/discovery/sanitizeDiscoverParams_output.txt))

<p>Sanitizes <code>params</code> by setting default values for omitted properties and removing irrelevant or inapplicable ones.</p>

<p>
Note that you don't have to call this method on params passed into <code>discover()</code> as they will be sanitized automatically.
</p>

**Params**

- `params`: ([DiscoverParams](docs/api/interfaces/DiscoverParams.md)) (*optional*) the discover params to sanitize.

**Returns**

Promise resolving to sanitized [DiscoverParams](docs/api/interfaces/DiscoverParams.md).

---
</details>

<details>
<summary><code>getRecommendedTagsAndLocations()</code></summary>
<br />

[**Example**](examples/discovery/getRecommendedTagsAndLocations.mjs) ([output](examples/discovery/getRecommendedTagsAndLocations_output.txt))

<p>Fetches a list of tags and locations.</p>

**Returns**

Promise resolving to [TagsAndLocations](docs/api/interfaces/TagsAndLocations.md), which groups results into `tags` and `locations`.

---
</details>


## Image API

To access the Image API:

```
import bcfetch, { ImageFormatFilter } from 'bandcamp-fetch';

const image = bcfetch.image;

const formats = await image.getFormats(ImageFormatFilter.Album);
```
**Methods:**

<details>
<summary><code>getFormats([filter])</code></summary>
<br />

[**Example**](examples/image/getFormats.mjs) ([output](examples/image/getFormats_output.txt))

<p>Fetches the list of image formats used in Bandcamp.</p>

**Params**

- `filter`: ([ImageFormatFilter](docs/api/enums/ImageFormatFilter.md)) (*optional*) if specified, narrows down the result to include only formats applicable to the specified value.

**Returns**

Promise resolving to Array<[ImageFormat](docs/api/interfaces/ImageFormat.md)>.

---
</details>

<details>
<summary><code>getImageFormat(target, [fallbackId])</code></summary>
<br />

<p>Fetches the image format that matches <code>target</code>. If none is found, the result will be <code>null</code>.</p>

**Params**

- `target`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md))
    - If target is string or number, the method finds the image format with matching name or Id (as appropriate).
    - If target satisfies the [ImageFormat](docs/api/interfaces/ImageFormat.md) interface constraint, then it is returned as is.
- `fallbackId`: (number) (*optional*) if no match is found for `target`, try to obtain format with Id matching `fallbackId`.

**Returns**

Promise resolving to matching [ImageFormat](docs/api/interfaces/ImageFormat.md), or `null` if none matches `target` nor `fallbackId` (if specified).

---
</details>


## Band API

A band can be an artist or label. To access the Band API:

```
import bcfetch from 'bandcamp-fetch';

const band = bcfetch.band;

const info = await band.getInfo(...);
```

**Methods:**

<details>
<summary><code>getInfo(params)</code></summary>
<br />

[**Example**](examples/band/getInfo.mjs) ([output](examples/band/getInfo_output.txt))

<p>Fetches information about an artist or label.</p>

**Params**

- `params`: ([BandAPIGetInfoParams](docs/api/interfaces/BandAPIGetInfoParams.md))
    - `bandUrl`: (string)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `labelId`: (number) (*optional*)

The method tries to assemble the most complete set of data by scraping the following pages (returning immediately at any point the data becomes complete):

1. The page referred to by `bandUrl`
2. The 'music' page of the artist or label (`bandUrl/music`)
3. The first album or track in the artist's or label's discography

Sometimes, label information is missing for artists even when they do belong to a label. If you know the `labelId` of the label that the artist belongs to, you can specify it in `params`. This will ensure that `label` will not be `null` in the artist info. If you pass a label URL to this function, you can find the `labelId` in the result.

**Returns**

Promise resolving to [Artist](docs/api/interfaces/Artist.md) or [Label](docs/api/interfaces/Label.md).

---
</details>

<details>
<summary><code>getLabelArtists(params)</code></summary>
<br />

[**Example**](examples/band/getLabelArtists.mjs) ([output](examples/band/getLabelArtists_output.txt))

<p>Fetches the list of artists belonging to a label.</p>

**Params**

- `params`: ([BandAPIGetLabelArtistsParams](docs/api/interfaces/BandAPIGetLabelArtistsParams.md))
    - `labelUrl`: (string)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

**Returns**

Promise resolving to Array<[LabelArtist](docs/api/README.md#labelartist)>.

---
</details>

<details>
<summary><code>getDiscography(params)</code></summary>
<br />

[**Example**](examples/band/getDiscography.mjs) ([output](examples/band/getDiscography_output.txt))

<p>Fetches the list of albums and standalone tracks belonging to an artist or label.</p>

**Params**

- `params`: ([BandAPIGetDiscographyParams](docs/api/interfaces/BandAPIGetDiscographyParams.md))
    - `bandUrl`: (string)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

**Returns**

Promise resolving to Array<[Album](docs/api/interfaces/Album.md) | [Track](docs/api/interfaces/Track.md)>.

---
</details>


## Album API

To access the Album API:

```
import bcfetch from 'bandcamp-fetch';

const album = bcfetch.album;

const info = await album.getInfo(...);
```

**Methods:**

<details>
<summary><code>getInfo(params)</code></summary>
<br />

[**Example**](examples/album/getInfo.mjs) ([output](examples/album/getInfo_output.txt))

<p>Fetches info about an album.</p>

**Params**

- `params`: ([AlbumAPIGetInfoParams](docs/api/interfaces/AlbumAPIGetInfoParams.md))
    - `albumUrl`: (string)
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `includeRawData`: (boolean) (*optional)

**Returns**

Promise resolving to [Album](docs/api/interfaces/Album.md).

> If artist URL is not found in the scraped data, then `artist.url` will be set to the same value as `publisher.url`

---
</details>

## Track API

To access the Track API:

```
import bcfetch from 'bandcamp-fetch';

const track = bcfetch.track;

const info = await track.getInfo(...);
```

**Methods:**

<details>
<summary><code>getInfo(params)</code></summary>
<br />

[**Example**](examples/track/getInfo.mjs) ([output](examples/track/getInfo_output.txt))

<p>Fetches info about a track.</p>

**Params**

- `params`: ([TrackAPIGetInfoParams](docs/api/interfaces/Tra))
    - `trackUrl`: (string)
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `includeRawData`: (boolean) (*optional)

**Returns**

Promise resolving to [Track](docs/api/interfaces/Track.md).

> If artist URL is not found in the scraped data, then `artist.url` will be set to the same value as `publisher.url`

---
</details>

## Tag API

To access the Tag API:

```
import bcfetch from 'bandcamp-fetch';

const tags = await bcfetch.tag.getRelated(...);
```

**Methods:**

<details>
<summary><code>getRelated(params)</code></summary>
<br />

[**Example**](examples/tag/getRelated.mjs) ([output](examples/tag/getRelated_output.txt))

**Params**

- `params`: ([TagAPIGetRelatedParams](docs/api/interfaces/TagAPIGetRelatedParams.md))
    - `tags`: (Array&lt;string&gt;)
    - `size`: (number) (*optional*)

<p>Fetches the related tags for each value in `tags`, as well as the combined result.</p>

**Returns**

Promise resolving to [RelatedTags](docs/api/interfaces/RelatedTags.md), which has the following properties:
- `single`: list of related tags for each tag queried
- `combo`: the combined result of all the related tags

---
</details>

## Show API

To access the Show API:

```
import bcfetch from 'bandcamp-fetch';

const show = bcfetch.show;

const list = await show.list(...);
```

**Methods:**

<details>
<summary><code>list(params)</code></summary>
<br />

[**Example**](examples/show/list.mjs) ([output](examples/show/list_output.txt))

<p>Fetches the full list of Bandcamp shows.</p>

Each list entry contains basic info about a show. To obtain full details, pass its `url` to `getShow()`.

**Params**

- `params`: ([ShowAPIListParams](docs/api/interfaces/ShowAPIListParams.md)) (*optional*)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

**Returns**

Promise resolving to Array<[Show](docs/api/interfaces/Show.md)>.

---
</details>

<details>
<summary><code>getShow(params)</code></summary>
<br />

[**Example**](examples/show/getShow.mjs) ([output](examples/show/getShow_output.txt))

<p>Fetches full details about the Bandcamp show referred to by <code>params.showUrl</code>.</p>

**Params**

- `params`: ([ShowAPIGetShowParams](docs/api/interfaces/ShowAPIGetShowParams.md))
    - `showUrl`: (string)
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `showImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

**Returns**

Promise resolving to [Show](docs/api/interfaces/Show.md).

---
</details>

## Article API

To access the Article API:

```
import bcfetch from 'bandcamp-fetch';

const article = bcfetch.article;

const list = await article.list(...);
```

**Methods:**

<details>
<summary><code>getCategories()</code></summary>
<br />

[**Example**](examples/article/getCategories.mjs) ([output](examples/article/getCategories_output.txt))

<p>Fetches the list of Bandcamp Daily article categories. Categories are grouped into sections.</p>

**Returns**

Promise resolving to Array<[ArticleCategorySection](docs/api/interfaces/ArticleCategorySection.md)>.

---
</details>

<details>
<summary><code>list(params)</code></summary>
<br />

[**Example**](examples/article/list.mjs) ([output](examples/article/list_output.txt))

<p>Fetches the list of Bandcamp Daily articles under the category specified by <code>params.categoryUrl</code> (or all categories if not specified).</p>

**Params**

- `params`: ([ArticleAPIListParams](docs/api/interfaces/ArticleAPIListParams.md)) (*optional* and *all properties optional*)
    - `categoryUrl`: (string)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md))
    - `page`: (number)

**Returns**

Promise resolving to [ArticleList](docs/api/interfaces/ArticleList.md).

---
</details>

<details>
<summary><code>getArticle(params)</code></summary>
<br />

[**Example**](examples/article/getArticle.mjs) ([output](examples/article/getArticle_output.txt))

<p>Fetches the contents of the Bandcamp Daily article at <code>params.articleUrl</code>.</p>

**Params**

- `params`: ([ArticleAPIGetArticleParams](docs/api/interfaces/ArticleAPIGetArticleParams.md))
    - `articleUrl`: (string)
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `includeRawData`: (boolean) (*optional*)

**Returns**

Promise resolving to [Article](docs/api/interfaces/Article.md).

---
</details>

## Fan API

To access the Fan API:

```
import bcfetch from 'bandcamp-fetch';

const fan = bcfetch.fan;

const info = await fan.getInfo(...);
const collection = await fan.getCollection(...);
```

**Methods:**

<details>
<summary><code>getInfo(params)</code></summary>
<br />

[**Example**](examples/fan/getInfo.mjs) ([output](examples/fan/getInfo_output.txt))

<p>Fetches info about a fan.</p>

**Params**

- `params`: ([FanAPIGetInfoParams](docs/api/interfaces/FanAPIGetInfoParams.md))
    - `username`: (string) (*optional*)
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

 If `username` is not specified, result will be obtained for the user of the [session](#user-sessions) tied to the `BandcampFetch` instance.

**Returns**

Promise resolving to [Fan](docs/api/interfaces/Fan.md).

---
</details>

<details>
<summary><code>getCollection(params)</code></summary>
<br />

[**Example**](examples/fan/getCollection.mjs) ([output](examples/fan/getCollection_output.txt))

<p>Fetches the list of albums and tracks in a fan's collection.</p>

**Params**

- `params`: ([FanAPIGetItemsParams](docs/api/interfaces/FanAPIGetItemsParams.md))
    - `target`: (string | [FanItemsContinuation](docs/api/interfaces/FanItemsContinuation.md)) (*optional*) if username (string) is specified, returns the first batch of items in the collection. To obtain further items, call the method again but, instead of username, pass `continuation` from the result of the first call. If there are no further items available, `continuation` will be `null`.
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

If `target` is not specified, result will be obtained for the user of the [session](#user-sessions) tied to the `BandcampFetch` instance.

**Returns**

Promise resolving to ([FanPageItemsResult](docs/api/interfaces/FanPageItemsResult.md) | [FanContinuationItemsResult](docs/api/interfaces/FanContinuationItemsResult.md))<[Album](docs/api/interfaces/Album.md) | [Track](docs/api/interfaces/Track.md)>.

---
</details>

<details>
<summary><code>getWishlist(params)</code></summary>
<br />

[**Example**](examples/fan/getWishlist.mjs) ([output](examples/fan/getWishlist_output.txt))

<p>Fetches the list of albums and tracks added to a fan's wishlist.</p>

**Params**

- `params`: ([FanAPIGetItemsParams](docs/api/interfaces/FanAPIGetItemsParams.md))
    - `target`: (string | [FanItemsContinuation](docs/api/interfaces/FanItemsContinuation.md)) (*optional*) if username (string) is specified, returns the first batch of items in the wishlist. To obtain further items, call the method again but, instead of username, pass `continuation` from the result of the first call. If there are no further items available, `continuation` will be `null`.
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

If `target` is not specified, result will be obtained for the user of the [session](#user-sessions) tied to the `BandcampFetch` instance.

**Returns**

Promise resolving to ([FanPageItemsResult](docs/api/interfaces/FanPageItemsResult.md) | [FanContinuationItemsResult](docs/api/interfaces/FanContinuationItemsResult.md))<[Album](docs/api/interfaces/Album.md) | [Track](docs/api/interfaces/Track.md)>.

---
</details>

<details>
<summary><code>getFollowingArtistsAndLabels(params)</code></summary>
<br />

[**Example**](examples/fan/getFollowingArtistsAndLabels.mjs) ([output](examples/fan/getFollowingArtistsAndLabels_output.txt))

<p>Fetches the list of artists and labels followed by a fan.</p>

**Params**

- `params`: ([FanAPIGetItemsParams](docs/api/interfaces/FanAPIGetItemsParams.md))
    - `target`: (string | [FanItemsContinuation](docs/api/interfaces/FanItemsContinuation.md)) (*optional*) if username (string) is specified, returns the first batch of artists and labels. To obtain further items, call the method again but, instead of username, pass `continuation` from the result of the first call. If there are no further items available, `continuation` will be `null`.
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

If `target` is not specified, result will be obtained for the user of the [session](#user-sessions) tied to the `BandcampFetch` instance.

**Returns**

Promise resolving to ([FanPageItemsResult](docs/api/interfaces/FanPageItemsResult.md) | [FanContinuationItemsResult](docs/api/interfaces/FanContinuationItemsResult.md))<[UserKind](docs/api/interfaces/UserKind.md)>.

---
</details>

<details>
<summary><code>getFollowingGenres(params)</code></summary>
<br />

[**Example**](examples/fan/getFollowingGenres.mjs) ([output](examples/fan/getFollowingGenres_output.txt))

<p>Fetches the list of genres followed by a fan.</p>

Each genre is actually a Bandcamp tag, so you can, for example, pass its `url` to `getReleases()` of the [Tag API](#tag-api).

**Params**

- `params`: ([FanAPIGetItemsParams](docs/api/interfaces/FanAPIGetItemsParams.md))
    - `target`: (string | [FanItemsContinuation](docs/api/interfaces/FanItemsContinuation.md)) (*optional*) if username (string) is specified, returns the first batch of genres. To obtain further items, call the method again but, instead of username, pass `continuation` from the result of the first call. If there are no further items available, `continuation` will be `null`.
    - `imageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

If `target` is not specified, result will be obtained for the user of the [session](#user-sessions) tied to the `BandcampFetch` instance.

**Returns**

Promise resolving to ([FanPageItemsResult](docs/api/interfaces/FanPageItemsResult.md) | [FanContinuationItemsResult](docs/api/interfaces/FanContinuationItemsResult.md))<[Tag](docs/api/interfaces/Tag.md)>.

---
</details>

## Search API

To access the Search API:

```
import bcfetch from 'bandcamp-fetch';

const search = bcfetch.search;

const albums = await search.albums(...);
const all = await search.all(...);
```

**Methods:**

<details>
<summary><code>all(params) / artistsAndLabels(params) / albums(params) / tracks(params) / fans(params)</code></summary>
<br />

[**Example**](examples/search/search.mjs) ([output](examples/search/search_output.txt))

- `all(params)`: search all item types
- `artistsAndLabels(params)`: search artists and labels
- `albums(params)`: search albums
- `tracks(params)`: search tracks
- `fans(params)`: search fans

**Params**

- `params`: ([SearchAPISearchParams](docs/api/interfaces/SearchAPISearchParams.md))
    - `query`: (string)
    - `page`: (number) (*optional*) 1 if omitted
    - `albumImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)
    - `artistImageFormat`: (string | number | [ImageFormat](docs/api/interfaces/ImageFormat.md)) (*optional*)

**Returns**

Promise resolving to [SearchResults](docs/api/interfaces/SearchResults.md)&lt;`T`&gt;, where `T` depends on the item type being searched and can be one of:
- Artist ([SearchResultArtist](docs/api/interfaces/SearchResultArtist.md))
- Label ([SearchResultLabel](docs/api/interfaces/SearchResultLabel.md))
- Album ([SearchResultAlbum](docs/api/interfaces/SearchResultAlbum.md))
- Track ([SearchResultTrack](docs/api/interfaces/SearchResultTrack.md))
- Fan ([SearchResultFan](docs/api/interfaces/SearchResultFan.md))

You can use the `type` property to determine the search result item type.

---
</details>


## Autocomplete API

To access the Autocomplete API:

```
import bcfetch from 'bandcamp-fetch';

const autocomplete = bcfetch.autocomplete;

const suggestions = await autocomplete.getSuggestions(...);
```

**Methods:**

<details>
<summary><code>getSuggestions(params)</code></summary>
<br />

[**Example**](examples/autocomplete/getSuggestions.mjs) ([output](examples/autocomplete/getSuggestions_output.txt))

<p>Fetches autocomplete suggestions for tags and locations, based on partial and full matches against `params.query`.</p>

The `value` property of returned suggestions can be used to set the `location` or `tags` property (as the case may be) of `params.filters` that is passed into `getReleases()` of the [Tag API](#tag-api).

**Params**

- `params`: ([AutocompleteAPIGetSuggestionsParams](docs/api/interfaces/AutocompleteAPIGetSuggestionsParams.md))
    - `query`: (string)
    - `itemType`: ([AutocompleteItemType](docs/api/enums/AutocompleteItemType.md)) 'Tag' or 'Location'
    - `limit`: (number) (*optional*) (only for `ItemType.Location`) the maximum number of results to return; 5 if omitted.

**Returns**

- If `params.itemType` is `AutocompleteItemType.Tag`, a Promise resolving to Array<[AutocompleteTag](docs/api/interfaces/AutoCompleteTag.md)>.
- If `params.itemType` is `AutocompleteItemType.Location`, a Promise resolving to Array<[AutocompleteLocation](docs/api/interfaces/AutocompleteLocation.md)>.

---
</details>

## Stream API

Stream URLs returned by Bandcamp can sometimes be invalid (perhaps expired). Before playing a stream, you are recommended to test its URL and refresh it if necessary with the Stream API.

To access the Stream API:

```
import bcfetch from 'bandcamp-fetch';

const stream = bcfetch.stream;

// Test a stream URL
const streamURL = '...';
const testResult = await stream.test(streamUrl);

if (!testResult.ok) {
    const refreshedStreamURL = await stream.refresh(streamURL);
}
```

**Methods:**

<details>
<summary><code>test(url)</code></summary>
<br />

[**Example**](examples/stream/testAndRefresh.mjs) ([output](examples/stream/testAndRefresh_output.txt))

<p>Tests validity of the stream given by `url`.</p>

**Params**

- `url`: (string) the URL of the stream to test

**Returns**

Promise resolving to [StreamTestResult](docs/api/interfaces/StreamTestResult.md):
- `ok`: (boolean) whether the stream is valid
- `status`: (number) the HTTP response status code returned by the test

---
</details>

<details>
<summary><code>refresh(url)</code></summary>
<br />

[**Example**](examples/stream/testAndRefresh.mjs) ([output](examples/stream/testAndRefresh_output.txt))

<p>Refreshes a stream URL.</p>

**Params**

- `url`: (string) the URL of the stream to refresh

**Returns**

Promise resolving to the refreshed URL of the stream or `null` if no valid result was obtained.

---
</details>

# Rate Limiting

Each `BandcampFetch` instance comes with a rate limiter, which limits the number of requests made within a specific time period.

Rate limiting is useful when you need to make a large number of queries and don't want to run the risk of getting rejected by the server for making too many requests within a short time interval. If you get a '429 Too Many Requests' error, then you should consider using the rate limiter.

Each API has a limiter-enabled counterpart which you can access in the following manner:

```
import bcfetch from 'bandcamp-fetch';

// Album API - no limiter enabled
const albumAPI = bcfetch.album;

// Album API - limiter enabled
const limiterAlbumAPI = bcfetch.limiter.album;
```

[**Example**](examples/limiter/limiter.mjs) ([output](examples/limiter/limiter_output.txt))

The library uses [Bottleneck](https://www.npmjs.com/package/bottleneck) for rate limiting. You can configure the rate limiter like this:

```
bcfetch.limiter.updateSettings({
    maxConcurrent: 10,  // default: 5
    minTime: 100        // default: 200
});
```

`updateSettings()` is just a passthrough function to Bottleneck. Check the [Bottleneck doc](https://www.npmjs.com/package/bottleneck#docs) for the list of options you can set.

# Cache

Each `BandcampFetch` instance has an in-memory cache for two types of data (as defined by [CacheDataType](docs/api/enums/CacheDataType.md)):

1. `CacheDataType.Page` - pages fetched during scraping
2. `CacheDataType.Constants` - image formats and discover options

To access the cache:

```
import bcfetch, { CacheDataType } from 'bandcamp-fetch';

const cache = bcfetch.cache;

cache.setTTL(CacheDataType.Page, 500);
```

**Methods:**

<details>
<summary><code>setTTL(type, ttl)</code></summary>
<br />

<p>Sets the expiry time, in seconds, of cache entries for the given data type.</p>

**Params**

- `type`: ([CacheDataType](docs/api/enums/CacheDataType.md))
- `TTL`: (number) expiry time in seconds (default: 300 for `CacheDataType.Page` and 3600 for `CacheDataType.Constants`)

---
</details>

<details>
<summary><code>setMaxPages(maxPages)</code></summary>
<br />

<p>Sets the maximum number of pages that can be stored in the cache. A negative value means unlimited. Default: 10.</p>

**Params**

- `maxPages`: (number)

---
</details>

<details>
<summary><code>clear([type])</code></summary>
<br />

<p>Clears the cache entries for the specified data type (or all entries if no data type specified).</p>

**Params**

- `type`: ([CacheDataType](docs/api/enums/CacheDataType.md)) (*optional*)

---
</details>


# Changelog

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

# License

MIT