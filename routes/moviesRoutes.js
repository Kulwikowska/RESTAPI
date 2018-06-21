import express from 'express';
import { Router } from 'express';
import moviesController from '../controllers/moviesController';

export default () => {
    const api = Router();
    api.post("/", moviesController.create)
    api.get("/", moviesController.findAll);
    return api;
}