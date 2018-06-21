import express from 'express';
import register from 'babel-core/register';
import commentsRoutes from './routes/commentsRoutes';
import moviesRoutes from './routes/moviesRoutes';
import bodyParser from 'body-parser';
import babelPolyfill from 'babel-polyfill';
import mongoose from 'mongoose';

const app = express();
mongoose.connect("mongodb://agnieszka:agnieszka1234@ds161790.mlab.com:61790/agnieszkarest");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', moviesRoutes());
app.use('/comments', commentsRoutes());

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Service started on port :' + port);
});

export default {
    server: server
}