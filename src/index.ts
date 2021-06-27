import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { enableCorsHeaders } from './middlewares/cors-headers';
import cookieParser from 'cookie-parser';
import indexRouter from './routes';

dotenv.config()

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(enableCorsHeaders);
app.use('/api', indexRouter);
app.listen(Number(process.env.PORT), () => {
  console.log(`Server started running at ${process.env.PORT}`);
})

