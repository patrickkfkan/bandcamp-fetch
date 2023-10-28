bandcamp-fetch

# bandcamp-fetch

## Table of contents

### Namespaces

- [ReleasesByTag](modules/ReleasesByTag.md)

### Enumerations

- [AutocompleteItemType](enums/AutocompleteItemType.md)
- [CacheDataType](enums/CacheDataType.md)
- [FetchMethod](enums/FetchMethod.md)
- [ImageFormatFilter](enums/ImageFormatFilter.md)
- [SearchItemType](enums/SearchItemType.md)

### Classes

- [AlbumAPI](classes/AlbumAPI.md)
- [ArticleAPI](classes/ArticleAPI.md)
- [AutocompleteAPI](classes/AutocompleteAPI.md)
- [BandAPI](classes/BandAPI.md)
- [BandcampFetch](classes/BandcampFetch.md)
- [BaseAPI](classes/BaseAPI.md)
- [BaseAPIWithImageSupport](classes/BaseAPIWithImageSupport.md)
- [Cache](classes/Cache.md)
- [CacheWrapper](classes/CacheWrapper.md)
- [DiscoveryAPI](classes/DiscoveryAPI.md)
- [FanAPI](classes/FanAPI.md)
- [FetchError](classes/FetchError.md)
- [Fetcher](classes/Fetcher.md)
- [ImageAPI](classes/ImageAPI.md)
- [Limiter](classes/Limiter.md)
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
- [BandcampFetchParams](interfaces/BandcampFetchParams.md)
- [BaseAPIParams](interfaces/BaseAPIParams.md)
- [BaseAPIWithImageSupportParams](interfaces/BaseAPIWithImageSupportParams.md)
- [DiscoverOptions](interfaces/DiscoverOptions.md)
- [DiscoverParams](interfaces/DiscoverParams.md)
- [DiscoverResult](interfaces/DiscoverResult.md)
- [Fan](interfaces/Fan.md)
- [FanAPIGetInfoParams](interfaces/FanAPIGetInfoParams.md)
- [FanAPIGetItemsParams](interfaces/FanAPIGetItemsParams.md)
- [FanContinuationItemsResult](interfaces/FanContinuationItemsResult.md)
- [FanItemsContinuation](interfaces/FanItemsContinuation.md)
- [FanPageItemsResult](interfaces/FanPageItemsResult.md)
- [FetcherParams](interfaces/FetcherParams.md)
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

[lib/types/Article.ts:51](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Article.ts#L51)

___

### LabelArtist

Ƭ **LabelArtist**: `Omit`<[`Artist`](interfaces/Artist.md), ``"type"``\>

#### Defined in

[lib/types/Label.ts:9](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Label.ts#L9)

___

### SearchResultAny

Ƭ **SearchResultAny**: [`SearchResultArtist`](interfaces/SearchResultArtist.md) \| [`SearchResultLabel`](interfaces/SearchResultLabel.md) \| [`SearchResultAlbum`](interfaces/SearchResultAlbum.md) \| [`SearchResultTrack`](interfaces/SearchResultTrack.md) \| [`SearchResultFan`](interfaces/SearchResultFan.md)

#### Defined in

[lib/types/Search.ts:47](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/lib/types/Search.ts#L47)

## Variables

### default

• **default**: [`BandcampFetch`](classes/BandcampFetch.md)

#### Defined in

[index.ts:68](https://github.com/patrickkfkan/bandcamp-fetch/blob/7815c68/src/index.ts#L68)
