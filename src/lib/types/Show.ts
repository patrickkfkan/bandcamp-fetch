import Track from './Track';

interface Show {
  type: 'show';
  name: string;
  url: string;
  publishedDate: string;
  description: string;
  shortDescription?: string;
  duration?: number;
  streamUrl?: {
    'mp3-128'?: string;
    'opus-lo'?: string;
  };
  tracks?: Omit<Track, 'type'>[];
  imageCaption: string;
  subtitle: string;
  imageUrl?: string;
  screenImageUrl: string;
}

export default Show;
