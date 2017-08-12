console.log('the bot is starting');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'BugNsVDAfDKh5dhdjbgEuZMwK',
  consumer_secret:      'smTaN0BiJwiYbQ3wegiV3aVJVSfh7fer0vwfaNKerJsL9YPaZx',
  access_token:         '893834484449255424-DynXJ7PIzdJw9EAWJmJK4BM7RtaGhw7',
  access_token_secret:  'R0PKdl2rNNhAMW5dySSfmYj6jeIjIyRg18moAAXpEJhIF',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

T.post('statuses/update', { status: 'That\'amazing I am generating this post from vim :)' }, function(err, data, response) {
  console.log(data)
})

