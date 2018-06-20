import express from 'express';
import register from 'babel-core/register';
import commentsRoutes from './routes/commentsRoutes';
import moviesRoutes from './routes/moviesRoutes';
import bodyParser from 'body-parser';
import babelPolyfill from 'babel-polyfill';
import mongoose from 'mongoose';

const mongoUrl = 'mongodb://localhost:27017/overment';
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', moviesRoutes());
// app.use('/comments', commentsRoutes());

app.listen(1337, () => {
    console.log('Server running at http://127.0.0.1:1337/');
});