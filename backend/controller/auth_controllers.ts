import {RequestHandler} from "express";
import Borrower from "../models/BorrowerModels";
import {Types} from "mongoose";
import jwt, {JwtPayload, Secret} from "jsonwebtoken";
import dotenv from "dotenv";
import {catchAsync} from "../helpers/middlewares";
dotenv.config();

const JWT_SECRET_KEY: string = process.env.JWT_SECRET!;
const JWT_EXPIRES_DAY : string = process.env.JWT_EXPIRES_IN!;

const signToken = (id: Types.ObjectId) => jwt.sign({ id: id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_DAY
})
/**
 * TODO: Define type of passing user
 */
export const loginHandler = catchAsync(async (req, res, next) => {
    let token : string | undefined;
    let jwtPayload;
    if(req.headers.authorization && req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token) {
        return next(new Error("You don't have token"));
    }
    try {
        jwtPayload = <any>jwt.verify(token, JWT_SECRET_KEY);
        res.locals.jwtPayload = jwtPayload;
    } catch (err) {
        return next(new Error("Invalid token"))
    }
    const user = await Borrower.findById(jwtPayload.id);
    if(!user) {
        next(new Error("The token doesn't exist"))
    }
    if(await user!.passwordChanged(jwtPayload.iat)) {
        return next(new Error("The password changed recently. Login again"));
    }
    res.user = user;
    next();
})

export const register: RequestHandler = async (req, res, next) => {
    try {
        const {type} = req.params;
        console.log(type)
        const newUser = await Borrower.create({
            // _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            passwordChangedAt: req.body.passwordChangedAt,
            type
        })
        const token =  signToken(newUser._id)
        res.status(200).json({
            status: "success",
            token,
            user: newUser
        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const login: RequestHandler = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return next();
        }
        const borrower = await Borrower.findOne({email}).select('+password');
        if(!borrower || await borrower!.checkPassword(password)) {
            return next(); // Invalid email or password
        }
        const token = signToken(borrower._id);
        res.status(200).json({
            status: "success",
            token
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const allUsers = catchAsync( async (req, res, next) => {
    const allUser = await Borrower.find();
    res.status(200).json({
        status: "success",
        date: allUser
    })
})