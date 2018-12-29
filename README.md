# LIRI Node App

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

LIRI searches Spotify for songs, Bands in Town for concerts and OMDB for movies

## Functions

### Get Concert Information
Displays the name of the venue(s), venue location and date of event.
node liri.js concert-this <artist/band name here>

### Get Song Information
Displays artist(s), song name, preview link of the song on Spotiy and album name.
node liri.js spotify-this-song <song name here>

### Get Movie Information
Displays the title of the movie(s), release year, IMDB rating, Rotten Tomatoes rating, country produced, move language, plot of the movie and actos in the movie.
node liri.js movie-this <movie name here>

### Get Random.txt Information
Gets song name from within the Random.txt file and runs the Spotify song search.
node liri.js do-what-it-says