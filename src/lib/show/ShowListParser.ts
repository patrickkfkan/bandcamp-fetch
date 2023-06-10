import { ImageFormat } from '../types/Image';
import Show from '../types/Show';
import { URLS } from '../utils/Constants';

interface ShowListParseOptions {
  imageBaseUrl: string;
  imageFormat: ImageFormat | null;
}

export default class ShowListParser {

  static parseList(json: any, opts: ShowListParseOptions): Show[] {
    const shows: Show[] = [];
    if (typeof json === 'object' && Array.isArray(json.results)) {
      json.results.forEach((show: any) => {
        const parsed: Show = {
          type: 'show',
          name: show.title,
          url: this.#getShowUrl(show.id),
          publishedDate: show.published_date,
          description: show.desc,
          imageCaption: show.image_caption,
          subtitle: show.subtitle,
          screenImageUrl: `${opts.imageBaseUrl}/img/${show.v2_image_id}_0`
        };
        if (show.v2_image_id && opts.imageFormat?.id) {
          parsed.imageUrl = `${opts.imageBaseUrl}/img/${show.v2_image_id}_${opts.imageFormat.id}.jpg`;
        }
        shows.push(parsed);
      });
    }
    return shows;
  }

  static #getShowUrl(showId: string): string {
    return `${URLS.SITE_URL}/?show=${showId}`;
  }
}
