import BandcampFetch from './lib/BandcampFetch.js';

export { default as BaseAPI } from './lib/common/BaseAPI.js';
export { default as BaseAPIWithImageSupport } from './lib/common/BaseAPIWithImageSupport.js';
export { default as AlbumAPI } from './lib/album/AlbumAPI.js';
export { default as ArticleAPI } from './lib/article/ArticleAPI.js';
export { default as BandAPI } from './lib/band/BandAPI.js';
export { default as DiscoveryAPI } from './lib/discovery/DiscoveryAPI.js';
export { default as FanAPI } from './lib/fan/FanAPI.js';
export { default as ImageAPI } from './lib/image/ImageAPI.js';
export { default as ShowAPI } from './lib/show/ShowAPI.js';
export { default as TagAPI } from './lib/tag/TagAPI.js';
export { default as TrackAPI } from './lib/track/TrackAPI.js';
export { default as SearchAPI } from './lib/search/SearchAPI.js';
export { default as AutocompleteAPI } from './lib/autocomplete/AutocompleteAPI.js';
export { default as StreamAPI } from './lib/stream/StreamAPI.js';

export * from './lib/common/BaseAPI.js';
export * from './lib/common/BaseAPIWithImageSupport.js';
export * from './lib/album/AlbumAPI.js';
export * from './lib/discovery/DiscoveryAPI.js';
export * from './lib/image/ImageAPI.js';
export * from './lib/article/ArticleAPI.js';
export * from './lib/band/BandAPI.js';
export * from './lib/fan/FanAPI.js';
export * from './lib/show/ShowAPI.js';
export * from './lib/tag/TagAPI.js';
export * from './lib/track/TrackAPI.js';
export * from './lib/album/AlbumAPI.js';
export * from './lib/search/SearchAPI.js';
export * from './lib/autocomplete/AutocompleteAPI.js';
export * from './lib/stream/StreamAPI.js';

export * from './lib/types/Album.js';
export * from './lib/types/Article.js';
export * from './lib/types/Artist.js';
export * from './lib/types/Discovery.js';
export * from './lib/types/Fan.js';
export * from './lib/types/Image.js';
export * from './lib/types/Label.js';
export * from './lib/types/MediaKind.js';
export * from './lib/types/Show.js';
export * from './lib/types/Tag.js';
export * from './lib/types/Track.js';
export * from './lib/types/UserKind.js';
export * from './lib/types/Search.js';
export * from './lib/types/Autocomplete.js';

export { default as Cache } from './lib/utils/Cache.js';
export * from './lib/utils/Cache.js';
export { default as Fetcher } from './lib/utils/Fetcher.js';
export * from './lib/utils/Fetcher.js';
export { default as Limiter } from './lib/utils/Limiter.js';

export { default as Album } from './lib/types/Album.js';
export { default as Article } from './lib/types/Article.js';
export { default as Artist } from './lib/types/Artist.js';
export { default as Fan } from './lib/types/Fan.js';
export { default as Label } from './lib/types/Label.js';
export { default as MediaKind } from './lib/types/MediaKind.js';
export { default as Show } from './lib/types/Show.js';
export { default as Tag } from './lib/types/Tag.js';
export { default as Track } from './lib/types/Track.js';
export { default as UserKind } from './lib/types/UserKind.js';
export { default as NameValuePair } from './lib/utils/NameValuePair.js';

export { default as BandcampFetch } from './lib/BandcampFetch.js';
export * from './lib/BandcampFetch.js';

export default new BandcampFetch();
