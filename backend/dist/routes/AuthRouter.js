"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controller/auth_controllers");
const AuthRouter = express_1.default.Router();
AuthRouter
    .route("/register/:id")
    .get()
    .post(auth_controllers_1.register);
AuthRouter
    .route("/googleLogin")
    .get()
    .post();
AuthRouter
    .route("/login")
    .get()
    .post(auth_controllers_1.login);
AuthRouter
    .route("/userGuide")
    .get();
AuthRouter
    .route("/userFaq")
    .get();
AuthRouter
    .route("/notifications")
    .get();
//Delete it later
AuthRouter
    .route("/borrower/allUsers")
    .get([auth_controllers_1.loginHandler], auth_controllers_1.allUsers);
exports.default = AuthRouter;
