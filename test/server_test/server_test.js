const chai = require('chai').assert;
const chaiHttp = require('chai-http');
const server_function = require('../../server_side/server');

chai.use(chaiHttp);
chai.should();
