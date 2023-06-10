import Album from './Album';
import Track from './Track';

interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  date: string;
  category: ArticleCategory;
  genre?: {
    name: string,
    url?: string,
    readMoreUrl?: string
  };
  author: {
    name: string,
    url: string
  };
  mediaItems: Array<ArticleMediaItem>;
  sections: ArticleSection[];
  raw?: {
    basic: any,
    mediaItems: any,
    body: string
  }
}

export interface ArticleCategory {
  name: string;
  url?: string;
}

export interface ArticleCategorySection {
  name: string;
  title?: string;
  sections?: ArticleCategorySection[];
  categories?: ArticleCategory[];
}

export interface ArticleSection {
  heading?: {
    html: string,
    text: string
  };
  html: string;
  text: string;
  mediaItemRef?: string;
}

export type ArticleMediaItem = (Album | Track) & {
  mediaItemRef?: string,
  featuredTrackPosition: number
};

export interface ArticleList {
  articles: ArticleListItem[];
  total: number;
  start: number;
  end: number;
}

export interface ArticleListItem {
  url: string;
  title: string;
  date: string;
  category?: ArticleCategory;
  imageUrl?: string;
}

export default Article;
