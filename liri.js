//console.log("liri.js loaded");

var request = require(request);
var fs = require(fs);
var Spotify = require(spotify)
var Twitter = require(twitter);
var keys = require(./keys.js);

var tweet = new new Twitter(keys);

var argument = process.argv[2];
var value = process.argv[3];
var dataText = process.argv[4];

