import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import Artist from '../types/Artist';
import { ImageFormat } from '../types/Image';
import Label from '../types/Label';
import { ParseError, brToNewLine, parseLabelFromBackToLabelLink, reformatImageUrl, stripLineBreaks, stripTags } from '../utils/Parse';

interface BandInfoParseOptions {
  bandUrl: string;
  imageFormat: ImageFormat | null;
}

export default class BandInfoParser {
  static parseInfo(html: string, opts: BandInfoParseOptions): Artist | Label {
    const $ = cheerioLoad(html);
    let bandData;
    try {
      bandData = JSON.parse(decode($('script[data-band]').attr('data-band')));
    }
    catch (error: any) {
      throw new ParseError('Failed to parse artist / label info: JSON error in band data.', html, error);
    }

    const bioText = $('#bio-text');
    let description;
    if (bioText.length) {
      const bioTextMore = bioText.find('.peekaboo-text');
      if (bioTextMore.length) {
        bioTextMore.find('.lightweightBreak').remove();
        bioText.find('.peekaboo-text, .peekaboo-link').remove();
        description = (`${bioText.html()?.trim()} ${bioTextMore.html()}`).trim();
      }
      else {
        description = bioText.html()?.trim();
      }
      if (description) {
        description = stripLineBreaks(description);
        description = brToNewLine(description);
        description = stripTags(description);
        description = decode(description);
      }
    }

    const isLabel = bandData.is_label;
    const result: Artist | Label = {
      type: isLabel ? 'label' : 'artist',
      name: bandData.name,
      description: description
    };

    if (bandData.url) {
      result.url = bandData.url;
    }

    const location = $('#band-name-location').find('.location').text();
    if (location) {
      result.location = location;
    }

    const imageUrl = reformatImageUrl($('img.band-photo').attr('src'), opts.imageFormat);
    if (imageUrl) {
      result.imageUrl = imageUrl;
    }

    if (!isLabel) {
      const label = parseLabelFromBackToLabelLink($);
      if (label) {
        (result as Artist).label = label;
      }
    }
    else {
      (result as Label).labelId = bandData.id;
    }

    return result;
  }
}