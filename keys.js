exports.twitterKeys = {
  consumer_key: '3NF8wkRdPXVOBwBfZRsfI5148',
  consumer_secret: 'OZ7WC1kNT24GdYqpU8V4T9Oj0a1TUe2fGZqGpFkrACYe2fG2Eg',
  access_token_key: '794827563210113024-cb0UGQQZedpw57uzFD25pCN76fa98pl',
  access_token_secret: 'Z00Q0cQ7FZrGzKklZlHYXFR0wqsLyQItEYHbFDHm3wqrg',
};

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "458c24da06524cae9c7a21894babc9a0",
  secret: "4e6dbc6c6ff14dcf900abbd6e16dd9bb"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});