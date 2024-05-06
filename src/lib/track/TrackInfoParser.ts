import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { ImageFormat } from '../types/Image.js';
import Track from '../types/Track.js';
import { ParseError, parseLabelFromBackToLabelLink, parsePublisher, reformatImageUrl, splitUrl } from '../utils/Parse.js';
import AlbumInfoParser from '../album/AlbumInfoParser.js';

interface TrackInfoParseOptions {
  trackUrl?: string;
  imageBaseUrl: string;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
  includeRawData: boolean;
}

export default class TrackInfoParser {

  static parseInfo(html: string, opts: TrackInfoParseOptions): Track {
    // Some tracks don't have a dedicated '/track' url,
    // But take this form instead: {albumUrl}#t{x}, where 'x' is the
    // Track position. These tracks are not displayed as links nor playable.
    // Since the album page is actually loaded, we can return the track info
    // From the album data with parseAlbumInfo().
    if (opts.trackUrl) {
      const { path: trackUrlPath, hash: trackUrlHash } = splitUrl(opts.trackUrl);
      if (trackUrlPath && trackUrlHash) {
        const matchTrackPosInUrl = (/^\/(album)\/(.+)#t(\d+)/).exec(trackUrlPath + trackUrlHash);
        if (matchTrackPosInUrl && matchTrackPosInUrl[3]) {
          return this.#parseTrackInfoFromAlbum(html, opts, Number(matchTrackPosInUrl[3]));
        }
      }
    }

    const $ = cheerioLoad(html);
    const rawBasic = $('script[type="application/ld+json"]').html();
    const rawExtra = decode($('script[data-tralbum]').attr('data-tralbum'));

    if (!rawBasic || !rawExtra) {
      throw new ParseError('Failed to parse track info: data missing \'ld_json\' or \'tralbum\' fields.', html);
    }

    let basic, extra;
    try {
      basic = JSON.parse(rawBasic);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse track info: JSON error in basic data.', rawBasic, error);
    }
    try {
      extra = JSON.parse(rawExtra);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse track info: JSON error in extra data.', rawExtra, error);
    }

    if (!basic || typeof basic !== 'object') {
      throw new ParseError('Failed to parse track info: invalid basic data');
    }
    if (!extra || typeof extra !== 'object') {
      throw new ParseError('Failed to parse track info: invalid extra data');
    }

    const track: Track = {
      type: 'track',
      name: basic.name,
      url: basic['@id']
    };

    const imageUrl = reformatImageUrl(basic.image, opts.albumImageFormat);
    if (imageUrl) {
      track.imageUrl = imageUrl;
    }

    if (extra.current?.release_date) {
      track.releaseDate = extra.current.release_date;
    }

    const duration = extra.trackinfo?.[0]?.duration;
    if (duration !== undefined) {
      track.duration = duration;
    }

    const streamUrl = extra.trackinfo?.[0]?.file?.['mp3-128'];
    if (streamUrl) {
      track.streamUrl = streamUrl;
    }

    const streamUrlHQ = extra.trackinfo?.[0]?.file?.['mp3-v0'];
    if (streamUrlHQ) {
      track.streamUrlHQ = streamUrlHQ;
    }

    let byArtist;
    if (basic.inAlbum?.byArtist) {
      byArtist = basic.inAlbum.byArtist;
    }
    else {
      byArtist = basic.byArtist;
    }
    if (byArtist) {
      track.artist = {
        name: byArtist.name
      };
      if (byArtist['@id']) {
        track.artist.url = byArtist['@id'];
      }
    }

    const publisher = parsePublisher(basic, opts.artistImageFormat);
    if (publisher) {
      track.publisher = publisher;
    }

    if (track.artist && !track.artist.url && publisher?.url) {
      track.artist.url = publisher.url;
    }

    const label = parseLabelFromBackToLabelLink($);
    if (label) {
      track.label = {
        name: label.name,
        url: label.url
      };
    }

    if (basic.inAlbum?.['@id']) {
      track.album = {
        name: basic.inAlbum.name,
        url: basic.inAlbum['@id'],
        releaseDate: extra.album_release_date
      };
      track.releaseDate = extra.album_release_date;
    }

    if (opts.includeRawData) {
      track.raw = { basic, extra };
    }

    return track;
  }

  static #parseTrackInfoFromAlbum(html: string, opts: TrackInfoParseOptions, trackPosition: number): Track {
    const album = AlbumInfoParser.parseInfo(html, opts);
    const trackData = album.tracks?.[trackPosition - 1];
    if (trackData) {
      const track: Track = {
        type: 'track',
        name: trackData.name,
        url: trackData.url,
        imageUrl: album.imageUrl,
        releaseDate: album.releaseDate,
        duration: trackData.duration,
        artist: album.artist,
        publisher: album.publisher,
        label: album.label,
        album: {
          name: album.name,
          url: album.url,
          releaseDate: album.releaseDate
        }
      };
      if (trackData.streamUrl) {
        track.streamUrl = trackData.streamUrl;
      }
      return track;
    }

    throw new ParseError(`Track not found in album (position: ${trackPosition}`, html);
  }
}
