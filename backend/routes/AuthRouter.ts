import express from "express";
const AuthRouter = express.Router();

AuthRouter
    .route("/googleLogin")
    .get()
    .post()

AuthRouter
    .route("/signup")
    .get()
    .post()

AuthRouter
    .route("/userOption")
    .get()
    .post()

AuthRouter
    .route("/userGuide")
    .get()

AuthRouter
    .route("/userFaq")
    .get()

AuthRouter
    .route("/notifications")
    .get()

AuthRouter
    .route("/login")
    .get()
    .post()

export default AuthRouter;