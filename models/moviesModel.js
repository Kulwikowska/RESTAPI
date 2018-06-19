const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: 'Title cannot be blank!'
    },
    Year: String,
    Rated: String,
    Released: {
        type: Date,
    },
    Runtime: String,
    Genre: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: [{
        Source: String,
        Value: String,
    }],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Response: String,
    Comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;