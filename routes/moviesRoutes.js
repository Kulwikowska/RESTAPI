import express from 'express';
import validate from 'express-validation';
import { Router } from 'express';
import moviesController from '../controllers/moviesController';
import validations from './validation/moviesRoutes';

export default () => {
    const api = Router();
    api.route('/')

    .post(validate(validations.create), moviesController.create)

    .get(moviesController.findAll);

    return api;

}