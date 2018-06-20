import express from 'express';


export default {
    getMovieMetadata(title) {
        if (title == "ironman") {
            throw new Error("Movie with given title does not exist");
        }
        return {
            "Title": "Saw",
            "Year": "2004",
            "Rated": "R",
            "Released": "29 Oct 2004",
            "Runtime": "103 min",
            "Genre": "Crime, Horror, Mystery",
            "Director": "James Wan",
            "Writer": "Leigh Whannell, James Wan (story), Leigh Whannell (story)",
            "Actors": "Leigh Whannell, Cary Elwes, Danny Glover, Ken Leung",
            "Plot": "Two strangers, who awaken in a room with no recollection of how they got there, soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
            "Language": "English",
            "Country": "USA",
            "Awards": "8 wins & 10 nominations.",
            "Poster": "https://ia.media-imdb.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
            "Ratings": [{
                    "Source": "Internet Movie Database",
                    "Value": "7.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "49%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "46/100"
                }
            ],
            "Metascore": "46",
            "imdbRating": "7.6",
            "imdbVotes": "335,116",
            "imdbID": "tt0387564",
            "Type": "movie",
            "DVD": "15 Feb 2005",
            "BoxOffice": "$55,100,000",
            "Production": "Lions Gate Films",
            "Website": "http://www.sawmovie.com/",
            "Response": "True"
        }
    }
}