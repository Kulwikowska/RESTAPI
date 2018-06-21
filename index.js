import express from 'express';
import register from 'babel-core/register';
import commentsRoutes from './routes/commentsRoutes';
import moviesRoutes from './routes/moviesRoutes';
import bodyParser from 'body-parser';
import babelPolyfill from 'babel-polyfill';
import mongoose from 'mongoose';


mongoose.connect("mongodb://localhost/restApi");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', moviesRoutes());
app.use('/comments', commentsRoutes());

app.listen(8080, "127.0.0.1", function() {
    console.log("The Server Has Started!");
});