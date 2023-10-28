import BaseAPIWithImageSupport, { BaseAPIWithImageSupportParams } from '../common/BaseAPIWithImageSupport';
import Article, { ArticleCategorySection, ArticleList } from '../types/Article';
import { ImageFormat } from '../types/Image';
import { URLS } from '../utils/Constants';
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

export default class ArticleAPI extends BaseAPIWithImageSupport {

  async getCategories(): Promise<ArticleCategorySection[]> {
    const html = await this.fetch(URLS.DAILY);
    return ArticleCategoryParser.parseCategories(html);
  }

  async getArticle(params: ArticleAPIGetArticleParams): Promise<Article> {
    const imageConstants = await this.imageAPI.getConstants();
    const opts = {
      imageBaseUrl: imageConstants.baseUrl,
      albumImageFormat: await this.imageAPI.getFormat(params.albumImageFormat, 9),
      artistImageFormat: await this.imageAPI.getFormat(params.artistImageFormat, 21),
      includeRawData: !!params.includeRawData
    };
    const html = await this.fetch(params.articleUrl);
    return ArticleParser.parseArticle(html, opts);
  }

  async list(params?: ArticleAPIListParams): Promise<ArticleList> {
    let url = params?.categoryUrl ? params.categoryUrl : normalizeUrl('latest', URLS.DAILY);
    if (params?.page) {
      url += `?page=${params.page}`;
    }
    const opts = {
      imageFormat: await this.imageAPI.getFormat(params?.imageFormat)
    };
    const html = await this.fetch(url);
    return ArticleListParser.parseList(html, opts);
  }
}

export class LimiterArticleAPI extends ArticleAPI {

  #limiter: Limiter;

  constructor(params: BaseAPIWithImageSupportParams & { limiter: Limiter }) {
    super(params);
    this.#limiter = params.limiter;
  }

  async getCategories(): Promise<ArticleCategorySection[]> {
    return this.#limiter.schedule(() => super.getCategories());
  }

  async getArticle(params: ArticleAPIGetArticleParams): Promise<Article> {
    return this.#limiter.schedule(() => super.getArticle(params));
  }
}
