import bcfetch from '../../';
import util from 'util';

const albumUrl = 'https://musique.coeurdepirate.com/album/blonde';

const params = {
  albumUrl,
  albumImageFormat: 'art_app_large',
  artistImageFormat: 'bio_featured',
  includeRawData: false
};

bcfetch.album.getInfo(params).then((results) => {
  console.log(util.inspect(results, false, null, false));
});
