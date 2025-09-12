import bcfetch from '../../dist/mjs/index.js';

bcfetch.limiter.updateSettings({
  maxConcurrent: 10,
  minTime: 100
});

const albumUrls = [
  'https://phoebebridgers.bandcamp.com/album/punisher',
  'https://mrsgreenbird.bandcamp.com/album/10-years-live',
  'https://ryleywalker.bandcamp.com/album/course-in-fable',
  'https://phoebebridgers.bandcamp.com/album/stranger-in-the-alps',
  'https://wearetyphoon.bandcamp.com/album/sympathetic-magic',
  'https://mariabc.bandcamp.com/album/devils-rain-2',
  'https://jimpullman.bandcamp.com/album/go-on-boldly',
  'https://debutants.bandcamp.com/album/indiana-newgrass-ep',
  'https://cassandrajenkins.bandcamp.com/album/an-overview-on-phenomenal-nature',
  'https://stefonaclearday.bandcamp.com/album/songs-of-love-and-unlove',
  'https://haleyheynderickx.bandcamp.com/album/i-need-to-start-a-garden',
  'https://phoebebridgers.bandcamp.com/album/copycat-killer',
  'https://grantleephillips.bandcamp.com/album/rag-town-pink-rebel',
  'https://garlandofhours.bandcamp.com/album/lucidia',
  'https://landehekt.bandcamp.com/album/going-to-hell',
  'https://emmaswift.bandcamp.com/album/blonde-on-the-tracks',
  'https://joannanewsom.bandcamp.com/album/ys',
  'https://joannanewsom.bandcamp.com/album/have-one-on-me',
  'https://saintseneca.bandcamp.com/album/all-youve-got-is-everyone',
  'https://phoebebridgers.bandcamp.com/album/if-we-make-it-through-december',
  'https://music.theohhellos.com/album/boreas',
  'https://rikkiwill.bandcamp.com/album/songs-for-rivers',
  'https://alexsalcido.bandcamp.com/album/im-a-bird',
  'https://helenadeland.bandcamp.com/album/someone-new',
  'https://ryleywalker.bandcamp.com/album/for-michael-ripps',
  'https://thebargain.bandcamp.com/album/yes-b-w-stay-awhile',
  'https://curtismcmurtry.bandcamp.com/album/toothless-messiah',
  'https://ceciliablairwright.bandcamp.com/album/another-human',
  'https://darrenhayman.bandcamp.com/album/music-to-watch-news-by',
  'https://virginiaastley.bandcamp.com/album/from-gardens-where-we-feel-secure',
  'https://quietdetails.bandcamp.com/album/the-absence-of-being',
  'https://miloandlovina.bandcamp.com/album/paper-hearts',
  'https://fatherjohnmisty.bandcamp.com/album/anthem-3-2',
  'https://thefauxpaws.bandcamp.com/album/the-hurricane-ep',
  'https://mrsgreenbird.bandcamp.com/album/dark-waters',
  'https://indigosparke.bandcamp.com/album/echo',
  'https://joannanewsom.bandcamp.com/album/divers',
  'https://kellymcfarling.bandcamp.com/album/deep-the-habit',
  'https://dogwood.bandcamp.com/album/the-imperfect-ep',
  'https://bedouine.bandcamp.com/album/bedouine',
  'https://craigmckerron.bandcamp.com/album/cabin-fever',
  'https://imskullcrusher.bandcamp.com/album/skullcrusher',
  'https://fleetfoxes.bandcamp.com/album/crack-up',
  'https://anothermichael.bandcamp.com/album/new-music-and-big-pop',
  'https://autourdelucie.bandcamp.com/album/bunker',
  'https://laurastevenson.bandcamp.com/album/sit-resist-remastered-deluxe-edition'
];

const baseParams = {
  albumImageFormat: 'art_app_large',
  artistImageFormat: 'bio_featured',
  includeRawData: false
};

console.time('Execution time with limiter');
let fetchPromises = albumUrls.map(async (url) => {
  const result = await bcfetch.limiter.album.getInfo({ ...baseParams, albumUrl: url });
  console.log(`Resolved: ${url}`);
  return result;
});

console.log('Resolving album URLs with limiter...');

Promise.all(fetchPromises).then((results) => {

  console.log(`Total ${results.length} URLs resolved!`);
  console.timeEnd('Execution time with limiter');
  console.log();

  console.log('Now let\'s see what happens when we don\'t use limiter...');

  bcfetch.cache.clear();

  console.time('Execution time without limiter');
  fetchPromises = albumUrls.map(async (url) => {
    const result = await bcfetch.album.getInfo({ ...baseParams, albumUrl: url });
    console.log(`Resolved: ${url}`);
    return result;
  });

  Promise.all(fetchPromises).then((results) => {
    console.log(`Total ${results.length} URLs resolved!`);
    console.timeEnd('Execution time without limiter');
  }).catch((error) => {
    console.log(`An error occurred: ${error.message}`);
  });

});
