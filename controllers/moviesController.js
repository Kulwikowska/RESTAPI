import express from 'express';
import Movie from '../models/moviesModel';
import omdbApi from '../utils/omdbApi';
import validate from 'express-validation';
import validations from '../routes/validation/validations'
import Joi from 'joi';

export default {
    async create(req, res) {
        try {
            const isValid = Joi.validate(req.body, validations.createMovie);
            console.log(isValid);
            if (isValid.error) {
                throw isValid.error;
            }
            const movieMetadata = await omdbApi.getMovieMetadata(req.body.title);
            const movie = await new Movie(movieMetadata).save();
            return res.status(201).send(movie);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }
    },

    async findAll(req, res) {
        try {
            const movies = await Movie.find({}).sort({ date: -1 });
            return res.status(200).send(movies);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }

    }
}