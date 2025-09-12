import { load as cheerioLoad } from 'cheerio';
import { type ImageConstants } from '../types/Image.js';
import { ParseError } from '../utils/Parse.js';

export default class ImageParser {

  static parseImageConstants(html: string): ImageConstants {
    const $ = cheerioLoad(html);
    const scripts = $('script').map((_, el) => $(el).html()).toArray();
    let template: any = null;
    for (const script of scripts) {
      const templateRegex = /var TemplGlobals = (.+);/gm;
      const templateMatch = templateRegex.exec(script);
      if (templateMatch && templateMatch[1]) {
        try {
          template = JSON.parse(templateMatch[1]);
        }
        catch (error) {
          template = null;
        }
        if (template && typeof template === 'object') {
          break;
        }
      }
    }
    try {
      if (!template) {
        throw Error('TemplGlobals object not found or has invalid type');
      }
      const formats = template.image_formats;
      if (!formats || !Array.isArray(formats)) {
        throw Error('TemplGlobals.image_formats not found or has invalid type');
      }
      const siteRoot = template.image_siteroot_https;
      if (!siteRoot || typeof siteRoot !== 'string') {
        throw Error('TemplGlobals.image_siteroot_https not found or has invalid type');
      }
      return {
        baseUrl: siteRoot,
        formats: formats.map((format: any) => ({
          id: format.id,
          name: format.name,
          width: format.width,
          height: format.height,
          fileFormat: format.file_format
        }))
      };
    }
    catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      throw new ParseError(`Failed to parse image constants: ${msg}`, template);
    }
  }
}
