import fetch from 'node-fetch';
import server from '../index';
import mongoose from 'mongoose';

const base_url = "http://localhost:3000"
describe("Comments controller test", function() {

    beforeEach(function(done) {
        mongoose.connect('mongodb://agnieszka:agnieszka1234@ds161790.mlab.com:61790/agnieszkarest', function() {
            mongoose.connection.db.dropDatabase(function() {
                done()
            })
        })
    })

    afterEach(function(done) {
        mongoose.connect('mongodb://agnieszka:agnieszka1234@ds161790.mlab.com:61790/agnieszkarest', function() {
            mongoose.connection.db.dropDatabase(function() {
                done()
            })
        })
    })

    describe("GET /", function() {
        it("returns status code 200", function() {
            fetch(base_url + '/comments', function(error, response, body) {
                console.log(body);
                expect(response.statusCode).toBe(200);
            });
        });
    });

    describe("POST /", function() {
        it("returns status code 200", async function(done) {
            const movie = await (await fetch(base_url + '/movies', {
                method: 'POST',
                body: JSON.stringify({ title: "harry potter" }),
                headers: { 'Content-Type': 'application/json' },
            })).json();

            const response = await fetch(base_url + '/comments', {
                method: 'POST',
                body: JSON.stringify({ movieId: movie._id }),
                headers: { 'Content-Type': 'application/json' },
            });
            const responseBody = await response.json();

            expect(response.status).toBe(201);
            expect(responseBody._id).not.toBeNull();
            done();
        });
    });
});