import type NameValuePair from '../utils/NameValuePair.js';
import type Album from './Album.js';
import { type ImageFormat } from './Image.js';
import type Shirt from './Shirt.js';
import type Tag from './Tag.js';

/**
 * Options and list of values for each option that can be used to formulate {@link DiscoverParams}.
 *
 * @see DiscoveryAPI.getAvailableOptions
 */
export interface DiscoverOptions {
  categories: (NameValuePair<number> & { slug: string })[];
  genres: (NameValuePair<string> & { id: number; })[];
  subgenres: Record<string, (NameValuePair<string> & { id: number; })[]>;
  customTags: Array<Tag | string>;
  sortBys: NameValuePair<string>[];
  locations: NameValuePair<number>[];
  times: (NameValuePair<number> & { slug: string })[];
}

/**
 * Params used in discovery requests.
 *
 * @see DiscoveryAPI.discover
 */
export interface DiscoverParams {
  genre?: string;
  subgenre?: string;
  category?: number;
  sortBy?: string;
  location?: number;
  time?: number;
  customTags?: string[];
  size?: number;
  /**
   * Value indicating the image format to adopt when constructing image URLs of discovered albums.
   */
  albumImageFormat?: string | number | ImageFormat;
  /**
   * Value indicating the image format to adopt when constructing image URLs of album artists.
   */
  artistImageFormat?: string | number | ImageFormat;
  /**
   * Value indicating the image format to adopt when constructing image URLs of merch items.
   */
  merchImageFormat?: string | number | ImageFormat;
}

export type SanitizedDiscoverParams =
  Pick<DiscoverParams,
    'genre' |
    'subgenre' |
    'customTags'> &
  Required<Pick<DiscoverParams,
    'category' |
    'sortBy' |
    'location' |
    'time' |
    'size'>>

/**
 * Results returned by {@link DiscoveryAPI.discover}.
 */
export interface DiscoverResult {
  /**
   * List of discovered albums .
   */
  items: Array<Album | Shirt>;
  /**
   * Total number of albums discovered.
   */
  total: number;
  /**
   * Sanitized params used in the discovery request.
   */
  params: SanitizedDiscoverParams;

  continuation?: DiscoverResultContinuation;
}

export interface DiscoverResultContinuation extends SanitizedDiscoverParams {
  cursor: string;
  albumImageFormat?: ImageFormat;
  artistImageFormat?: ImageFormat;
  merchImageFormat?: ImageFormat;
}

export interface Location extends NameValuePair<number> {
  type: 'location';
}

export interface TagsAndLocations {
  tags: Tag[];
  locations: Location[];
}