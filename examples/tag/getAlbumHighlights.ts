import bcfetch from '../../';
import util from 'util';

const tagUrl = 'https://bandcamp.com/tag/noise';

const params = {
  tagUrl,
  imageFormat: 'art_app_large'
};

bcfetch.tag.getAlbumHighlights(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
