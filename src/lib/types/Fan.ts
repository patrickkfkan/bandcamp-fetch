import UserKind from './UserKind';

interface Fan extends UserKind {
  type: 'fan';
  username: string;
  websiteUrl: string;
  followingGenresCount: number;
  followingArtistsAndLabelsCount: number;
  wishlistItemCount: number;
  collectionItemCount: number;
}

export interface FanItemsContinuation {
  fanId: number;
  token: string;
}

export default Fan;
