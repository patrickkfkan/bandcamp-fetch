import NameValuePair from '../utils/NameValuePair';
import Album from './Album';
import Track from './Track';

interface Tag {
  type: 'tag' | string;
  name: string;
  url: string;
  value?: string;
  related?: Tag[];
  isLocation?: boolean;
  imageUrls?: string[];
}

export interface TagList {
  tags: Omit<Tag, 'type'>[];
  locations: Omit<Tag, 'type'>[];
}

export interface AlbumHighlightsByTag {
  name: string;
  title: string;
  items: Album[];
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ReleasesByTag {

  export interface FilterValueNames {
    [k: string]: Record<string, string | number>;
  }

  export interface FilterOption extends NameValuePair<string | number> {
    default?: boolean;
    selected?: boolean;
  }

  export interface Filter {
    name: string;
    options: FilterOption[];
  }
}

export interface ReleasesByTag {
  items: Array<Album | Track>;
  hasMore: boolean;
  filters: Record<string, string | number | Array<string | number>>;
}

export default Tag;
