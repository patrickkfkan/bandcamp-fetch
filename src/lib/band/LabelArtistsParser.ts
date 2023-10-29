import { load as cheerioLoad } from 'cheerio';
import { ImageFormat } from '../types/Image.js';
import { reformatImageUrl, splitUrl } from '../utils/Parse.js';
import { LabelArtist } from '../types/Label.js';

interface LabelArtistsParseOptions {
  labelUrl: string;
  imageFormat: ImageFormat | null;
}

export default class LabelArtistsParser {
  static parseLabelArtists(html: string, opts: LabelArtistsParseOptions): LabelArtist[] {
    const $ = cheerioLoad(html);
    const artistsList = $('li.featured-item, li.artists-grid-item');
    const results: LabelArtist[] = [];
    artistsList.each((i: number, artistListItem: any) => {
      artistListItem = $(artistListItem);
      const img = artistListItem.find('img');
      const imgSrc = img.attr('data-original') || img.attr('src');
      const imageUrl = reformatImageUrl(imgSrc, opts.imageFormat);
      const artist: LabelArtist = {
        name: artistListItem.find('.featured-grid-name, .artists-grid-name').text(),
        url: splitUrl(artistListItem.find('a').attr('href')).base,
        location: artistListItem.find('.artists-grid-location').text()
      };
      if (imageUrl) {
        artist.imageUrl = imageUrl;
      }
      results.push(artist);
    });
    return results;
  }
}
