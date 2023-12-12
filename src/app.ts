import express, {Request,Response} from 'express';
import {connectDatabase} from './dbConnection';
import router from './routes/router';
import morgan from 'morgan'
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use(morgan("dev"));

  
app.use('/',router)



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});