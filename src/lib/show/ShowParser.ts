import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { ImageFormat } from '../types/Image';
import Show from '../types/Show';
import { ParseError, splitUrl } from '../utils/Parse';
import { URLS } from '../utils/Constants';
import Track from '../types/Track';

interface ShowParseOptions {
  showUrl: string,
  imageBaseUrl: string,
  albumImageFormat?: ImageFormat | null;
  artistImageFormat?: ImageFormat | null;
  showImageFormat?: ImageFormat | null;
}

export default class ShowParser {
  static parseShow(html: string, opts: ShowParseOptions): Show {
    const $ = cheerioLoad(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    let parsed;
    try {
      parsed = JSON.parse(blob);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse show: JSON error in data-blob.', html, error);
    }

    if (typeof parsed === 'object' && parsed.bcw_data) {
      const showId = this.#getShowIdFromUrl(opts.showUrl);
      let showInfo;
      if (showId !== null) {
        showInfo = parsed.bcw_data?.[showId];
      }
      if (showInfo) {
        const show: Show = {
          type: 'show',
          name: showInfo.title,
          url: this.#getShowUrl(showInfo.show_id),
          publishedDate: showInfo.published_date,
          description: showInfo.desc,
          shortDescription: showInfo.short_desc,
          imageCaption: showInfo.image_caption,
          subtitle: showInfo.subtitle,
          duration: showInfo.audio_duration,
          screenImageUrl: `${opts.imageBaseUrl}/img/${showInfo.show_v2_image_id}_0`
        };
        const mp3StreamUrl = showInfo.audio_stream?.['mp3-128'];
        const opusStreamUrl = showInfo.audio_stream?.['opus-lo'];
        if (mp3StreamUrl || opusStreamUrl) {
          show.streamUrl = {};
          if (mp3StreamUrl) {
            show.streamUrl['mp3-128'] = mp3StreamUrl;
          }
          if (opusStreamUrl) {
            show.streamUrl['opus-lo'] = opusStreamUrl;
          }
        }
        if (opts.showImageFormat?.id) {
          show.imageUrl = `${opts.imageBaseUrl}/img/${showInfo.show_v2_image_id}_${opts.showImageFormat.id}.jpg`;
        }
        show.tracks = showInfo.tracks.map((track: any) => {
          const trackItem: Omit<Track, 'type'> = {
            name: track.title,
            url: track.track_url,
            seekPosition: track.timecode,
            artist: {
              name: track.artist,
              url: `https://${track.url_hints.subdomain}.bandcamp.com`,
              location: track.location_text
            }
          };
          if (opts.albumImageFormat?.id) {
            trackItem.imageUrl = `${opts.imageBaseUrl}/img/a${track.track_art_id}_${opts.albumImageFormat.id}.jpg`;
          }
          if (opts.artistImageFormat?.id && trackItem.artist) {
            trackItem.artist.imageUrl = `${opts.imageBaseUrl}/img/${track.bio_image_id}_${opts.artistImageFormat.id}.jpg`;
          }
          if (track.album_title) {
            trackItem.album = {
              name: track.album_title,
              url: track.album_url
            };
          }
          return trackItem;
        });

        return show;
      }
    }

    throw new ParseError('Failed to parse show: missing bcw_data.', html);
  }

  static #getShowIdFromUrl(showUrl: string) {
    const params = splitUrl(showUrl).searchParams;
    return params.get('show');
  }

  static #getShowUrl(showId: string): string {
    return `${URLS.SITE_URL}/?show=${showId}`;
  }
}