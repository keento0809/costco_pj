
import express from "express";
import {register} from "../controller/auth_controllers";
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



export default AuthRouter;