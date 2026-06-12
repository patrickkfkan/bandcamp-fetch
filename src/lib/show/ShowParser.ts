import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { type ImageFormat } from '../types/Image.js';
import type Show from '../types/Show.js';
import { ParseError } from '../utils/Parse.js';
import { URLS } from '../utils/Constants.js';
import type Track from '../types/Track.js';
import { ShowSchema } from './ShowSchema.js';

interface ShowParseOptions {
  showUrl: string;
  imageBaseUrl: string;
  albumImageFormat?: ImageFormat | null;
  artistImageFormat?: ImageFormat | null;
  showImageFormat?: ImageFormat | null;
}

export default class ShowParser {
  static parseShow(html: string, json: any, opts: ShowParseOptions): Show {
    const $ = cheerioLoad(html);
    const blob = decode($('#ArchiveApp[data-blob]').attr('data-blob'));
    let parsedBlob;
    let parsedJson;
    try {
      parsedBlob = JSON.parse(blob);
    } catch (error: any) {
      throw new ParseError(
        'Failed to parse show: JSON error in data-blob.',
        html,
        error
      );
    }
    try {
      parsedJson = ShowSchema.parse(json).tracklist;
    } catch (error: any) {
      throw new ParseError(
        'Failed to parse show: schema error with JSON data.',
        html,
        error
      );
    }

    const appData = typeof parsedBlob === 'object' ? parsedBlob.appData : null;
    const showId = appData?.showId;
    const shows = appData?.shows;
    const showInfo =
      showId && Array.isArray(shows) ?
        shows.find((value) => value.itemId === showId)
      : null;
    const tracksInfo = parsedJson.tracks;
    const audioInfo = parsedJson.compiledTrack;

    if (showInfo) {
      const show: Show = {
        type: 'show',
        name: showInfo.title,
        url: new URL(showInfo.itemUrl, URLS.SITE_URL).toString(),
        publishedDate: showInfo.date,
        description: showInfo.description,
        shortDescription: showInfo.shortDesc,
        imageCaption: showInfo.attribution,
        screenImageUrl: `${opts.imageBaseUrl}/img/${showInfo.imageId}_0`
      };

      if (audioInfo) {
        const { streamUrl, duration } = audioInfo;
        if (streamUrl) {
          show.streamUrl = streamUrl;
        }
        if (duration) {
          show.duration = duration;
        }
      }

      if (opts.showImageFormat?.id) {
        show.imageUrl = `${opts.imageBaseUrl}/img/${showInfo.imageId}_${opts.showImageFormat.id}.jpg`;
      }

      if (tracksInfo) {
        show.tracks = tracksInfo.map((track) => {
          const trackItem: Omit<Track, 'type'> = {
            id: track.id,
            name: track.title,
            url: track.url,
            seekPosition: track.timecode ?? undefined,
            artist: {
              name: track.artistName,
              url: track.bandUrl
            }
          };
          if (opts.albumImageFormat?.id && track.artId) {
            trackItem.imageUrl = `${opts.imageBaseUrl}/img/a${track.artId}_${opts.albumImageFormat.id}.jpg`;
          }
          if (track.album && typeof track.album === 'object') {
            trackItem.album = {
              name: track.album.title,
              url: track.album.url
            };
          }
          return trackItem;
        });
      }

      return show;
    }

    throw new ParseError(
      'Failed to parse show: "appData" not found in data-blob or contains invalid data.',
      blob
    );
  }
}
