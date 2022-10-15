import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import AuthRouter from "./routes/AuthRouter";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});
app.use("/auth", AuthRouter)

app.listen(port, () => {
  console.log(`[server] server is running on port ${port}.`);
});
