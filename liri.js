require("dotenv").config();

var spotifyKeys = require("./keys.js");

var fs = require("fs");

var argOne = process.argv[2];
var argTwo = process.argv[3];

var axios = require("axios");

var spotify = require("node-spotify-api");

if (argOne === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + argTwo + "/events?app_id=codingbootcamp")
        .then(
            function (response) {
                for (i = 0; i < response.data.length; i++) {
                    console.log("NEXT SHOW!!!!");
                    console.log(response.data[i].venue.name);
                    console.log(response.data[i].venue.city);
                    console.log(response.data[i].datetime);
                    console.log("-----------------------------")
                };
            });
} else if (argOne === "spotify-this-song") {
    var spotifyapi = new spotify({
        id: "e6c2edb7b6f94ee2a97b12abe5df34f9",
        secret: "5edd3b84e8414ddab0a8b98a2b1ee670"
    });

    if (argTwo === undefined) {
        spotifyapi.search({ type: 'track', query: "The Sign" }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            for (i = 0; i < data.tracks.items.length; i++) {
                console.log("NEXT SONG!!!!")
                console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name)
                console.log("Link to Song: " + data.tracks.items[i].artists[0].external_urls.spotify);
                console.log("Album Name: " + data.tracks.items[i].album.name);
                console.log("-----------------------------")
            }
        })
    }
    else {
        spotifyapi.search({ type: 'track', query: argTwo }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            for (i = 0; i < data.tracks.items.length; i++) {
                console.log("NEXT SONG!!!!")
                console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name)
                console.log("Link to Song: " + data.tracks.items[i].artists[0].external_urls.spotify);
                console.log("Album Name: " + data.tracks.items[i].album.name);
                console.log("-----------------------------")
            }
        });
    };

} else if (argOne === "movie-this") {
    if (argTwo === undefined) {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=Mr.Nobody")
        .then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country Produced: " + response.data.Country);
                console.log("Movie Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            });
    } else {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + argTwo)
        .then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country Produced: " + response.data.Country);
                console.log("Movie Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            });
    }


} else if (argOne === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }

        var output = data.split(",");

        console.log(output[1]);

        var spotifyapi = new spotify({
            id: "e6c2edb7b6f94ee2a97b12abe5df34f9",
            secret: "5edd3b84e8414ddab0a8b98a2b1ee670"
        });

        spotifyapi.search({ type: 'track', query: output[1] }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            for (i = 0; i < data.tracks.items.length; i++) {
                console.log("NEXT SONG!!!!")
                console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
                console.log("Song Name: " + data.tracks.items[i].name)
                console.log("Link to Song: " + data.tracks.items[i].artists[0].external_urls.spotify);
                console.log("Album Name: " + data.tracks.items[i].album.name);
                console.log("-----------------------------")
            }
        });

      });
      
}
