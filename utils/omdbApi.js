import express from 'express';
import fetch from 'node-fetch';


export default {
    async getMovieMetadata(title) {
        const res = await fetch('http://www.omdbapi.com/?t=' + title + '&apikey=5cacdc6c');
        const json = await res.json();
        return json;
    }
}