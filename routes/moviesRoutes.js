import express from 'express';
import validate from 'express-validation';
import { Router } from 'express';
import moviesController from '../controllers/moviesController';
import moviesValidation from './validation/movies';

export default () => {
    const api = Router();
    api.route('/')
        .post(validate(moviesValidation.create), moviesController.create)
        // .post(moviesController.create)
        .get(moviesController.findAll);

    return api;

}