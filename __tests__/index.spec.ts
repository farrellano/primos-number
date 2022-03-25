import 'jest';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

const app = require('./../index.ts');

describe('integration tests', () => {


  it('should get the error with a not numeric', async () => {
    await request(app).get('/primos-number?number=AA').expect(StatusCodes.BAD_REQUEST);
  });

  it('should get the ok', async () => {
    await request(app)
      .get('/primos-number?number=9')
        .expect(StatusCodes.OK)
      .then((res) => {
          console.log(res);
        expect(res.body).toStrictEqual("9,7,5,3,2");
      });
  });


});