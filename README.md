# LIRI Node App

## Project Overview
LIRI Node App is a Language Interpretation and Recognition Interface app. LIRI will be a command line node app that takes in parameters and gives you back data using APIs from Twitter, Spotify, and OMDB through request.

### APIs 
+ Twitter 
+ Spotify
+ Request to grab data from OMDB 

### Commands
#### node liri.js my-tweets 
+ Displays last 20 tweets and when they were created in bash/terminal window.

#### node liri.js spotify-this-song 'song name here'
+ Displays artist(s), song's name, preview link of song from Spotify, and album the song is from in bash/terminal window. 
+ If no song is provided, program will default to "The Sign" by Ace of Base.

#### node liri.js movie-this 'movie name here'
+ Outputs title of movie, year movie came out, IMDB rating, Rotten Tomatoes rating, country produced, language, plot, and actors of movie. + If there is no input of movie title, program will output default data for 'Mr. Nobody'.
