import express from "express";
const HolderRouter = express.Router();

HolderRouter
    .route("/holder/home")
    .get()

HolderRouter
    .route("/holder/:id")
    .get()
    .patch()
    .delete()

HolderRouter
    .route("/holder/schedule/:id")
    .get()
    .post()
    .patch()
    .delete()

HolderRouter
    .route("/holder/account/:id")
    .get()
    .post()
    .patch()
    .delete()


export default HolderRouter;