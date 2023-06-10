import { load as cheerioLoad } from 'cheerio';
import { ImageFormat } from '../types/Image';
import { reformatImageUrl, stripLineBreaks, stripMultipleWhitespaces, substrAfter, substrBefore } from '../utils/Parse';
import { SearchResultAlbum, SearchResultAny, SearchResultArtist, SearchResultFan, SearchResultItem, SearchResultLabel, SearchResultTrack, SearchResults } from '../types/Search';
import { SearchItemType } from './SearchAPI';

const VALID_RESULT_TYPES = [ 'artist', 'label', 'album', 'track', 'fan' ];

interface SearchResultsParseOptions {
  itemType: SearchItemType;
  albumImageFormat: ImageFormat | null;
  artistImageFormat: ImageFormat | null;
}

export default class SearchResultsParser {

  static parseResults(html: string, opts: SearchResultsParseOptions): SearchResults<SearchResultAny> {
    const $ = cheerioLoad(html);
    const resultsList = $('li.searchresult');
    const items: Array<SearchResultAny> = [];
    resultsList.each((i, resultListItem: any) => {
      resultListItem = $(resultListItem);
      const resultInfo = resultListItem.find('.result-info');

      // Common info
      const resultType = resultInfo.children('.itemtype').text().trim().toLowerCase();
      const imgSrc = $('.art img', resultListItem).attr('src');
      const heading = $('.heading a', resultInfo);
      const name = heading.text().trim();
      const url = resultInfo.find('.itemurl').text().trim();
      const imageUrl = reformatImageUrl(imgSrc, resultType === 'album' || resultType === 'track' ? opts.albumImageFormat : opts.artistImageFormat);

      if (!this.#matchSearchItemTypeWithResult(opts.itemType, resultType) || !name || !url) {
        return true;
      }

      // Other info
      let location, genre, tags, artist, numTracks, duration, releaseDate, album;
      resultInfo.find('.subhead, .genre, .tags, .released, .length').each((i: number, info: any) => {
        info = $(info);
        if (info.hasClass('subhead')) {
          if (resultType === 'artist' || resultType === 'label') {
            location = info.text().trim();
          }
          else if (resultType === 'album' || resultType === 'track') {
            const infoText = info.text();
            artist = substrAfter(infoText, 'by ')?.trim();

            if (resultType === 'track') {
              album = substrBefore(infoText, ' by');
              if (album) {
                album = substrAfter(album, 'from ')?.trim();
              }
            }
          }
          return true;
        }
        if (info.hasClass('genre')) {
          genre = substrAfter(info.text(), 'genre: ')?.trim();
          return true;
        }
        if (info.hasClass('tags')) {
          tags = substrAfter(info.text(), 'tags:');
          if (tags) {
            tags = stripLineBreaks(stripMultipleWhitespaces(tags)).trim();
          }
          return true;
        }
        if (info.hasClass('released')) {
          releaseDate = substrAfter(info.text(), 'released ')?.trim();
          return true;
        }
        if (info.hasClass('length')) {
          const lengthParts = info.text().split(',');
          const tracksText = lengthParts[0];
          const minutesText = lengthParts[1];
          const numTracksStr = tracksText ? substrBefore(tracksText, 'tracks') : null;
          if (numTracksStr) {
            numTracks = parseInt(numTracksStr, 10);
          }
          const durationStr = minutesText ? substrBefore(minutesText, 'minutes') : null;
          if (durationStr) {
            duration = parseInt(durationStr, 10) * 60;
          }
        }
      });

      const base: Omit<SearchResultItem, 'type'> = {
        name: heading.text().trim(),
        url: resultInfo.find('.itemurl').text().trim() || ''
      };
      if (imageUrl) {
        base.imageUrl = imageUrl;
      }

      if (resultType === 'artist') {
        const artist: SearchResultArtist = {
          type: 'artist',
          ...base
        };
        if (location) artist.location = location;
        if (genre) artist.genre = genre;
        if (tags) artist.tags = tags;
        items.push(artist);
      }
      else if (resultType === 'label') {
        const label: SearchResultLabel = {
          type: 'label',
          ...base
        };
        if (location) label.location = location;
        items.push(label);
      }
      else if (resultType === 'album') {
        const album: SearchResultAlbum = {
          type: 'album',
          ...base
        };
        if (artist) album.artist = artist;
        if (numTracks) album.numTracks = numTracks;
        if (duration) album.duration = duration;
        if (releaseDate) album.releaseDate = releaseDate;
        if (tags) album.tags = tags;
        items.push(album);
      }
      else if (resultType === 'track') {
        const track: SearchResultTrack = {
          type: 'track',
          ...base
        };
        if (artist) track.artist = artist;
        if (album) track.album = album;
        if (releaseDate) track.releaseDate = releaseDate;
        if (tags) track.tags = tags;
        items.push(track);
      }
      else if (resultType === 'fan') {
        const fan: SearchResultFan = {
          type: 'fan',
          ...base
        };
        if (genre) fan.genre = genre;
        items.push(fan);
      }
    });

    let totalPages = parseInt($('.pagelist').find('.pagenum').last().text(), 10);
    if (isNaN(totalPages)) {
      totalPages = 1;
    }

    return {
      items,
      totalPages
    };
  }

  static #matchSearchItemTypeWithResult(searchType: SearchItemType, resultType: string) {
    if (searchType === SearchItemType.All && VALID_RESULT_TYPES.includes(resultType)) {
      return true;
    }

    switch (searchType) {
      case SearchItemType.ArtistsAndLabels:
        return resultType === 'artist' || resultType === 'label';
      case SearchItemType.Albums:
        return resultType === 'album';
      case SearchItemType.Tracks:
        return resultType === 'track';
      case SearchItemType.Fans:
        return resultType === 'fan';
      default:
        return false;
    }
  }
}
