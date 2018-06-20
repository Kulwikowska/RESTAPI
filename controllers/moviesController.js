import express from 'express';
import db from '../models/moviesModel';
import omdbApi from '../utils/omdbApi';

export default {
    async create(req, res) {
        try {
            const movieMetadata = omdbApi.getMovieMetadata(req.body.title);
            const movie = await new db(movieMetadata).save();
            return res.status(201).send(movie);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }
    },

    async findAll(req, res) {
        console.log("dasfwneufnwefvnjsfvnjewv");
        try {
            const movies = await db.find({});
            return res.status(200).send(movies);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }

    }
}