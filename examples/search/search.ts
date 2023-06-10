import bcfetch from '../../';
import util from 'util';

function printResults(results: any, query: string, itemType: string ) {
  const title = `Search query: ${query}. Item type: ${itemType}. ${results.items.length} results.`;
  console.log(title);
  console.log('-'.repeat(title.length));
  console.log(util.inspect(results, false, null, false));
  console.log('');
}

const baseParams = {
  page: 1,
  albumImageFormat: 'art_app_large',
  artistImageFormat: 'bio_featured'
};

const searchAllParams = { ...baseParams, query: 'jazz' };
const searchArtistsAndLabelsParams = { ...baseParams, query: 'merge' };
const searchAlbumsParams = { ...baseParams, query: 'Coeur de pirate' };
const searchTracksParams = { ...baseParams, query: 'Coeur de pirate' };
const searchFansParams = { ...baseParams, query: 'merge' };

const searches = [
  bcfetch.search.all(searchAllParams),
  bcfetch.search.artistsAndLabels(searchArtistsAndLabelsParams),
  bcfetch.search.albums(searchAlbumsParams),
  bcfetch.search.tracks(searchTracksParams),
  bcfetch.search.fans(searchFansParams)
];

Promise.all(searches).then((results) => {
  const [ all, artistsAndLabels, albums, tracks, fans ] = results;
  printResults(all, searchAllParams.query, 'All');
  printResults(artistsAndLabels, searchArtistsAndLabelsParams.query, 'Artists & labels');
  printResults(albums, searchAlbumsParams.query, 'Albums');
  printResults(tracks, searchTracksParams.query, 'Tracks');
  printResults(fans, searchFansParams.query, 'Fans');
});
