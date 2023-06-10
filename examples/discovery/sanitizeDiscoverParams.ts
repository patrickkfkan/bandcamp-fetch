import bcfetch from '../../';

const params = {
  genre: 'ambient'
};

bcfetch.discovery.sanitizeDiscoverParams(params).then((results) => {
  console.log(results);
});
