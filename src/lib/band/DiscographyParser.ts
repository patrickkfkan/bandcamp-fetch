import { load as cheerioLoad } from 'cheerio';
import { ImageFormat } from '../types/Image';
import { normalizeUrl, reformatImageUrl, splitUrl } from '../utils/Parse';
import Track from '../types/Track';
import Album from '../types/Album';
import TrackInfoParser from '../track/TrackInfoParser';
import AlbumInfoParser from '../album/AlbumInfoParser';

interface DiscographyParseOptions {
  imageBaseUrl: string;
  bandUrl: string;
  imageFormat: ImageFormat | null;
}

export default class DiscographyParser {
  static parseDiscography(html: string, opts: DiscographyParseOptions): Array<Album | Track> {
    const $ = cheerioLoad(html);

    // One-album / one-track artists don't have a discography page.
    // The page for the album or track will be loaded instead.
    // Check if this is the case and handle accordingly.
    const currentAlbumOrTrack = $('script[type="application/ld+json"]');
    let isOneTrack = false,
      isOneAlbum = false;
    if (currentAlbumOrTrack.length) {
      let currentAlbumOrTrackData;
      const currentAlbumOrTrackHtml = currentAlbumOrTrack.html();
      if (currentAlbumOrTrackHtml) {
        try {
          currentAlbumOrTrackData = JSON.parse(currentAlbumOrTrackHtml);
        }
        catch (error: any) {
          currentAlbumOrTrackData = null;
        }
      }
      if (currentAlbumOrTrackData && typeof currentAlbumOrTrackData === 'object') {
        // Check if there is a 'discography' element and, if there is, whether
        // It is hidden or has only one track / album child
        const discographyEl = $('#discography');
        if (discographyEl.length === 0 || discographyEl.css('display') === 'none' || discographyEl.find('li').length === 1) {
          const currentAlbumOrTrackUrl = splitUrl(currentAlbumOrTrackData['@id']);
          isOneTrack = !!currentAlbumOrTrackUrl.path.startsWith('/track/');
          isOneAlbum = !!currentAlbumOrTrackUrl.path.startsWith('/album/');
        }
      }
    }
    if (isOneTrack || isOneAlbum) {
      const newOpts = {
        imageBaseUrl: opts.imageBaseUrl,
        albumImageFormat: opts.imageFormat,
        artistImageFormat: null,
        includeRawData: false
      };
      const info = isOneTrack ? TrackInfoParser.parseInfo(html, newOpts) : AlbumInfoParser.parseInfo(html, newOpts);
      if (info.artist !== undefined) {
        return [ {
          ...info,
          artist: {
            name: info.artist.name
          }
        } ];
      }
      return [ info ];
    }

    const allLinks = $('a');
    const items: Record<string, Partial<Album | Track>> = {};
    const defaultArtistName = $('#band-name-location').find('.title').text();
    allLinks.each((index, link) => {
      const linkEl = $(link);
      const href = linkEl.attr('href');
      if (typeof href !== 'string' || href === '') {
        return true;
      }
      let host, pathname;
      // Regex taken from:
      // https://github.com/masterT/bandcamp-scraper/blob/master/lib/htmlParser.js
      if ((/^\/(track|album)\/(.+)$/).exec(href)) { // Relative url starting with '/track' or '/album'
        host = opts.bandUrl;
        pathname = href;
      }
      else { // Full url (label discography)
        try {
          const _url = splitUrl(href);
          if (_url.path && (/^\/(track|album)\/(.+)$/).exec(_url.path)) {
            host = _url.base;
            pathname = _url.path;
          }
        }
        catch (e) {
          return true;
        }
      }
      if (host !== undefined && pathname !== undefined) {
        const url = normalizeUrl(pathname, host);
        if (items[url] === undefined) {
          items[url] = {
            type: pathname.startsWith('/track/') ? 'track' : 'album'
          };
        }
        // Link element wraps around img and title
        const img = linkEl.find('img');
        if (img.length) {
          const imgSrc = img.attr('data-original') || img.attr('src');
          const imageUrl = reformatImageUrl(imgSrc, opts.imageFormat);
          if (imageUrl) {
            items[url].imageUrl = imageUrl;
          }
        }
        const title = linkEl.find('.title');
        if (title.length) {
          // For labels, title element contains artist name (when it doesn't, then artist = label).
          // For artists, title element may also contain an artist name which overrides the default
          const artistNameEl = title.find('.artist-override');
          if (artistNameEl.length) {
            const artistName = artistNameEl.text().trim();
            artistNameEl.remove();
            items[url].artist = {
              name: artistName
            };
          }
          else {
            items[url].artist = {
              name: defaultArtistName
            };
          }
          items[url].name = title.text().trim();
        }

        if (img.length > 0 && title.length > 0) {
          items[url].name = linkEl.text().trim();
        }
      }
    });
    const results = [];
    for (const [ url, props ] of Object.entries(items)) {
      if (props.type && props.name) {
        const item: Album | Track = {
          url,
          type: props.type,
          name: props.name,
          artist: props.artist || {
            name: defaultArtistName
          }
        };
        if (props.imageUrl) {
          item.imageUrl = props.imageUrl;
        }
        results.push(item);
      }
    }

    return results;
  }
}