/*https://mochajs.org/
There are three levels of test duration (depicted in the following image):

FAST: Tests that run within half of the "slow" threshold will show the duration in green (if at all).
NORMAL: Tests that run exceeding half of the threshold (but still within it) will show the duration in yellow.
    SLOW: Tests that run exceeding the threshold will show the duration in red.
*/
/* for testing go into the server_test dir and run  mocha server_test.js */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server_side/server');
const expect = require('chai').expect;

chai.use(chaiHttp);
const should = chai.should();


describe("server test", ()=>{

    describe("GET localhost:9000/api/access_todos", () => {

        it("should get all todo entries", (done) => {
            chai.request(app)
                .get('localhost:9000/api/access_todos')
                .set({'Accept':'application/json', 'Content-Type': 'application/json'})
                .end((err, res) => {
                    // eslint-disable-next-line no-unused-expressions
                    //expect(res.body.data).to.be.json;
                    should.exist(res);
                    res.should.be.an('object');
                    done();
                });
        });

        //you can have multiple it statements here
    });

//-------------skeleton tests---------------
//they have to check against a desired output/result!!
    describe("PATCH localhost:9000/api/update_todo/43", () => {

        it("should update a todo_id:43", (done) => {
            chai.request(app)
                .patch('localhost:9000/api/update_todo/43')
                .set({'Accept':'application/json', 'Content-Type': 'application/json'})
                .send({todo_text: "ice cream"})
                .end((err, res) => {
                    done();
                });
        });

        //you can have multiple it statements here
    });

    describe("POST http://localhost:9000/api/new_todo", () => {

        it("should creat a new todo", (done) => {
            chai.request(app)
                .post('http://localhost:9000/api/new_todo')
                .set({'Accept':'application/json', 'Content-Type': 'application/json'})
                .send({d_todo_text: "ice cream"})
                .end((err, res) => {
                    if (err) done(err);
                    done();
                });
            done();
        });

        //you can have multiple it statements here
    });

    describe("GET localhost:9000/", () => {

        it("check landing page", (done) => {
            chai.request(app)
                .get('localhost:9000/')
                .end((err, res) => {
                    done();
                });
        });
    });

    describe("GET localhost:9000/", () => {

        it("check api page", (done) => {
            chai.request(app)
                .get('localhost:9000/api')
                .end((err, res) => {
                    done();
                });
        });
    });
});
