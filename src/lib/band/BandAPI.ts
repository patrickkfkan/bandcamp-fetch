import BaseAPIWithImageSupport, { BaseAPIWithImageSupportParams } from '../common/BaseAPIWithImageSupport';
import Album from '../types/Album';
import Artist from '../types/Artist';
import { ImageFormat } from '../types/Image';
import Label, { LabelArtist } from '../types/Label';
import Track from '../types/Track';
import Limiter from '../utils/Limiter';
import { normalizeUrl } from '../utils/Parse';
import BandInfoParser from './BandInfoParser';
import DiscographyParser from './DiscographyParser';
import LabelArtistsParser from './LabelArtistsParser';

export interface BandAPIGetDiscographyParams {
  bandUrl: string;
  imageFormat?: string | number | ImageFormat;
}

export interface BandAPIGetInfoParams {
  bandUrl: string;
  imageFormat?: string | number | ImageFormat;
  labelId?: number;
}

export interface BandAPIGetLabelArtistsParams {
  labelUrl: string;
  imageFormat?: string | number | ImageFormat;
}

export default class BandAPI extends BaseAPIWithImageSupport {

  async getDiscography(params: BandAPIGetDiscographyParams): Promise<Array<Album | Track>> {
    const imageConstants = await this.imageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      bandUrl: params.bandUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat, 9)
    };
    const html = await this.fetch(normalizeUrl('music', params.bandUrl));
    return DiscographyParser.parseDiscography(html, opts);
  }

  async getInfo(params: BandAPIGetInfoParams): Promise<Artist | Label> {
    const opts = {
      bandUrl: params.bandUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat, 21)
    };

    const url = BandAPI.getUrl(params.bandUrl);
    const html = await this.fetch(url);
    const result = BandInfoParser.parseInfo(html, opts);
    // Return if result is complete
    if (BandAPI.isInfoComplete(result)) {
      return result;
    }

    // Info lacking name or label (for artist) - try getting them from music page
    const musicUrl = BandAPI.getUrl(params.bandUrl, 'music');
    const musicHtml = await this.fetch(musicUrl);
    const info = BandInfoParser.parseInfo(musicHtml, opts);
    BandAPI.fillInfo(result, info);
    // Return if result is complete
    if (BandAPI.isInfoComplete(result)) {
      return result;
    }

    // Info is still lacking name or label (for artist) - last try with fetching
    // From discog's first album or track
    const discogItems = await this.getDiscography(params);
    if (discogItems[0]) {
      const url = discogItems[0]?.url;
      if (url) {
        const html = await this.fetch(url);
        const info = BandInfoParser.parseInfo(html, opts);
        BandAPI.fillInfo(result, info);
      }
    }

    if (result.url === null) {
      result.url = params.bandUrl;
    }

    return result;
  }

  async getLabelArtists(params: BandAPIGetLabelArtistsParams): Promise<LabelArtist[]> {
    const opts = {
      labelUrl: params.labelUrl,
      imageFormat: await this.imageAPI.getFormat(params.imageFormat)
    };

    const html = await this.fetch(normalizeUrl('artists', params.labelUrl));
    return LabelArtistsParser.parseLabelArtists(html, opts);
  }

  /**
   * @internal
   */
  protected static getUrl(artistOrLabelUrl: string, path?: string, labelId?: string): string {
    let url = path ? normalizeUrl(path, artistOrLabelUrl) : artistOrLabelUrl;
    if (labelId) {
      url += `/?label=${encodeURIComponent(labelId)}`;
    }
    return url;
  }

  /**
   * @internal
   */
  protected static isInfoComplete(data: Artist | Label) {
    return data.name && data.url &&
      (data.type === 'label' || data.label);
  }

  /**
   * @internal
   */
  protected static fillInfo<T extends Artist | Label>(target: T, src: T): T {
    if (target.name === null) {
      target.name = src.name;
    }
    if (target.url === null) {
      target.url = src.url;
    }
    if (target.type === 'artist' && src.type === 'artist' && !target.label && src.label) {
      target.label = src.label;
    }

    return target;
  }
}

export class LimiterBandAPI extends BandAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async getDiscography(params: BandAPIGetDiscographyParams): Promise<(Album | Track)[]> {
    return this.#limiter.schedule(() => super.getDiscography(params));
  }

  async getInfo(params: BandAPIGetInfoParams): Promise<Artist | Label> {
    return this.#limiter.schedule(() => super.getInfo(params));
  }

  async getLabelArtists(params: BandAPIGetLabelArtistsParams): Promise<LabelArtist[]> {
    return this.#limiter.schedule(() => super.getLabelArtists(params));
  }
}
