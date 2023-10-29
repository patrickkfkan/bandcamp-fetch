import Artist from './Artist.js';
import UserKind from './UserKind.js';

interface Label extends UserKind {
  type: 'label';
  labelId?: number;
}

export type LabelArtist = Omit<Artist, 'type'>;

export default Label;
