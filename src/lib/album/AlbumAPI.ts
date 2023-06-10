import Album from '../types/Album';
import { ImageFormat } from '../types/Image';
import ImageAPI from '../image/ImageAPI';
import { fetchPage } from '../utils/Fetch';
import AlbumInfoParser from './AlbumInfoParser';
import Limiter from '../utils/Limiter';

export interface AlbumAPIGetInfoParams {
  albumUrl: string;
  albumImageFormat?: string | number | ImageFormat;
  artistImageFormat?: string | number | ImageFormat;
  includeRawData?: boolean;
}

export default class AlbumAPI {
  static async getInfo(params: AlbumAPIGetInfoParams): Promise<Album> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await ImageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params.artistImageFormat, 21),
      includeRawData: params.includeRawData !== undefined ? params.includeRawData : false
    };
    const html = await fetchPage(params.albumUrl);
    return AlbumInfoParser.parseInfo(html, opts);
  }
}

export class LimiterAlbumAPI extends AlbumAPI {
  static async getInfo(params: AlbumAPIGetInfoParams): Promise<Album> {
    return Limiter.schedule(() => super.getInfo(params));
  }
}
