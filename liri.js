console.log("liri.js loaded");

// Variables including require, request, fs
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var Twitter = require("twitter");
var keys = require("./keys.js");

var tweet = new Twitter(keys.twitterKeys);

var argument = process.argv[2];
var value = process.argv[3];
var dataText = process.argv[4];

// Twitter parameters with user account
var parameters = {
	"screen_name": "KeliChau18",
	"count": 20
}

// Twitter if statement
if(argument === "my-tweets"){
	tweet.get('statuses/user_timeline', parameters, gotData);
	function gotData (error, data, response){
		var tweets = data; // object
		for (var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text);
			console.log(tweets[i].created_at);
		}
	};
	outputText();
};

module.exports = function(){
	Twitter = Twitter
};

// OMDB if statement
if(argument === "movie-this"){
	console.log("movie this");
	var movieTitle = process.argv[3];
	request("http://www.omdbapi.com/?apikey=d3f8250e&t=" + movieTitle + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body){
		if(process.argv[3]){
			console.log(body);
		}else{
			request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&r=json&tomatoes=true", function(error, response, body){
				console.log(body);
			})
		}
	})
	outputText();
};

module.exports = function(){
	OMDB = OMDB
}

// Spotify if statement
if(argument === "spotify-this-song"){
	var songTitle = process.argv[3];
	spotify.search({type: 'track', query: songTitle}, function(error, data){
		if(process.argv[3]){
			var data = data.tracks.items;
			for (var i = 0; i < data.length; i++){
				console.log(data[i].name);
				console.log(data[i].album.href);
				console.log(data[i].album.name);
				console.log(data[i].preview_url);

				for(var j = 0; j < data[i].artists.length; j++){
					console.log(data[i].artists[j].name);
				}
			}
		}else{
			spotify.search({type: 'track', query: "the sign"}, function(error, data){
				var data = data.track.items;
				console.log(data[0].name);
				console.log(data[0].album.href);
				console.log(data[0].album.name);
				console.log(data[0].preview_url);
				console.log(data[0].artists[0].name);
			});
		}
	});
	outputText();
};

module.exports = function(){
	Spotify = Spotify
}

// Text file if statement
if(argument === "do-what-it-says"){
	fs.readFile('random.txt', "utf8", function(error, data){
		console.log(data);
	});
	outputText();
}
function outputText(){
	fs.appendFile('log.txt', 'Argument: ' + argument + '. Movie or Song Title: ' + value + '. Movie or Song Info: ' + dataText + '.');
};