import express from 'express';
import { Router } from 'express';
import commentsController from '../controllers/commentsController';

export default () => {
    const api = Router();
    api.post("/", commentsController.create);
    api.get("/", commentsController.findAll);
    return api;
}