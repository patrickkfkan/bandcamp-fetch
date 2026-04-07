import bcfetch from '../../dist/mjs/index.js';

const showUrl = 'https://bandcamp.com/radio?show=421';

const params = {
  showUrl
};

bcfetch.show.getShow(params).then((results) => {
  console.log(JSON.stringify(results, null, 2));
});
