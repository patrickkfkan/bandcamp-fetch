import BaseAPIWithImageSupport, {
  type BaseAPIWithImageSupportParams
} from '../common/BaseAPIWithImageSupport.js';
import type { ImageFormat } from '../types/Image.js';
import type {
  Playlist,
  PlaylistList,
  PlaylistListContinuation
} from '../types/Playlist.js';
import { URLS } from '../utils/Constants.js';
import { FetchMethod } from '../utils/Fetcher.js';
import type Limiter from '../utils/Limiter.js';
import PlaylistParser from './PlaylistParser.js';

export type PlaylistAPIListParams =
  | {
      fanId: number;
      continuation?: never;
      imageFormat?: string | number | ImageFormat;
    }
  | {
      fanId?: never;
      continuation: PlaylistListContinuation;
      imageFormat?: string | number | ImageFormat;
    };

export interface PlaylistAPIGetPlaylistParams {
  playlistUrl: string;
  artistImageFormat?: string | number | ImageFormat;
  trackImageFormat?: string | number | ImageFormat;
  playlistImageFormat?: string | number | ImageFormat;
  curatorImageFormat?: string | number | ImageFormat;
}

export type PlaylistAPIGetAdditionalTracksParams = (
  | {
      start: number;
      fromId?: never;
    }
  | {
      start?: never;
      fromId: number;
    }
  | {
      start?: never;
      fromId?: never;
    }
) & {
  playlist: Playlist;
  count?: number;
  artistImageFormat?: string | number | ImageFormat;
  trackImageFormat?: string | number | ImageFormat;
};

export default class PlaylistAPI extends BaseAPIWithImageSupport {
  async getPlaylist(params: PlaylistAPIGetPlaylistParams): Promise<Playlist> {
    const html = await this.fetch(params.playlistUrl);
    const opts = {
      playlistUrl: params.playlistUrl,
      imageBaseUrl: (await this.imageAPI.getConstants()).baseUrl,
      artistImageFormat: await this.imageAPI.getFormat(
        params.artistImageFormat,
        21
      ),
      trackImageFormat: await this.imageAPI.getFormat(
        params.trackImageFormat,
        9
      ),
      playlistImageFormat: await this.imageAPI.getFormat(
        params.playlistImageFormat,
        9
      ),
      curatorImageFormat: await this.imageAPI.getFormat(
        params.curatorImageFormat,
        21
      )
    };
    return PlaylistParser.parsePlaylist(html, opts);
  }

  async getAdditionalTracks(
    params: PlaylistAPIGetAdditionalTracksParams
  ): Promise<Playlist['tracks']> {
    const { playlist, fromId, count = 0 } = params;
    if (playlist.additionalTrackIds.length === 0) {
      return [];
    }

    const start = params.start !== undefined && params.start >= 0 ? params.start : undefined;
    const startIndex =
      start ?? (fromId !== undefined ? playlist.additionalTrackIds.findIndex((id) => id === fromId) : 0);
    if (startIndex === -1) {
      throw new Error('fromId not found in playlist additionalTrackIds');
    }

    const trackIds = playlist.additionalTrackIds.slice(
      startIndex,
      count > 0 ? startIndex + count : undefined
    );

    if (trackIds.length === 0) {
      return [];
    }

    const payload = {
      playlist_id: playlist.id,
      track_ids: trackIds
    };
    const json = await this.fetch(
      URLS.PLAYLIST_TRACKS,
      true,
      FetchMethod.POST,
      payload
    );
    return PlaylistParser.parseAdditionalTracks(json, {
      imageBaseUrl: (await this.imageAPI.getConstants()).baseUrl,
      artistImageFormat: await this.imageAPI.getFormat(
        params.artistImageFormat,
        21
      ),
      trackImageFormat: await this.imageAPI.getFormat(
        params.trackImageFormat,
        9
      )
    });
  }

  async list(params: PlaylistAPIListParams): Promise<PlaylistList> {
    const { imageFormat } = params;
    const imageConstants = await this.imageAPI.getConstants();
    const fanId =
      params.continuation ? params.continuation.fanId : params.fanId;
    const nextCursor =
      params.continuation ? params.continuation.nextCursor : undefined;
    const opts = {
      fanId,
      imageBaseUrl: imageConstants.baseUrl,
      attributionImageFormat: await this.imageAPI.getFormat(imageFormat, 21),
      playlistImageFormat: await this.imageAPI.getFormat(imageFormat, 9),
      continuation: params.continuation
    };
    const apiUrl = URLS.PLAYLISTS;
    const payload: Record<string, unknown> = {
      page_fan_id: fanId,
      page_size: 20,
      query: ''
    };
    if (nextCursor) {
      payload['next_cursor'] = nextCursor;
    }
    const json = await this.fetch(apiUrl, true, FetchMethod.POST, payload);

    return PlaylistParser.parseList(json, opts);
  }
}

export class LimiterPlaylistAPI extends PlaylistAPI {
  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async getPlaylist(params: PlaylistAPIGetPlaylistParams): Promise<Playlist> {
    return this.#limiter.schedule(() => super.getPlaylist(params));
  }

  async getAdditionalTracks(
    params: PlaylistAPIGetAdditionalTracksParams
  ): Promise<Playlist['tracks']> {
    return this.#limiter.schedule(() => super.getAdditionalTracks(params));
  }

  async list(params: PlaylistAPIListParams): Promise<PlaylistList> {
    return this.#limiter.schedule(() => super.list(params));
  }
}
