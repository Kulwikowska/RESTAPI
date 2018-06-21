Description of the solution

TITLE: Adding movies to the database.
URL: /movies
METHOD: POST
PARAMS: 
title: required
example: {
 "title": "john"
}

TITLE: Getting movies from the database.
URL: /movies
METHOD: GET


TITLE: Adding comments to the database.
URL: /comments
METHOD: POST
PARAMS: 
id: required
text: required
example: {
 "movieId": "5b2be6352c98a1001f0405b6"
 "text": "great movie"
}

TITLE: Get all comments from database.
URL: /comments
METHOD: GET
PARAMS: 
movieId: optional
example:  https://quiet-beach-81376.herokuapp.com/comments?movieId=5b2be6352c98a1001f0405b6

Server listens on port 3000. The mongo database is available on the mlab server.