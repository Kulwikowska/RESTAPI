import Joi from 'joi';
import express from 'express';

export default {
    createMovie: {
        title: Joi.string().required()
    }
}