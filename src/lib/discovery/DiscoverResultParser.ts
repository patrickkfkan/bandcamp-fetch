import Album from '../types/Album';
import Artist from '../types/Artist';
import { DiscoverParams, DiscoverResult } from '../types/Discovery';
import { ImageFormat } from '../types/Image';
import { ParseError } from '../utils/Parse';

interface DiscoverResultParseOptions {
  imageBaseUrl: string;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
}

export default class DiscoverResultParser {

  static parseDiscoverResult(json: any, opts: DiscoverResultParseOptions, resultParams: DiscoverParams): DiscoverResult {
    if (typeof json === 'object' && Array.isArray(json.items)) {
      const items = json.items.filter(
        (item: any) => item.type === 'a').map((item: any) => {
        const artist: Artist = {
          type: 'artist',
          name: item.secondary_text
        };
        const album: Album = {
          type: 'album',
          name: item.primary_text,
          genre: item.genre_text,
          artist,
          location: item.location_text
        };
        if (item.url_hints) {
          artist.url = `https://${item.url_hints.subdomain}.bandcamp.com`;
        }
        if (artist.url) {
          album.url = `${artist.url}/album/${item.url_hints.slug}`;
        }
        if (item.art_id && opts.albumImageFormat) {
          album.imageUrl = `${opts.imageBaseUrl}/img/a${item.art_id}_${opts.albumImageFormat.id}.jpg`;
        }
        if (item.featured_track) {
          album.featuredTrack = {
            name: item.featured_track.title,
            duration: item.featured_track.duration,
            streamUrl: item.featured_track.file?.['mp3-128']
          };
          const streamUrlHQ = item.featured_track.file?.['mp3-v0'];
          if (streamUrlHQ) {
            album.featuredTrack.streamUrlHQ = streamUrlHQ;
          }
        }
        if (item.bio_image && opts.artistImageFormat) {
          artist.imageUrl = `${opts.imageBaseUrl}/img/${item.bio_image.image_id}_${opts.artistImageFormat.id}.jpg`;
        }
        return album;
      }) as Album[];

      return {
        items,
        total: json.total_count,
        params: resultParams
      };
    }

    throw new ParseError('Failed to parse discover results: data is missing or has invalid \'items\' field.', json);
  }
}
