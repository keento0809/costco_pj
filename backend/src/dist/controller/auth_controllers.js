"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = exports.login = exports.register = exports.loginHandler = void 0;
const BorrowerModels_1 = __importDefault(require("../models/BorrowerModels"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const middlewares_1 = require("../helpers/middlewares");
dotenv_1.default.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET;
const JWT_EXPIRES_DAY = process.env.JWT_EXPIRES_IN;
const signToken = (id) => jsonwebtoken_1.default.sign({ id: id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_DAY
});
exports.loginHandler = (0, middlewares_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let token;
    if (req.headers.authorization && ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.startsWith("Bearer"))) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new Error("You don't have token"));
    }
    // const decodedPayload = await promisify(jwt.verify)(token, JWT_SECRET_KEY);
    // console.log(decodedPayload.id);
}));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        const newUser = yield BorrowerModels_1.default.create({
            // _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            type: type
        });
        const token = signToken(newUser._id);
        res.status(200).json({
            status: "success",
            token,
            user: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next();
        }
        const borrower = yield BorrowerModels_1.default.findOne({ email }).select('+password');
        if (!borrower || (yield borrower.checkPassword(password))) {
            return next(); // Invalid email or password
        }
        const token = signToken(borrower._id);
        res.status(200).json({
            status: "success",
            token
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
exports.login = login;
exports.allUsers = (0, middlewares_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield BorrowerModels_1.default.find();
    res.status(200).json({
        status: "success",
        date: allUser
    });
}));
