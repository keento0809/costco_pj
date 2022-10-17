import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db";

dotenv.config();
connectDB();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`[server] server is running on port ${port}.`);
});
