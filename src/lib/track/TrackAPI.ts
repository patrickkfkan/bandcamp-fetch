import ImageAPI from '../image/ImageAPI';
import { ImageFormat } from '../types/Image';
import Track from '../types/Track';
import { fetchPage } from '../utils/Fetch';
import Limiter from '../utils/Limiter';
import TrackInfoParser from './TrackInfoParser';

export interface TrackAPIGetInfoParams {
  trackUrl: string;
  albumImageFormat?: string | number | ImageFormat;
  artistImageFormat?: string | number | ImageFormat;
  includeRawData?: boolean;
}

export default class TrackAPI {
  static async getInfo(params: TrackAPIGetInfoParams): Promise<Track> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      trackUrl: params.trackUrl,
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await ImageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params.artistImageFormat, 21),
      includeRawData: params.includeRawData !== undefined ? params.includeRawData : false
    };
    const html = await fetchPage(params.trackUrl);
    return TrackInfoParser.parseInfo(html, opts);
  }
}

export class LimiterTrackAPI extends TrackAPI {
  static async getInfo(params: TrackAPIGetInfoParams): Promise<Track> {
    return Limiter.schedule(() => super.getInfo(params));
  }
}
