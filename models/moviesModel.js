import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
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
    created: { type: Date, default: Date.now },
    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

export default mongoose.model('Movie', movieSchema);