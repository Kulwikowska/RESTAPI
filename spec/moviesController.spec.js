var moviesController = require('../controllers/moviesController');
var fetch = require('node-fetch');
var request = require('request')
var base_url = "http://localhost:8080"

// describe("Movies controller tests", function() {
//     it("should successfully create movie when title is given", async function(done) {
//         const response = await moviesController.create
//         await request(base_url + '/movies', { method: 'POST', body: { "title": "harry potter" } });
//         expect(response.ok).toBe(true);
//         expect(response.json()._id).not.toBeNull();
//     });
// });

// beforeEach(function(done) {
//     setTimeout(function() {
//         value = 0;
//         done();
//     }, 1);
// });

// it("should support async execution of test preparation and expectations", function(done) {
//     value++;
//     expect(value).toBeGreaterThan(0);
//     done();
// });

// describe("long asynchronous specs", function() {
//     var originalTimeout;
//     beforeEach(function() {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     });
//     it("takes a long time", function(done) {
//         setTimeout(function() {
//             done();
//         }, 9000);
//     });
//     afterEach(function() {
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//     });
// });