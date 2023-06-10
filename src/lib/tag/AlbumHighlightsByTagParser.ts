import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { ImageFormat } from '../types/Image';
import { ParseError } from '../utils/Parse';
import { AlbumHighlightsByTag } from '../types/Tag';
import Album from '../types/Album';

interface AlbumHighlightsByTagParseOptions {
  imageBaseUrl: string;
  imageFormat: ImageFormat | null;
}

export default class AlbumHighlightsByTagParser {

  static parseHighlights(html: string, opts: AlbumHighlightsByTagParseOptions): AlbumHighlightsByTag[] {
    const $ = cheerioLoad(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    let parsed;
    try {
      parsed = JSON.parse(blob);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse album highlights by tag: JSON error in data-blob', html, error);
    }
    const collections: AlbumHighlightsByTag[] = [];
    if (Array.isArray(parsed?.hub?.tabs?.[0]?.collections)) {

      parsed.hub.tabs[0].collections.forEach((collection: any) => {
        if (collection?.name && collection?.render?.title) {
          const collectionRes: AlbumHighlightsByTag = {
            name: collection.name,
            title: collection.render.title,
            items: []
          };
          collection.items.forEach((item: any) => {
            if (item?.item_type === 'a') {
              const album: Album = {
                type: 'album',
                name: item.title,
                url: item.tralbum_url,
                imageUrl: '',
                genre: item.genre,
                artist: {
                  name: item.artist,
                  url: item.band_url
                }
              };
              if (item.art_id && opts.imageFormat?.id) {
                album.imageUrl = `${opts.imageBaseUrl}/img/a${item.art_id}_${opts.imageFormat.id}.jpg`;
              }
              if (item.featured_track_title) {
                album.featuredTrack = {
                  name: item.featured_track_title,
                  streamUrl: item.audio_url?.['mp3-128']
                };
              }
              collectionRes.items.push(album);
            }
          });
          if (collectionRes.items.length > 0) {
            collections.push(collectionRes);
          }
        }
      });
    }
    return collections;
  }
}
