import { load as cheerioLoad } from 'cheerio';
import { ArticleCategory, ArticleList, ArticleListItem } from '../types/Article.js';
import { URLS } from '../utils/Constants.js';
import { isAbsoluteUrl, normalizeUrl, reformatImageUrl, stripLineBreaks } from '../utils/Parse.js';
import { ImageFormat } from '../types/Image.js';

interface ArticleListParseOptions {
  imageFormat: ImageFormat | null;
}

export default class ArticleListParser {

  static parseList(html: string, opts: ArticleListParseOptions): ArticleList {
    const $ = cheerioLoad(html);
    const dailyUrl = URLS.DAILY;
    const result: ArticleList = {
      articles: [],
      total: 0,
      start: 0,
      end: 0
    };

    $('articles-list').each((i, list) => {
      $('.list-article', $(list)).each((i: number, article: any) => {
        article = $(article);
        const imgSrc = article.find('img').attr('src') || null;
        // Category
        const infoText = article.find('.article-info-text');
        const infoTextCategoryLink = infoText.find('a.franchise');
        const infoTextMiddot = infoText.find('.middot');
        const categoryName = infoTextCategoryLink.text();
        const category: ArticleCategory | null = categoryName ? {
          name: categoryName
        } : null;
        const categoryUrl = infoTextCategoryLink.attr('href');
        if (category && categoryUrl) {
          category.url = isAbsoluteUrl(categoryUrl) ? categoryUrl : normalizeUrl(categoryUrl, dailyUrl);
        }
        // Date
        infoTextCategoryLink.remove();
        infoTextMiddot.remove();
        const date = stripLineBreaks(infoText.text()).trim();
        // Title and url
        const titleLink = article.find('a.title');
        const title = titleLink.text();
        let url = titleLink.attr('href');
        if (!isAbsoluteUrl(url)) {
          url = normalizeUrl(url, dailyUrl);
        }

        if (titleLink) {
          const parsed: ArticleListItem = {
            url,
            title,
            date
          };
          if (category) {
            parsed.category = category;
          }
          const imageUrl = reformatImageUrl(imgSrc, opts.imageFormat);
          if (imageUrl) {
            parsed.imageUrl = imageUrl;
          }

          result.articles.push(parsed);
        }
      });
    });

    const resultsText = stripLineBreaks($('#num-results').text()).trim();
    const rtm = resultsText.match(/(\d+)(?:\s*to\s*)(\d+)(?:\s*of\s*)(\d+)/);
    if (rtm?.length === 4) {
      result.total = parseInt(rtm[3], 10);
      result.start = parseInt(rtm[1], 10);
      result.end = parseInt(rtm[2], 10);
    }

    return result;
  }
}
