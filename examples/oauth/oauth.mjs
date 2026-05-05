import bcfetch from '../../dist/mjs/index.js';

bcfetch.setOAuth({
  username: "username",
  password: "asdfgjhsagdjks",
  clientId: "134",
  clientSecret: "1myK12VeCL3dWl9o/ncV2VyUUbOJuNPVJK6bZZJxHvk="
})

bcfetch.oauth.Login().then(e=>{
  console.log(e);
});
