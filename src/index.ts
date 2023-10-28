import BandcampFetch from './lib/BandcampFetch';

export { default as BaseAPI } from './lib/common/BaseAPI';
export { default as BaseAPIWithImageSupport } from './lib/common/BaseAPIWithImageSupport';
export { default as AlbumAPI } from './lib/album/AlbumAPI';
export { default as ArticleAPI } from './lib/article/ArticleAPI';
export { default as BandAPI } from './lib/band/BandAPI';
export { default as DiscoveryAPI } from './lib/discovery/DiscoveryAPI';
export { default as FanAPI } from './lib/fan/FanAPI';
export { default as ImageAPI } from './lib/image/ImageAPI';
export { default as ShowAPI } from './lib/show/ShowAPI';
export { default as TagAPI } from './lib/tag/TagAPI';
export { default as TrackAPI } from './lib/track/TrackAPI';
export { default as SearchAPI } from './lib/search/SearchAPI';
export { default as AutocompleteAPI } from './lib/autocomplete/AutocompleteAPI';

export * from './lib/common/BaseAPI';
export * from './lib/common/BaseAPIWithImageSupport';
export * from './lib/album/AlbumAPI';
export * from './lib/discovery/DiscoveryAPI';
export * from './lib/image/ImageAPI';
export * from './lib/article/ArticleAPI';
export * from './lib/band/BandAPI';
export * from './lib/fan/FanAPI';
export * from './lib/show/ShowAPI';
export * from './lib/tag/TagAPI';
export * from './lib/track/TrackAPI';
export * from './lib/album/AlbumAPI';
export * from './lib/search/SearchAPI';
export * from './lib/autocomplete/AutocompleteAPI';

export * from './lib/types/Album';
export * from './lib/types/Article';
export * from './lib/types/Artist';
export * from './lib/types/Discovery';
export * from './lib/types/Fan';
export * from './lib/types/Image';
export * from './lib/types/Label';
export * from './lib/types/MediaKind';
export * from './lib/types/Show';
export * from './lib/types/Tag';
export * from './lib/types/Track';
export * from './lib/types/UserKind';
export * from './lib/types/Search';
export * from './lib/types/Autocomplete';

export { default as Cache } from './lib/utils/Cache';
export * from './lib/utils/Cache';
export { default as Fetcher } from './lib/utils/Fetcher';
export * from './lib/utils/Fetcher';
export { default as Limiter } from './lib/utils/Limiter';

export { default as Album } from './lib/types/Album';
export { default as Article } from './lib/types/Article';
export { default as Artist } from './lib/types/Artist';
export { default as Fan } from './lib/types/Fan';
export { default as Label } from './lib/types/Label';
export { default as MediaKind } from './lib/types/MediaKind';
export { default as Show } from './lib/types/Show';
export { default as Tag } from './lib/types/Tag';
export { default as Track } from './lib/types/Track';
export { default as UserKind } from './lib/types/UserKind';
export { default as NameValuePair } from './lib/utils/NameValuePair';

export { default as BandcampFetch } from './lib/BandcampFetch';
export * from './lib/BandcampFetch';

export default new BandcampFetch();
