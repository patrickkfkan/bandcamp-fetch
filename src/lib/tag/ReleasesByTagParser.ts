import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import Album from '../types/Album';
import { ImageFormat } from '../types/Image';
import { ReleasesByTag } from '../types/Tag';
import Track from '../types/Track';
import { ParseError, stripLineBreaks } from '../utils/Parse';
import { Interpreter } from 'eval5';

interface ReleasesByTagParseOptions {
  imageBaseUrl: string;
  imageFormat: ImageFormat | null;
}

export default class ReleasesByTagParser {

  static parseHubJSPath(html: string) {
    const jsMatch = (/src="((?:.+?)hub-(?:.+?).js)"/g).exec(html);
    return jsMatch?.[1] || null;
  }

  static parseHubJSFilterValueNames(js: string): ReleasesByTag.FilterValueNames {
    const filterValueNames: ReleasesByTag.FilterValueNames = {};
    const tObj = (/"hubs\/digdeeper\/filter_value":(.+?)}\),/gs).exec(js);
    if (tObj?.[1]) {
      const interpreter = new Interpreter({});
      const t = interpreter.evaluate(tObj[1]);
      if (Array.isArray(t?.[0]?.blocks)) {
        const _getValFromBlockAttachment = (attachment: any) => {
          if (attachment?.type === 'translate' && attachment?.nodelist?.[0] !== undefined) {
            return stripLineBreaks(attachment.nodelist[0]).trim();
          }
          else if (typeof attachment === 'string') {
            return stripLineBreaks(attachment).trim();
          }

          return '';

        };
        t[0].blocks.forEach((filterBlock: any) => {
          const filterName = interpreter.evaluate(filterBlock.expression?.split('==')[1]);
          if (filterName && Array.isArray(filterBlock.attachment)) {
            filterBlock
              .attachment.find((a: any) => Array.isArray(a?.blocks))
              .blocks.filter((block: any) => block?.expression)
              .forEach((valueBlock: any) => {
                const value = interpreter.evaluate(valueBlock.expression?.split('==')[1]);
                if (value != null && Array.isArray(valueBlock?.attachment)) {
                  const valueName = valueBlock.attachment.reduce((a: string, c: any) => {
                    const cVal = stripLineBreaks(_getValFromBlockAttachment(c)).trim();
                    if (cVal !== '') {
                      return a !== '' ? `${a} ${cVal}` : cVal;
                    }

                    return a;

                  }, '');
                  //Console.log('value name: ' + valueName);
                  if (valueName) {
                    if (!filterValueNames[filterName]) {
                      filterValueNames[filterName] = {};
                    }
                    filterValueNames[filterName][value] = valueName;
                  }
                }
              });
          }
        });
      }
    }
    return filterValueNames;
  }

  static parseFilters(html: string, filterValueNames: ReleasesByTag.FilterValueNames): ReleasesByTag.Filter[] {
    const $ = cheerioLoad(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);
    const filters: ReleasesByTag.Filter[] = [];
    if (typeof parsed === 'object' && parsed.hub && Array.isArray(parsed.hub.tabs)) {
      const tab = parsed.hub.tabs[1]; // All releases

      const _setOrAdd = (f: any, t: any, prop: string) => {
        const target = f.options.find((f: any) => f.value === t.value);
        if (target) {
          target[prop] = true;
        }
        else if (t.value && t.name) {
          const tAdd = {
            name: t.name,
            value: t.value
          } as any;
          tAdd[prop] = true;
          f.options.push(tAdd);
        }
      };

      if (tab && tab.dig_deeper && typeof tab.dig_deeper.filters === 'object') {
        const filterKeys = Object.keys(tab.dig_deeper.filters);
        filterKeys.forEach((filterName) => {
          const filter: ReleasesByTag.Filter = {
            name: filterName,
            options: []
          };
          const filterData = tab.dig_deeper.filters[filterName];
          if (Array.isArray(filterData?.options)) {
            filterData.options.forEach((filterOption: any) => {
              const valueName = filterValueNames?.[filterName]?.[filterOption?.value] || filterOption?.name || filterOption?.value;
              if (valueName) {
                filter.options.push({
                  name: valueName,
                  value: filterOption.value
                });
              }
            });
          }
          if (typeof filterData?.selected === 'object' && !Array.isArray(filterData.selected)) {
            _setOrAdd(filter, filterData.selected, 'selected');
          }
          else if (Array.isArray(filterData?.selected)) {
            filterData.selected.forEach((s: any) => {
              _setOrAdd(filter, s, 'selected');
            });
          }
          if (filterData?.default) {
            _setOrAdd(filter, filterData.default, 'default');
          }

          filters.push(filter);
        });
      }
    }
    return filters;
  }


  static parseReleases(json: any, opts: ReleasesByTagParseOptions): ReleasesByTag {
    if (typeof json === 'object' && Array.isArray(json.items)) {
      const parsedItems: Array<Album | Track> = [];
      json.items.forEach((item: any) => {
        let mediaItemType: 'album' | 'track' | null;
        switch (item.item_type) {
          case 'a':
            mediaItemType = 'album';
            break;
          case 't':
            mediaItemType = 'track';
            break;
          default:
            mediaItemType = null;
        }
        if (mediaItemType) {
          const mediaItem: Album | Track = {
            type: mediaItemType,
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
            mediaItem.imageUrl = `${opts.imageBaseUrl}/img/a${item.art_id}_${opts.imageFormat.id}.jpg`;
          }
          const streamUrl = item.audio_url?.['mp3-128'];
          const streamUrlHQ = item.audio_url?.['mp3-v0'];
          if (mediaItemType === 'album' && item.featured_track_title) {
            const album = mediaItem as Album;
            album.featuredTrack = {
              name: item.featured_track_title,
              position: item.featured_track_number,
              streamUrl
            };
            if (streamUrlHQ) {
              album.featuredTrack.streamUrlHQ = streamUrlHQ;
            }
          }
          else if (mediaItemType === 'track') {
            (mediaItem as Track).streamUrl = streamUrl;
            if (streamUrlHQ) {
              (mediaItem as Track).streamUrlHQ = streamUrlHQ;
            }
          }
          parsedItems.push(mediaItem);
        }
      });
      return {
        items: parsedItems,
        hasMore: json.more_available,
        filters: JSON.parse(json.filters)
      };
    }

    throw new ParseError('Failed to parse releases by tag: invalid JSON data', json);
  }
}
