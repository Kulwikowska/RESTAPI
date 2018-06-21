import mongoose from 'mongoose';
import server from '../index';

before(function(done) {

    function clearCollections() {
        for (var collection in mongoose.connection.collections) {
            mongoose.connection.collections[collection].remove(function() {});
        }
        return done();
    }

    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config.test.db, function(err) {
            if (err) throw err;
            return clearCollections();
        });
    } else {
        return clearCollections();
    }
});

afterEach(function(done) {
    mongoose.disconnect();
    return done();
});