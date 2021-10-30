import chai from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import { endsWith } from "sequelize/types/lib/operators";
import app from "../src/app"
chai.should();
chai.use(chaiHttp);

chai.use(chaiHttp);
const expect = chai.expect;


describe('Books Apis', () => {
  it('should return response on call', (done) => {
     chai.request(app).get('/books')
     .send({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1zYXVyYWJoIiwiaWF0IjoxNjM1NDEyMzkwLCJleHAiOjE2MzU0OTg3OTB9.9gHksTtcQwsD0YLfLx5_QQRXU7VlmDi1bJCMr8Jm6qc"}).
     end(function(err, res) {
         if(err)
        expect(res).to.have.status(200);
        res.body.should.be.an('Array');
        done();                               // <= Call done to signal callback end
      });
    });

    
})