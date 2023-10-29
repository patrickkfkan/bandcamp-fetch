import NameValuePair from '../utils/NameValuePair.js';
import Album from './Album.js';
import { ImageFormat } from './Image.js';

/**
 * Options and list of values for each option that can be used to formulate {@link DiscoverParams}.
 *
 * @see DiscoveryAPI.getAvailableOptions
 */
export interface DiscoverOptions {
  genres: NameValuePair<string>[];
  sortBys: NameValuePair<string>[];
  times: (NameValuePair<number> & { title: string })[];
  subgenres: Record<string, NameValuePair<string>[]>;
  locations: NameValuePair<string>[];
  formats: NameValuePair<string>[];
  artistRecommendationTypes: NameValuePair<string>[];
}

/**
 * Params used in discovery requests.
 *
 * @see DiscoveryAPI.discover
 */
export interface DiscoverParams {
  genre?: string;
  sortBy?: string;
  page?: number;
  time?: number;
  subgenre?: string;
  location?: string;
  format?: string;
  artistRecommendationType?: string;
  /**
   * Value indicating the image format to adopt when constructing image URLs of discovered albums.
   */
  albumImageFormat?: string | number | ImageFormat;
  /**
   * Value indicating the image format to adopt when constructing image URLs of album artists.
   */
  artistImageFormat?: string | number | ImageFormat;
}

/**
 * Results returned by {@link DiscoveryAPI.discover}.
 */
export interface DiscoverResult {
  /**
   * List of discovered albums.
   */
  items: Album[];
  /**
   * Total number of albums discovered.
   */
  total: number;
  /**
   * Sanitized params used in the discovery request.
   */
  params: DiscoverParams;
}
