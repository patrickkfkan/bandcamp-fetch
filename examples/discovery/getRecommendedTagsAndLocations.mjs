import bcfetch from '../../dist/mjs/index.js';

bcfetch.discovery.getRecommendedTagsAndLocations().then((result) => {
  console.log(JSON.stringify(result, null, 2));
});
