import express from "express";
const HistoryRouter = express.Router();

HistoryRouter.route("/:userId").get();
HistoryRouter.route("/new").post();

export default HistoryRouter;
