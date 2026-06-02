import bcfetch from '../../dist/mjs/index.js';

void (async () => {
  const user = await bcfetch.fan.getInfo({
    username: 'patrickkfkan',
    imageFormat: 'bio_screen'
  });
  const list = await bcfetch.playlist.list({
    fanId: user.fanId
  });
  console.log(JSON.stringify(list, null, 2));
})();