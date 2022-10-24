import express, { RequestHandler, Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./src/config/db";
import cors from "cors"
import AuthRouter from "./src/routes/AuthRouter";
import errorHandler from "./src/errors/error_handlers";
dotenv.config();

connectDB();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", AuthRouter);

app.all("*" , (req: Request, res: Response, next: NextFunction) => {
  next()
});

app.use(errorHandler)

app.listen(port, () => {
  console.log(`[server] server is running on port ${port}.`);
});
