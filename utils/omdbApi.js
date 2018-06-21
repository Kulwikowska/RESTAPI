import express from 'express';
import fetch from 'node-fetch';

const apiKey = '5cacdc6c';
const base_url = 'http://www.omdbapi.com';

export default {
    async getMovieMetadata(title) {
        const res = await fetch(base_url + '/?t=' + title + '&apikey=' + apiKey);
        const json = await res.json();
        return json;
    }
}