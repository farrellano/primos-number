import express, { Request, Response } from 'express';
import {
	StatusCodes
} from 'http-status-codes';
import isNumber from 'is-number';

const app = express();
const port = 3000;

const getCalculatePrimos = (request: Request, response: Response ) => {

    let { number } : any = request.query;

    if(!isNumber(number)){
        return response.status(StatusCodes.BAD_REQUEST).json({
            error_msg: "The param request 'number' is not numeric",
          });
    }else {
        let n = number;
   
        if(n %2==0){
            return response.status(StatusCodes.CONFLICT).json({
                error_msg: `the number ${request.query.number} is par`,
              });
        }
        let primosNumbersMoreTwo = [];
        for(let i = n; n >= 2; n-- ){
            if(n%2 != 0){
                primosNumbersMoreTwo.push(n);
            }
        }
        primosNumbersMoreTwo.push(2);
        response.status(StatusCodes.OK).json(`${primosNumbersMoreTwo}`);
    }    
};

app.get('/primos-number', getCalculatePrimos);

app.listen(port, () => {
  console.log(`Primos number application is running on port ${port}.`);
});

module.exports = app;