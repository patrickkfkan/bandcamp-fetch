import ImageAPI from '../image/ImageAPI';
import Article, { ArticleCategorySection, ArticleList } from '../types/Article';
import { ImageFormat } from '../types/Image';
import { URLS } from '../utils/Constants';
import { fetchPage } from '../utils/Fetch';
import Limiter from '../utils/Limiter';
import { normalizeUrl } from '../utils/Parse';
import ArticleCategoryParser from './ArticleCategoryParser';
import ArticleListParser from './ArticleListParser';
import ArticleParser from './ArticleParser';

export interface ArticleAPIGetArticleParams {
  articleUrl: string;
  albumImageFormat?: string | number | ImageFormat;
  artistImageFormat?: string | number | ImageFormat;
  includeRawData?: boolean;
}

export interface ArticleAPIListParams {
  categoryUrl?: string;
  imageFormat?: string | number | ImageFormat;
  page?: number;
}

export default class ArticleAPI {

  static async getCategories(): Promise<ArticleCategorySection[]> {
    const html = await fetchPage(URLS.DAILY);
    return ArticleCategoryParser.parseCategories(html);
  }

  static async getArticle(params: ArticleAPIGetArticleParams): Promise<Article> {
    const imageConstants = await ImageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await ImageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await ImageAPI.getFormat(params.artistImageFormat, 21),
      includeRawData: !!params.includeRawData
    };
    const html = await fetchPage(params.articleUrl);
    return ArticleParser.parseArticle(html, opts);
  }

  static async list(params?: ArticleAPIListParams): Promise<ArticleList> {
    let url = params?.categoryUrl ? params.categoryUrl : normalizeUrl('latest', URLS.DAILY);
    if (params?.page) {
      url += `?page=${params.page}`;
    }
    const opts = {
      imageFormat: await ImageAPI.getFormat(params?.imageFormat)
    };
    const html = await fetchPage(url);
    return ArticleListParser.parseList(html, opts);
  }
}

export class LimiterArticleAPI extends ArticleAPI {

  static async getCategories(): Promise<ArticleCategorySection[]> {
    return Limiter.schedule(() => super.getCategories());
  }

  static async getArticle(params: ArticleAPIGetArticleParams): Promise<Article> {
    return Limiter.schedule(() => super.getArticle(params));
  }
}
