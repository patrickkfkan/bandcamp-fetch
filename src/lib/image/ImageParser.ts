import { load as cheerioLoad } from 'cheerio';
import { decode } from 'html-entities';
import { ImageConstants } from '../types/Image.js';
import { ParseError } from '../utils/Parse.js';

export default class ImageParser {

  static parseImageConstants(html: string): ImageConstants {
    const $ = cheerioLoad(html);
    const vars = decode($('script[data-vars]').attr('data-vars'));
    let parsed;
    try {
      parsed = JSON.parse(vars);
    }
    catch (error: any) {
      throw new ParseError('Failed to parse image constants: JSON error.', vars, error);
    }
    if (parsed?.client_template_globals) {
      const formats = parsed.client_template_globals.image_formats as Array<any>;
      return {
        baseUrl: parsed.client_template_globals.image_siteroot_https,
        formats: formats?.map((format: any) => ({
          id: format.id,
          name: format.name,
          width: format.width,
          height: format.height,
          fileFormat: format.file_format
        }))
      };
    }

    throw new ParseError('Failed to parse image constants: data is missing \'client_template_globals\' field.', parsed);
  }
}
