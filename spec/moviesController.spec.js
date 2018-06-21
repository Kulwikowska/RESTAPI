import fetch from 'node-fetch';
import server from '../index';
import clearMongo from './clearMongo';


const base_url = "http://localhost:3000"


describe("Movies controller test", function() {
    // describe("GET /", function() {
    //     it("returns status code 200", function() {
    //         request.get(base_url + '/movies', function(error, response, body) {
    //             console.log(body);
    //             expect(response.statusCode).toBe(200);
    //         });
    //     });
    // });

    describe("POST /", function() {
        it("returns status code 200", async function(done) {
            const response = await fetch(base_url + '/movies', {
                method: 'POST',
                body: JSON.stringify({ title: "harry potter" }),
                headers: { 'Content-Type': 'application/json' },
            });
            const responseBody = await response.json();

            expect(response.status).toBe(201);
            expect(responseBody._id).not.toBeNull();
            done();
        });
    });
});