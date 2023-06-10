bandcamp-fetch

# bandcamp-fetch

## Table of contents

### Namespaces

- [ReleasesByTag](modules/ReleasesByTag.md)

### Enumerations

- [AutocompleteItemType](enums/AutocompleteItemType.md)
- [CacheDataType](enums/CacheDataType.md)
- [ImageFormatFilter](enums/ImageFormatFilter.md)
- [SearchItemType](enums/SearchItemType.md)

### Classes

- [AlbumAPI](classes/AlbumAPI.md)
- [ArticleAPI](classes/ArticleAPI.md)
- [AutocompleteAPI](classes/AutocompleteAPI.md)
- [BandAPI](classes/BandAPI.md)
- [Cache](classes/Cache.md)
- [DiscoveryAPI](classes/DiscoveryAPI.md)
- [FanAPI](classes/FanAPI.md)
- [ImageAPI](classes/ImageAPI.md)
- [LimiterAlbumAPI](classes/LimiterAlbumAPI.md)
- [LimiterArticleAPI](classes/LimiterArticleAPI.md)
- [LimiterAutocompleteAPI](classes/LimiterAutocompleteAPI.md)
- [LimiterBandAPI](classes/LimiterBandAPI.md)
- [LimiterDiscoveryAPI](classes/LimiterDiscoveryAPI.md)
- [LimiterFanAPI](classes/LimiterFanAPI.md)
- [LimiterImageAPI](classes/LimiterImageAPI.md)
- [LimiterSearchAPI](classes/LimiterSearchAPI.md)
- [LimiterShowAPI](classes/LimiterShowAPI.md)
- [LimiterTagAPI](classes/LimiterTagAPI.md)
- [LimiterTrackAPI](classes/LimiterTrackAPI.md)
- [SearchAPI](classes/SearchAPI.md)
- [ShowAPI](classes/ShowAPI.md)
- [TagAPI](classes/TagAPI.md)
- [TrackAPI](classes/TrackAPI.md)

### Interfaces

- [Album](interfaces/Album.md)
- [AlbumAPIGetInfoParams](interfaces/AlbumAPIGetInfoParams.md)
- [AlbumHighlightsByTag](interfaces/AlbumHighlightsByTag.md)
- [AlbumRelease](interfaces/AlbumRelease.md)
- [Article](interfaces/Article.md)
- [ArticleAPIGetArticleParams](interfaces/ArticleAPIGetArticleParams.md)
- [ArticleAPIListParams](interfaces/ArticleAPIListParams.md)
- [ArticleCategory](interfaces/ArticleCategory.md)
- [ArticleCategorySection](interfaces/ArticleCategorySection.md)
- [ArticleList](interfaces/ArticleList.md)
- [ArticleListItem](interfaces/ArticleListItem.md)
- [ArticleSection](interfaces/ArticleSection.md)
- [Artist](interfaces/Artist.md)
- [AutoCompleteTag](interfaces/AutoCompleteTag.md)
- [AutocompleteAPIGetSuggestionsParams](interfaces/AutocompleteAPIGetSuggestionsParams.md)
- [AutocompleteItem](interfaces/AutocompleteItem.md)
- [AutocompleteLocation](interfaces/AutocompleteLocation.md)
- [BandAPIGetDiscographyParams](interfaces/BandAPIGetDiscographyParams.md)
- [BandAPIGetInfoParams](interfaces/BandAPIGetInfoParams.md)
- [BandAPIGetLabelArtistsParams](interfaces/BandAPIGetLabelArtistsParams.md)
- [DiscoverOptions](interfaces/DiscoverOptions.md)
- [DiscoverParams](interfaces/DiscoverParams.md)
- [DiscoverResult](interfaces/DiscoverResult.md)
- [Fan](interfaces/Fan.md)
- [FanAPIGetInfoParams](interfaces/FanAPIGetInfoParams.md)
- [FanAPIGetItemsParams](interfaces/FanAPIGetItemsParams.md)
- [FanContinuationItemsResult](interfaces/FanContinuationItemsResult.md)
- [FanItemsContinuation](interfaces/FanItemsContinuation.md)
- [FanPageItemsResult](interfaces/FanPageItemsResult.md)
- [ImageConstants](interfaces/ImageConstants.md)
- [ImageFormat](interfaces/ImageFormat.md)
- [Label](interfaces/Label.md)
- [MediaKind](interfaces/MediaKind.md)
- [NameValuePair](interfaces/NameValuePair.md)
- [ReleasesByTag](interfaces/ReleasesByTag-1.md)
- [SearchAPISearchParams](interfaces/SearchAPISearchParams.md)
- [SearchResultAlbum](interfaces/SearchResultAlbum.md)
- [SearchResultArtist](interfaces/SearchResultArtist.md)
- [SearchResultFan](interfaces/SearchResultFan.md)
- [SearchResultItem](interfaces/SearchResultItem.md)
- [SearchResultLabel](interfaces/SearchResultLabel.md)
- [SearchResultTrack](interfaces/SearchResultTrack.md)
- [SearchResults](interfaces/SearchResults.md)
- [Show](interfaces/Show.md)
- [ShowAPIGetShowParams](interfaces/ShowAPIGetShowParams.md)
- [ShowAPIListParams](interfaces/ShowAPIListParams.md)
- [Tag](interfaces/Tag.md)
- [TagAPIGetAlbumHighlightsParams](interfaces/TagAPIGetAlbumHighlightsParams.md)
- [TagAPIGetReleasesParams](interfaces/TagAPIGetReleasesParams.md)
- [TagList](interfaces/TagList.md)
- [Track](interfaces/Track.md)
- [TrackAPIGetInfoParams](interfaces/TrackAPIGetInfoParams.md)
- [UserKind](interfaces/UserKind.md)

