// @ts-ignore
import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});
app.use('/auth', )

app.listen(port, () => {
  console.log(`[server] server is running on port ${port}.`);
});
