import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { FanItemsContinuation } from '../types/Fan.js';
import { ImageFormat } from '../types/Image.js';

type PageDataKey = 'collection' | 'wishlist' | 'following_genres' | 'following_bands';
type ContinuationDataKey = 'items' | 'followeers';

interface FanItemsParseParams<T> extends FanItemParseOptions {
  dataKey: PageDataKey | ContinuationDataKey;
  parseItemFn: (data: any, opts: FanItemParseOptions, tracklists: any) => T;
}

export interface FanPageItemsResult<T> {
  items: T[];
  total: number;
  continuation: FanItemsContinuation | null;
}

export interface FanContinuationItemsResult<T> {
  items: T[];
  continuation: FanItemsContinuation | null;
}

export interface FanItemParseOptions {
  imageBaseUrl: string;
  imageFormat: ImageFormat | null;
}

export default abstract class FanItemsBaseParser {

  protected static parsePageItems<T>(html: string, params: FanItemsParseParams<T>): FanPageItemsResult<NonNullable<T>> {
    const _getSequenceOrPending = (o: any) => {
      return Array.isArray(o.sequence) && o.sequence.length > 0 ? o.sequence :
        Array.isArray(o.pending_sequence) && o.pending_sequence.length > 0 ? o.pending_sequence : [];
    };

    const $ = cheerioLoad(html);
    const blob = decode($('#pagedata[data-blob]').attr('data-blob'));
    const parsed = JSON.parse(blob);
    const result: FanPageItemsResult<NonNullable<T>> = {
      items: [],
      total: 0,
      continuation: null
    };

    const itemListData = parsed[`${params.dataKey}_data`];
    const itemCache = parsed.item_cache?.[params.dataKey];
    if (itemListData && itemCache) {
      const tracklists = parsed.tracklists?.[params.dataKey];
      const sequence = _getSequenceOrPending(itemListData);
      const parseFn = params.parseItemFn;

      sequence.forEach((itemKey: string) => {
        const parsedItem = parseFn(itemCache[itemKey], params, tracklists);
        if (parsedItem) {
          result.items.push(parsedItem);
        }
      });
      result.total = itemListData.item_count;

      const fanId = parsed.fan_data && parsed.fan_data.fan_id ? parsed.fan_data.fan_id : null;
      if (itemListData.item_count > sequence.length && itemListData.last_token && fanId) {
        result.continuation = {
          fanId,
          token: itemListData.last_token
        };
      }
    }

    return result;
  }

  protected static parseContinuationItems<T>(json: any, continuation: FanItemsContinuation,
    params: FanItemsParseParams<T>): FanContinuationItemsResult<NonNullable<T>> {

    const items = json[params.dataKey] || [];
    const tracklists = json.tracklists || null;
    const parseFn = params.parseItemFn;
    const result: FanContinuationItemsResult<NonNullable<T>> = {
      items: [],
      continuation: null
    };
    items.forEach((data: any) => {
      const parsedItem = parseFn(data, params, tracklists);
      if (parsedItem) {
        result.items.push(parsedItem);
      }
    });
    if (json.more_available && json.last_token) {
      result.continuation = {
        fanId: continuation.fanId,
        token: json.last_token
      };
    }
    return result;
  }
}