### Type Aliases

- [ArticleMediaItem](README.md#articlemediaitem)
- [LabelArtist](README.md#labelartist)
- [SearchResultAny](README.md#searchresultany)

### Variables

- [default](README.md#default)

## Type Aliases

### ArticleMediaItem

Ƭ **ArticleMediaItem**: [`Album`](interfaces/Album.md) \| [`Track`](interfaces/Track.md) & { `featuredTrackPosition`: `number` ; `mediaItemRef?`: `string`  }

#### Defined in

lib/types/Article.ts:51

___

### LabelArtist

Ƭ **LabelArtist**: `Omit`<[`Artist`](interfaces/Artist.md), ``"type"``\>

#### Defined in

lib/types/Label.ts:9

___

### SearchResultAny

Ƭ **SearchResultAny**: [`SearchResultArtist`](interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](interfaces/SearchResultLabel.md) \| [`SearchResultAlbum`](interfaces/SearchResultAlbum.md) \| [`SearchResultTrack`](interfaces/SearchResultTrack.md) \| [`SearchResultFan`](interfaces/SearchResultFan.md)

#### Defined in

lib/types/Search.ts:47

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `album` | typeof [`AlbumAPI`](classes/AlbumAPI.md) |
| `article` | typeof [`ArticleAPI`](classes/ArticleAPI.md) |
| `autocomplete` | typeof [`AutocompleteAPI`](classes/AutocompleteAPI.md) |
| `band` | typeof [`BandAPI`](classes/BandAPI.md) |
| `cache` | typeof [`Cache`](classes/Cache.md) |
| `discovery` | typeof [`DiscoveryAPI`](classes/DiscoveryAPI.md) |
| `fan` | typeof [`FanAPI`](classes/FanAPI.md) |
| `image` | typeof [`ImageAPI`](classes/ImageAPI.md) |
| `limiter` | { `album`: typeof [`LimiterAlbumAPI`](classes/LimiterAlbumAPI.md) = LimiterAlbumAPI; `article`: typeof [`LimiterArticleAPI`](classes/LimiterArticleAPI.md) = LimiterArticleAPI; `autocomplete`: typeof [`LimiterAutocompleteAPI`](classes/LimiterAutocompleteAPI.md) = LimiterAutocompleteAPI; `band`: typeof [`LimiterBandAPI`](classes/LimiterBandAPI.md) = LimiterBandAPI; `discovery`: typeof [`LimiterDiscoveryAPI`](classes/LimiterDiscoveryAPI.md) = LimiterDiscoveryAPI; `fan`: typeof [`LimiterFanAPI`](classes/LimiterFanAPI.md) = LimiterFanAPI; `image`: typeof [`LimiterImageAPI`](classes/LimiterImageAPI.md) = LimiterImageAPI; `search`: typeof [`LimiterSearchAPI`](classes/LimiterSearchAPI.md) = LimiterSearchAPI; `show`: typeof [`LimiterShowAPI`](classes/LimiterShowAPI.md) = LimiterShowAPI; `tag`: typeof [`LimiterTagAPI`](classes/LimiterTagAPI.md) = LimiterTagAPI; `track`: typeof [`LimiterTrackAPI`](classes/LimiterTrackAPI.md) = LimiterTrackAPI; `updateSettings`: (`options?`: `ConstructorOptions`) => `void`  } |
| `limiter.album` | typeof [`LimiterAlbumAPI`](classes/LimiterAlbumAPI.md) |
| `limiter.article` | typeof [`LimiterArticleAPI`](classes/LimiterArticleAPI.md) |
| `limiter.autocomplete` | typeof [`LimiterAutocompleteAPI`](classes/LimiterAutocompleteAPI.md) |
| `limiter.band` | typeof [`LimiterBandAPI`](classes/LimiterBandAPI.md) |
| `limiter.discovery` | typeof [`LimiterDiscoveryAPI`](classes/LimiterDiscoveryAPI.md) |
| `limiter.fan` | typeof [`LimiterFanAPI`](classes/LimiterFanAPI.md) |
| `limiter.image` | typeof [`LimiterImageAPI`](classes/LimiterImageAPI.md) |
| `limiter.search` | typeof [`LimiterSearchAPI`](classes/LimiterSearchAPI.md) |
| `limiter.show` | typeof [`LimiterShowAPI`](classes/LimiterShowAPI.md) |
| `limiter.tag` | typeof [`LimiterTagAPI`](classes/LimiterTagAPI.md) |
| `limiter.track` | typeof [`LimiterTrackAPI`](classes/LimiterTrackAPI.md) |
| `limiter.updateSettings` | (`options?`: `ConstructorOptions`) => `void` |
| `search` | typeof [`SearchAPI`](classes/SearchAPI.md) |
| `show` | typeof [`ShowAPI`](classes/ShowAPI.md) |
| `tag` | typeof [`TagAPI`](classes/TagAPI.md) |
| `track` | typeof [`TrackAPI`](classes/TrackAPI.md) |

#### Defined in

index.ts:82
