import bcfetch from '../../dist/mjs/index.js';

const playlistUrl = 'https://bandcamp.com/patrickkfkan/playlist/mix-1';

void (async () => {
  const playlist = await bcfetch.playlist.getPlaylist({
    playlistUrl
  });
  console.log('Playlist:');
  console.log(JSON.stringify(playlist, null, 2));
  if (playlist.additionalTrackIds.length > 0) {
    const additionalTracks = await bcfetch.playlist.getAdditionalTracks({ playlist });
    console.log('Additional Tracks:');
    console.log(JSON.stringify(additionalTracks, null, 2));
  }
})();