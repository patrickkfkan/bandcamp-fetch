import ImageAPI from '../image/ImageAPI';
import { ImageFormat } from '../types/Image';
import Show from '../types/Show';
import { URLS } from '../utils/Constants';
import { fetchPage } from '../utils/Fetch';
import Limiter from '../utils/Limiter';
import ShowListParser from './ShowListParser';
import ShowParser from './ShowParser';

export interface ShowAPIGetShowParams {
  showUrl: string,
  albumImageFormat?: string | number | ImageFormat;
  artistImageFormat?: string | number | ImageFormat;
  showImageFormat?: string | number | ImageFormat;
}

export interface ShowAPIListParams {
  imageFormat?: string | number | ImageFormat;
}

export default class ShowAPI {

  static async getShow(params: ShowAPIGetShowParams): Promise<Show> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      showUrl: params.showUrl,
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await ImageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params.artistImageFormat, 21),
      showImageFormat: await ImageAPI.getFormat(params.showImageFormat, 25)
    };
    const html = await fetchPage(params.showUrl);
    return ShowParser.parseShow(html, opts);
  }

  static async list(params?: ShowAPIListParams) {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      imageFormat: await ImageAPI.getFormat(params?.imageFormat, 25)
    };
    const json = await fetchPage(URLS.SHOWS, true);
    return ShowListParser.parseList(json, opts);
  }
}

export class LimiterShowAPI extends ShowAPI {

  static async getShow(params: ShowAPIGetShowParams): Promise<Show> {
    return Limiter.schedule(() => super.getShow(params));
  }

  static async list(params?: ShowAPIListParams | undefined): Promise<Show[]> {
    return Limiter.schedule(() => super.list(params));
  }
}
