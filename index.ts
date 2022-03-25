import express, { Request, Response } from 'express';
import isNumber from 'is-number';

const app = express();
const port = 3000;

const getCalculatePrimos = (request: Request, response: Response ) => {

    let { number } : any = request.query;

    if(!isNumber(number)){
        return response.status(400).json({
            status_code: 400,
            error_msg: "The param request 'number' is not numeric",
          });
    }else {
        let n = number;
   
        if(n %2==0){
            return response.status(409).json({
                status_code: 409,
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
        response.status(200).json(`${primosNumbersMoreTwo}`);
    }    
};

app.get('/primos-number', getCalculatePrimos);

app.listen(port, () => {
  console.log(`Primos number application is running on port ${port}.`);
});