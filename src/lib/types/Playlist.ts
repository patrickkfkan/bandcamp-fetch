export interface PlaylistList {
  items: PlaylistListItem[];
  total: number;
  continuation: PlaylistListContinuation | null;
}

export interface PlaylistListItem {
  attribution: {
    accountType: string;
    name: string;
    imageUrl: string | null;
    url: string | null;
  };
  playlistId: number;
  description: string | null;
  imageUrl: string | null;
  isFeatured: boolean;
  isPrivate: boolean;
  url: string;
  modifiedDate: string;
  title: string;
  numTracks: number;
  duration: number;
}

export interface PlaylistListContinuation {
  fanId: number;
  nextCursor: string;
  total: number;
}

export interface Playlist {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  isPrivate: boolean;
  url: string;
  modifiedDate: string;
  numTracks: number;
  duration: number;
  tracks: PlaylistTrack[];
  additionalTrackIds: number[];
  curator: PlaylistCurator;
}

export interface PlaylistTrack {
  id: number;
  title: string;
  artist: {
    id: number;
    name: string;
    imageUrl: string | null;
  };
  album: {
    id: number;
    title: string;
    url: string;
  } | null;
  duration: number;
  url: string;
  imageUrl: string | null;
  streamUrl: string | null;
}

export interface PlaylistCurator {
  username: string;
  name: string;
  imageUrl: string | null;
  bio: string | null;
  location: string | null;
  collectionSize: number;
}
