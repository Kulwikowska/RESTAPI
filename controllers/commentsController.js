import express from 'express';
import Comment from '../models/commentsModel';
import Movie from '../models/moviesModel';
import bodyParser from 'body-parser';
import url from 'url';
import jsonUtils from '../utils/jsonUtils';

export default {
    async create(req, res) {
        try {
            const movie = await Movie.findById(req.body.movieId).populate('comments');
            if (movie == null) {
                throw new Error("Movie doesn't exist.");
            }
            const comment = await new Comment({ text: req.body.text, movie: movie._id }).save();
            movie.Comments.push(comment)
            movie.save()
            return res.status(201).send(comment);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }
    },

    async findAll(req, res) {
        let filters = {
            'movie': req.query.movieId
        }
        filters = jsonUtils.removeEmpty(filters);
        try {
            const commentsAll = await Comment.find(filters);
            return res.status(200).send(commentsAll);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }

    }
}