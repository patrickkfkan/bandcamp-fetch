import bcfetch, { ImageFormatFilter } from '../../';

bcfetch.image.getFormats(ImageFormatFilter.Album).then((results) => {
  console.log('Album image formats:');
  console.log(results);
  console.log();
});

bcfetch.image.getFormats(ImageFormatFilter.Bio).then((results) => {
  console.log('Artist image formats:');
  console.log(results);
  console.log();
});
