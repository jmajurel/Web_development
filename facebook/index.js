var FB = require('fb');

FB.setAccessToken('aaad810b3f964bc56b863cfc6428ab9ad');

var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
