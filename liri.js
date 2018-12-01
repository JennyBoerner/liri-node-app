require("dotenv").config();

var spotify = require("./keys.js");

var argOne = process.argv[2];
var argTwo = process.argv[3];

var axios = require("axios");

if (argOne === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + argTwo + "/events?app_id=codingbootcamp")
    .then(
    function(response) {
        console.log(response.data);
    })
} else if (argOne === "spotify-this-song") {
    console.log("second one")
} else if (argOne === "movie-this") {
    console.log("second one")
} else if (argOne === "do-what-it-says") {
    console.log("second one")
}
