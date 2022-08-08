import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response, Application } from "express";
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';
import logger from './misc/logger';
import router from './routes';
// import appRouter from './routes';

// dotenv always initialize in top 
dotenv.config();  
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get("/" ,(req:Request,res:Response) =>{
  res.send('server is running');
});

app.use(router);

app.use(notFound);
app.use(errorHandler);




app.listen(port, () => {
  console.clear();
  // we can use logger in everywhere 
 logger.info(`Server running at : ${port}/`);
});