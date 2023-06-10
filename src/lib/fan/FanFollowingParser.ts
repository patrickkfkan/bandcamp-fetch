import { FanItemsContinuation } from '../types/Fan';
import Tag from '../types/Tag';
import UserKind from '../types/UserKind';
import FanItemsBaseParser, { FanItemParseOptions } from './FanItemsBaseParser';

export default class FanFollowingParser extends FanItemsBaseParser {

  static parseFollowingBandsFromPage(html: string, opts: FanItemParseOptions) {
    return this.parsePageItems(html, {
      ...opts,
      dataKey: 'following_bands',
      parseItemFn: this.parseFollowingBand
    });
  }

  static parseFollowingBandsFromContinuation(json: any, continuation: FanItemsContinuation, opts: FanItemParseOptions) {
    return this.parseContinuationItems(json, continuation, {
      ...opts,
      dataKey: 'followeers',
      parseItemFn: this.parseFollowingBand
    });
  }

  static parseFollowingBand(data: any, opts: FanItemParseOptions) {
    if (!data) {
      return null;
    }

    const band: UserKind = {
      name: data.name || null,
      location: data.location || ''
    };
    if (data.url_hints && data.url_hints.subdomain) {
      band.url = `https://${data.url_hints.subdomain}.bandcamp.com`;
    }
    if (data.image_id && opts.imageFormat?.id) {
      band.imageUrl = `${opts.imageBaseUrl}/img/${data.image_id}_${opts.imageFormat.id}.jpg`;
    }

    return band;
  }

  static parseFollowingGenresFromPage(html: string, opts: FanItemParseOptions) {
    return this.parsePageItems(html, {
      ...opts,
      dataKey: 'following_genres',
      parseItemFn: this.parseFollowingGenre
    });
  }

  static parseFollowingGenresFromContinuation(json: any, continuation: FanItemsContinuation, opts: FanItemParseOptions) {
    return this.parseContinuationItems(json, continuation, {
      ...opts,
      dataKey: 'followeers',
      parseItemFn: this.parseFollowingGenre
    });
  }

  static parseFollowingGenre(data: any, opts: FanItemParseOptions) {
    if (!data) {
      return null;
    }

    const genre: Tag = {
      type: 'tag',
      name: data.display_name,
      value: data.token,
      url: data.tag_page_url
    };
    if (Array.isArray(data.art_ids) && opts.imageFormat?.id) {
      genre.imageUrls = data.art_ids.map((artId: number) => `${opts.imageBaseUrl}/img/a${artId}_${opts.imageFormat?.id}.jpg`);
    }

    return genre;
  }
}
