import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { type z } from 'zod';
import type { ImageFormat } from '../types/Image.js';
import type {
  Playlist,
  PlaylistList,
  PlaylistListContinuation,
  PlaylistTrack
} from '../types/Playlist.js';
import { PlaylistListResponseSchema } from './PlaylistListSchema.js';
import { ParseError } from '../utils/Parse.js';
import {
  PlaylistResponseSchema,
  PlaylistTrackSchema
} from './PlaylistSchema.js';

export interface PlaylistParseOptions {
  playlistUrl: string;
  imageBaseUrl: string;
  curatorImageFormat: ImageFormat | null;
  playlistImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
  trackImageFormat: ImageFormat | null;
}

export interface PlaylistTrackParseOptions {
  imageBaseUrl: string;
  artistImageFormat: ImageFormat | null;
  trackImageFormat: ImageFormat | null;
}

export interface PlaylistListParseOptions {
  fanId: number;
  imageBaseUrl: string;
  attributionImageFormat: ImageFormat | null;
  playlistImageFormat: ImageFormat | null;
  continuation?: PlaylistListContinuation;
}

export default class PlaylistParser {
  static parsePlaylist(html: string, opts: PlaylistParseOptions): Playlist {
    const $ = cheerioLoad(html);
    const blob = decode($('#PlaylistPage[data-blob]').attr('data-blob'));
    let parsedBlob;
    try {
      parsedBlob = JSON.parse(blob);
    } catch (error: any) {
      throw new ParseError(
        'Failed to parse show: JSON error in data-blob.',
        html,
        error
      );
    }
    const appData = typeof parsedBlob === 'object' ? parsedBlob.appData : null;
    if (!appData || typeof appData !== 'object') {
      throw new ParseError(
        'Failed to parse playlist: appData not found or has invalid type.',
        html
      );
    }
    const parsed = PlaylistResponseSchema.parse(appData);
    return {
      id: parsed.playlistId,
      title: parsed.title,
      description: parsed.description,
      imageUrl:
        opts.playlistImageFormat && parsed.imageId !== null ?
          `${opts.imageBaseUrl}/img/${parsed.imageId}_${opts.playlistImageFormat.id}.jpg`
        : null,
      isPrivate: parsed.isPrivate,
      url: opts.playlistUrl,
      modifiedDate: parsed.modDate,
      numTracks: parsed.totalNumTracks,
      duration: parsed.totalDuration,
      tracks: parsed.tracks.map((track) => this.#mapParsedTrack(track, opts)),
      additionalTrackIds: parsed.additionalTrackIds || [],
      curator: {
        username: parsed.curator.username,
        name: parsed.curator.name,
        bio: parsed.curator.bio,
        location: parsed.curator.location,
        imageUrl:
          opts.curatorImageFormat && parsed.curator.imageId !== null ?
            `${opts.imageBaseUrl}/img/${parsed.curator.imageId}_${opts.curatorImageFormat.id}.jpg`
          : null,
        collectionSize: parsed.curator.collectionSize
      }
    };
  }

  static #mapParsedTrack(
    track: z.infer<typeof PlaylistTrackSchema>,
    opts: PlaylistTrackParseOptions
  ): PlaylistTrack {
    return {
      id: track.id,
      title: track.title,
      url: track.url,
      duration: track.duration,
      artist: {
        id: track.bandId,
        name: track.artistName,
        imageUrl:
          opts.artistImageFormat && track.bandImageId !== null ?
            `${opts.imageBaseUrl}/img/${track.bandImageId}_${opts.artistImageFormat.id}.jpg`
          : null
      },
      album:
        track.album ?
          {
            id: track.album.id,
            title: track.album.title,
            url: track.album.url
          }
        : null,
      imageUrl:
        opts.trackImageFormat && track.artId !== null ?
          `${opts.imageBaseUrl}/img/a${track.artId}_${opts.trackImageFormat.id}.jpg`
        : null,
      streamUrl: track.streamUrl ?? null
    };
  }

  static parseAdditionalTracks(
    json: unknown,
    opts: PlaylistTrackParseOptions
  ): PlaylistTrack[] {
    const parsed = PlaylistTrackSchema.array().parse(json);
    return parsed.map((track) => this.#mapParsedTrack(track, opts));
  }

  static parseList(
    json: unknown,
    opts: PlaylistListParseOptions
  ): PlaylistList {
    const parsed = PlaylistListResponseSchema.parse(json);
    // Continuation results may not include total count, so we fall back to
    // the value obtained from the initial request, which is stored in the continuation data
    // of each subsequent request.
    const total =
      parsed.totalCount ?? opts.continuation?.total ?? parsed.items.length;
    return {
      items: parsed.items.map((item) => ({
        attribution: {
          accountType: 'fan',
          name: item.attribution.name,
          imageUrl:
            opts.attributionImageFormat && item.attribution.imageId !== null ?
              `${opts.imageBaseUrl}/img/${item.attribution.imageId}_${opts.attributionImageFormat.id}.jpg`
            : null,
          url: item.attribution.url
        },
        playlistId: item.itemId,
        description: item.description,
        imageUrl:
          opts.playlistImageFormat && item.imageId !== null ?
            `${opts.imageBaseUrl}/img/${item.imageId}_${opts.playlistImageFormat.id}.jpg`
          : null,
        isFeatured: item.isFeatured ?? false,
        isPrivate: item.isPrivate,
        url: item.itemUrl,
        modifiedDate: item.modDate,
        title: item.title,
        numTracks: item.totalNumTracks,
        duration: item.totalDuration
      })),
      total,
      continuation:
        parsed.nextCursor ?
          {
            fanId: opts.fanId,
            nextCursor: parsed.nextCursor,
            total
          }
        : null
    };
  }
}
