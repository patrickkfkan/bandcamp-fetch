import Artist from './Artist';
import UserKind from './UserKind';

interface Label extends UserKind {
  type: 'label';
  labelId?: number;
}

export type LabelArtist = Omit<Artist, 'type'>;

export default Label;
