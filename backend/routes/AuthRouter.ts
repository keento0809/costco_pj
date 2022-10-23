
import express from "express";
import {allUsers, login, loginHandler, register} from "../controller/auth_controllers";
const AuthRouter = express.Router();

AuthRouter
    .route("/register/:type")
    .get()
    .post(register);

AuthRouter
    .route("/googleLogin")
    .get()
    .post()

AuthRouter
    .route("/login")
    .get()
    .post(login)

AuthRouter
    .route("/userGuide")
    .get()

AuthRouter
    .route("/userFaq")
    .get()

AuthRouter
    .route("/notifications")
    .get()

//Delete it later
AuthRouter
    .route("/borrower/allUsers")
    .get([loginHandler], allUsers)

export default AuthRouter;