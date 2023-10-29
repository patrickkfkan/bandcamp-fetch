import bcfetch from '../../';

const streamUrl = 'https://t4.bcbits.com/stream/a9fab205c6d82ffc4ca4f377d86bd8dd/mp3-128/3535427082?p=0&ts=1698526235&t=3c987d3b75dc4151c931288780eca682ae1d70ac&token=1698526235_35d7ab2f75c60cdb31c68df15cc5d5024368a535';

console.log(`Testing stream URL: ${streamUrl}`);

bcfetch.stream.test(streamUrl).then((result1) => {
  if (result1.ok) {
    console.log('Stream URL is valid.');
    return;
  }
  console.log(`Stream URL is invalid. Status code: ${result1.status}. Refreshing...`);
  bcfetch.stream.refresh(streamUrl).then((result2) => {
    console.log(`Refreshed stream URL: ${result2}`);
    if (result2) {
      console.log('Testing refreshed stream URL...');
      bcfetch.stream.test(result2).then((result3) => {
        if (result3.ok) {
          console.log('Refreshed stream URL is valid.');
          return;
        }
        console.log(`Refreshed stream URL is invalid. Status code: ${result3.status}`);
      });
    }
  });
});
