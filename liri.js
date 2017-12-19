//console.log("liri.js loaded");

var request = require(request);
var fs = require(fs);
var Spotify = require(spotify)
var Twitter = require(twitter);
var keys = require(keys.js);

var tweet = new new Twitter(keys);

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
	twit.get('statuses/user_timeline', parameters, gotData);
	function gotData (error, data, response){
		var tweets = data; // object
		for (var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text);
			console.log(tweets[i].created_at);
		}
	};
	outputText();
};

// OMDB if statement
if(argument === "movie-this"){
	console.log(process.argv);
	var movieTitle = process.argv[3];
	request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body){
		if(process.argvp[3]){
			console.log(body);
		}else{
			request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&r=json&tomatoes=true", function(error, response, body){
				console.log(body);
			})
		}
	})
	outputText();
};

