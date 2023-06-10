export interface SearchResults<T extends SearchResultItem> {
  items: T[];
  totalPages: number;
}

export interface SearchResultItem {
  type: 'artist' | 'label' | 'album' | 'track' | 'fan';
  name: string;
  url: string;
  imageUrl?: string;
}

export interface SearchResultArtist extends SearchResultItem {
  type: 'artist';
  location?: string;
  genre?: string;
  tags?: string;
}

export interface SearchResultLabel extends SearchResultItem {
  type: 'label';
  location?: string;
}

export interface SearchResultAlbum extends SearchResultItem {
  type: 'album';
  artist?: string;
  numTracks?: number;
  duration?: number;
  releaseDate?: string;
  tags?: string;
}

export interface SearchResultTrack extends SearchResultItem {
  type: 'track';
  artist?: string;
  album?: string;
  releaseDate?: string;
  tags?: string;
}

export interface SearchResultFan extends SearchResultItem {
  type: 'fan';
  genre?: string;
}

export type SearchResultAny = SearchResultArtist | SearchResultLabel | SearchResultAlbum | SearchResultTrack | SearchResultFan;
