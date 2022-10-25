
import express from "express";
import {
    allUsers, deleteUser,
    forgotPassword,
    login,
    loginHandler,
    register,
    resetPassword,
    updatePassword, updateUserInfo
} from "../controller/auth_controllers";
const AuthRouter = express.Router();

AuthRouter
    .route("/register/:type")
    .get()
    .post(register);

AuthRouter
    .route("/login")
    .get()
    .post(login)

AuthRouter
    .route("/forgotPassword")
    .post(forgotPassword)

AuthRouter
    .route("/resetPassword/:token")
    .patch(resetPassword)

AuthRouter
    .route("/updateUserInfo")
    .patch([loginHandler], updateUserInfo)

AuthRouter
    .route("/deleteAccount")
    .delete([loginHandler], deleteUser)

AuthRouter
    .route("/updatePassword")
    .patch([loginHandler], updatePassword)


/**
 * TODO:
 *  Google login
 *  notification
 */

//Delete it later
AuthRouter
    .route("/borrower/allUsers")
    .get([loginHandler], allUsers)

export default AuthRouter;