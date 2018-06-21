import Joi from 'joi';

export default {
    create: {
        body: {
            title: Joi.string().required()
        }

    }
}