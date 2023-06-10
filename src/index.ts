import AlbumAPI, { LimiterAlbumAPI } from './lib/album/AlbumAPI';
import ArticleAPI, { LimiterArticleAPI } from './lib/article/ArticleAPI';
import BandAPI, { LimiterBandAPI } from './lib/band/BandAPI';
import DiscoveryAPI, { LimiterDiscoveryAPI } from './lib/discovery/DiscoveryAPI';
import FanAPI, { LimiterFanAPI } from './lib/fan/FanAPI';
import ImageAPI, { LimiterImageAPI } from './lib/image/ImageAPI';
import ShowAPI, { LimiterShowAPI } from './lib/show/ShowAPI';
import TagAPI, { LimiterTagAPI } from './lib/tag/TagAPI';
import TrackAPI, { LimiterTrackAPI } from './lib/track/TrackAPI';
import SearchAPI, { LimiterSearchAPI } from './lib/search/SearchAPI';
import AutocompleteAPI, { LimiterAutocompleteAPI } from './lib/autocomplete/AutocompleteAPI';
import Limiter from './lib/utils/Limiter';
import { CacheDataType, Cache as CacheImpl } from './lib/utils/Cache';

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
export { CacheDataType } from './lib/utils/Cache';

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

export class Cache {
  static clear(type?: CacheDataType) {
    CacheImpl.clear(type);
  }

  static setTTL(type: CacheDataType, ttl: number) {
    CacheImpl.setTTL(type, ttl);
  }

  static setMaxPages(maxPages: number) {
    CacheImpl.setMaxEntries(CacheDataType.Page, maxPages);
  }
}

export default {
  album: AlbumAPI,
  track: TrackAPI,
  discovery: DiscoveryAPI,
  image: ImageAPI,
  band: BandAPI,
  tag: TagAPI,
  article: ArticleAPI,
  show: ShowAPI,
  fan: FanAPI,
  search: SearchAPI,
  autocomplete: AutocompleteAPI,
  limiter: {
    album: LimiterAlbumAPI,
    track: LimiterTrackAPI,
    discovery: LimiterDiscoveryAPI,
    image: LimiterImageAPI,
    band: LimiterBandAPI,
    tag: LimiterTagAPI,
    article: LimiterArticleAPI,
    show: LimiterShowAPI,
    fan: LimiterFanAPI,
    search: LimiterSearchAPI,
    autocomplete: LimiterAutocompleteAPI,
    updateSettings: Limiter.updateSettings.bind(Limiter)
  },
  cache: Cache
};
