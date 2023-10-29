import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import Album, { AlbumRelease } from '../types/Album.js';
import { ImageFormat } from '../types/Image.js';
import { ParseError, getAdditionalPropertyValue, normalizeUrl, parseLabelFromBackToLabelLink, parsePublisher, reformatImageUrl } from '../utils/Parse.js';
import Track from '../types/Track.js';

interface AlbumInfoParseOptions {
  imageBaseUrl: string;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
  includeRawData: boolean;
}

export default class AlbumInfoParser {

  static parseInfo(html: string, opts: AlbumInfoParseOptions): Album {
    const $ = cheerioLoad(html);
    const rawBasic = $('script[type="application/ld+json"]').html();
    const rawExtra = decode($('script[data-tralbum]').attr('data-tralbum'));

    if (!rawBasic || !rawExtra) {
      throw new ParseError('Failed to parse album info: data missing \'ld_json\' or \'tralbum\' fields.', html);
    }

    let basic, extra;
    try {
      basic = JSON.parse(rawBasic);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse album info: JSON error in basic data.', rawBasic, error);
    }
    try {
      extra = JSON.parse(rawExtra);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse album info: JSON error in extra data.', rawExtra, error);
    }

    if (!basic || typeof basic !== 'object') {
      throw new ParseError('Failed to parse album info: invalid basic data');
    }
    if (!extra || typeof extra !== 'object') {
      throw new ParseError('Failed to parse album info: invalid extra data');
    }

    const artist: Album['artist'] = {
      name: basic.byArtist.name
    };
    if (basic.byArtist['@id']) {
      artist.url = basic.byArtist['@id'];
    }

    const album: Album = {
      type: 'album',
      name: basic.name,
      url: basic['@id'],
      numTracks: basic.numTracks,
      keywords: basic.keywords,
      description: basic.description || '',
      releaseDate: extra.album_release_date,
      artist,
      releases: [],
      tracks: []
    };
    const imageUrl = reformatImageUrl(basic.image, opts.albumImageFormat);
    if (imageUrl) {
      album.imageUrl = imageUrl;
    }
    const label = parseLabelFromBackToLabelLink($);
    if (label) {
      album.label = {
        name: label.name,
        url: label.url
      };
    }
    const publisher = parsePublisher(basic, opts.artistImageFormat);
    if (publisher) {
      album.publisher = publisher;
    }

    if (!artist.url && publisher?.url) {
      artist.url = publisher.url;
    }

    if (Array.isArray(basic.albumRelease)) {
      const releases = basic.albumRelease.filter(
        (release: any) => release.musicReleaseFormat).map((release: any) => {
        const releaseItem: AlbumRelease = {
          name: release.name,
          format: release.musicReleaseFormat
        };
        if (release.description) {
          releaseItem.description = release.description;
        }
        const releaseUrl = normalizeUrl(release['@id'], album.url);
        if (releaseUrl) {
          releaseItem.url = releaseUrl;
        }
        if (release.image) {
          if (Array.isArray(release.image) && release.image[0]) {
            releaseItem.imageUrl = release.image[0];
          }
        }
        else {
          const releaseImageArtId = getAdditionalPropertyValue(release, 'art_id');
          if (releaseImageArtId && opts.albumImageFormat) {
            release.imageUrl = `${opts.imageBaseUrl}/img/a${releaseImageArtId}_${opts.albumImageFormat.id}.jpg`;
          }
        }
        return releaseItem;
      }) as AlbumRelease[];

      if (releases.length > 0) {
        album.releases = releases;
      }
    }

    if (Array.isArray(extra.trackinfo)) {
      const tracksFromBasicInfo = basic.track?.itemListElement as Array<any>;
      const tracks = extra.trackinfo.map((track: any) => {
        const trackItem: Omit<Track, 'type'> = {
          name: track.title
        };
        if (track.duration !== undefined) {
          trackItem.duration = track.duration;
        }
        const streamUrl = track.file?.['mp3-128'];
        if (streamUrl) {
          trackItem.streamUrl = streamUrl;
        }
        const streamUrlHQ = track.file?.['mp3-v0'];
        if (streamUrlHQ) {
          trackItem.streamUrlHQ = streamUrlHQ;
        }
        if (track.track_num !== undefined) {
          trackItem.position = track.track_num;
        }
        const trackUrl = normalizeUrl(track.title_link, album.url);
        if (trackUrl) {
          trackItem.url = trackUrl;
        }
        else if (trackItem.position !== undefined) {
          const trackFromBasic = tracksFromBasicInfo.find((el: any) => el?.position === trackItem.position);
          const trackUrlFromBasic = trackFromBasic?.item?.['@id'];
          if (trackUrlFromBasic) {
            trackItem.url = trackUrlFromBasic;
          }
        }
        return trackItem;
      }) as Track[];

      if (tracks.length > 0) {
        album.tracks = tracks;
      }
    }

    if (opts.includeRawData) {
      album.raw = { basic, extra };
    }

    return album;
  }
}
