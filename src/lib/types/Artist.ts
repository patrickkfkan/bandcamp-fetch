import Label from './Label';
import UserKind from './UserKind';

interface Artist extends UserKind {
  type: 'artist';
  label?: Label;
  genre?: string;
}

export default Artist;
