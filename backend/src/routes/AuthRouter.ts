
import express from "express";
import {
    allUsers, deleteUser,
    forgotPassword,
    login,
    loginHandler,
    register,
    borrower_resetPassword,
    updatePassword, updateUserInfo, holder_resetPassword
} from "../controller/auth_controllers";
const AuthRouter = express.Router();

AuthRouter
    .route("/register/:type")
    .get()
    .post(register);

AuthRouter
    .route("/login/:type")
    .get()
    .post(login)

AuthRouter
    .route("/forgotPassword/:type")
    .post(forgotPassword)

AuthRouter
    .route("/resetPassword/borrower/:token")
    .patch(holder_resetPassword)

AuthRouter
    .route("/resetPassword/borrower/:token")
    .patch(borrower_resetPassword)

AuthRouter
    .route("/updateUserInfo/:type")
    .patch([loginHandler], updateUserInfo)

AuthRouter
    .route("/deleteAccount/:type")
    .delete([loginHandler], deleteUser)

AuthRouter
    .route("/updatePassword/:type")
    .patch([loginHandler], updatePassword)


/**
 * TODO:
 *  Google login
 *  notification
 *  add review (restrict To "borrower")
 */

//Delete it later

// AuthRouter
//     .route("/getUser/:type")
//     .get([loginHandler], getUser)

AuthRouter
    .route("/getAllUsers/:type")
    .get([loginHandler], allUsers)

export default AuthRouter;