import BaseAPI, { BaseAPIParams } from '../common/BaseAPI';
import { ImageConstants, ImageFormat } from '../types/Image';
import { CacheDataType } from '../utils/Cache';
import { URLS } from '../utils/Constants';
import Limiter from '../utils/Limiter';
import ImageParser from './ImageParser';

export enum ImageFormatFilter {
  /** Album image formats */
  Album = 'album',
  /** Artist / Profile image formats */
  Bio = 'bio'
}

export default class ImageAPI extends BaseAPI {

  /**
   * @internal
   */
  async getConstants(): Promise<ImageConstants> {
    return this.cache.getOrSet(CacheDataType.Constants, 'imageConstants', async () => {
      const html = await this.fetch(URLS.SITE_URL);
      return ImageParser.parseImageConstants(html);
    });
  }

  async getFormat(target?: string | number | ImageFormat, fallbackId?: number): Promise<ImageFormat | null> {
    if (target && typeof target === 'object' && target.id !== undefined && target.name) {
      return target;
    }
    let format;
    if (target !== undefined) {
      const imageConstants = await this.getConstants();
      format = imageConstants.formats.find(
        (format) => (typeof target === 'string' && format.name === target) ||
          (Number.isInteger(target) && format.id === target)) || null;
    }
    if (format) {
      return format;
    }
    if (fallbackId !== undefined) {
      return this.getFormat(fallbackId);
    }
    return null;
  }

  async getFormats(filter?: ImageFormatFilter): Promise<ImageFormat[]> {
    const constants = await this.getConstants();
    if (filter === ImageFormatFilter.Album) {
      return constants.formats.filter( (c) => c.name.startsWith('art_') );
    }
    else if (filter === ImageFormatFilter.Bio) {
      return constants.formats.filter( (c) => c.name.startsWith('bio_') );
    }

    return constants.formats;
  }
}

export class LimiterImageAPI extends ImageAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async getFormats(filter?: ImageFormatFilter | undefined): Promise<ImageFormat[]> {
    return this.#limiter.schedule(() => super.getFormats(filter));
  }

  async getFormat(target?: string | number | ImageFormat | undefined, fallbackId?: number | undefined): Promise<ImageFormat | null> {
    return this.#limiter.schedule(() => super.getFormat(target, fallbackId));
  }
}
