import { URL } from 'url';
import type Album from '../types/Album.js';
import type Artist from '../types/Artist.js';
import { type DiscoverOptions, type DiscoverResult, type SanitizedDiscoverParams } from '../types/Discovery.js';
import { type ImageFormat } from '../types/Image.js';
import type Shirt from '../types/Shirt.js';
import { ParseError } from '../utils/Parse.js';

interface DiscoverResultParseOptions {
  imageBaseUrl: string;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
  merchImageFormat: ImageFormat | null;
}

export default class DiscoverResultParser {

  static parseDiscoverResult(json: any, opts: DiscoverResultParseOptions, params: SanitizedDiscoverParams, availableOptions: DiscoverOptions): DiscoverResult {
    if (typeof json === 'object' && Array.isArray(json.results)) {
      
      const items = (json.results as any[]).reduce<Array<Album | Shirt>>((result, item: any) => {
        switch (item.result_type) {
          case 'a': {
            const album = this.#parseAlbum(item, opts, availableOptions);
            result.push(album);
            break;
          }
          case 's': {
            const shirt = this.#parseShirt(item, opts);
            result.push(shirt);
            break;
          }
        }
        return result;
      }, []);

      const parsed: DiscoverResult = {
        items,
        total: json.result_count,
        params
      };

      if (json.cursor) {
        parsed.continuation = {
          ...params,
          cursor: json.cursor
        };
        if (opts.albumImageFormat) {
          parsed.continuation.albumImageFormat = opts.albumImageFormat;
        }
        if (opts.artistImageFormat) {
          parsed.continuation.artistImageFormat = opts.artistImageFormat;
        }
        if (opts.merchImageFormat) {
          parsed.continuation.merchImageFormat = opts.merchImageFormat;
        }
      }

      return parsed;
    }

    throw new ParseError('Failed to parse discover results: data is missing or has invalid \'results\' field.', json);
  }

  static #parseAlbum(item: any, opts: DiscoverResultParseOptions, availableOptions: DiscoverOptions) {
    const artist: Artist = {
      type: 'artist',
      name: item.album_artist || item.band_name
    };
    const album: Album = {
      type: 'album',
      id: item.item_id,
      name: item.title,
      artist,
      location: item.band_location
    };
    const genre = item.band_genre_id !== undefined ?
      availableOptions.genres.find((genre) => item.band_genre_id === genre.id) : null;
    if (genre?.name) {
      album.genre = genre.name;
    }
    if (item.band_url) {
      artist.url = this.#stripFromDiscoverPage(item.band_url);
    }
    if (item.item_url) {
      album.url = this.#stripFromDiscoverPage(item.item_url);
    }
    if (item.primary_image?.image_id && opts.albumImageFormat) {
      album.imageUrl = this.#getImageURL(item.primary_image.image_id, opts.imageBaseUrl, opts.albumImageFormat, 'a');
    }
    if (item.featured_track) {
      album.featuredTrack = {
        id: item.featured_track.id,
        name: item.featured_track.title,
        streamUrl: item.featured_track.stream_url
      };
    }
    if (item.band_image?.image_id && opts.artistImageFormat) {
      artist.imageUrl = this.#getImageURL(item.band_image.image_id, opts.imageBaseUrl, opts.artistImageFormat);
    }
    if (item.label_name) {
      album.label = {
        name: item.label_name
      };
      if (item.label_url) {
        album.label.url = this.#stripFromDiscoverPage(item.label_url);
      }
    }
    return album;
  }

  static #parseShirt(item: any, opts: DiscoverResultParseOptions) {
    const shirt: Shirt = {
      type: 'shirt',
      name: item.title,
    };
    if (item.item_url) {
      shirt.url = this.#stripFromDiscoverPage(item.item_url);
    }
    if (item.primary_image?.image_id && opts.merchImageFormat) {
      shirt.imageUrl = {
        primary: this.#getImageURL(item.primary_image.image_id, opts.imageBaseUrl, opts.merchImageFormat)
      };
      if (Array.isArray(item.addl_images) && item.addl_images.length > 0) {
        const additionalImages: string[] = [];
        for (const img of item.addl_images) {
          if (typeof img === 'object' && img.image_id) {
            additionalImages.push(this.#getImageURL(img.image_id, opts.imageBaseUrl, opts.merchImageFormat));
          }
        }
        if (additionalImages.length > 0) {
          shirt.imageUrl.additional = additionalImages;
          // eslint-disable-next-line @typescript-eslint/no-deprecated
          shirt.imageUrl.secondary = additionalImages[0];
        }
      }
    }
    if (item.release_date) {
      shirt.releaseDate = item.release_date;
    }
    if (item.band_name) {
      const artist: Artist = {
        type: 'artist',
        name: item.band_name
      };
      if (item.band_url) {
        artist.url = this.#stripFromDiscoverPage(item.band_url);
      }
      if (item.band_image?.image_id && opts.artistImageFormat) {
        artist.imageUrl = this.#getImageURL(item.band_image.image_id, opts.imageBaseUrl, opts.artistImageFormat);
      }
      shirt.artist = artist;
    }
    return shirt;
  }

  static #getImageURL(imageId: string, imageBaseUrl: string, format: ImageFormat, prefix = '') {
    return `${imageBaseUrl}/img/${prefix}${imageId}_${format.id}.jpg`;
  }

  static #stripFromDiscoverPage(url: string) {
    const urlObj = new URL(url);
    const fromValue = urlObj.searchParams.get('from')?.trim();
    if (fromValue === 'discover_page') {
      urlObj.searchParams.delete('from');
    }
    return urlObj.toString();
  }
}
