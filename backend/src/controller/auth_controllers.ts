import {NextFunction, Request, Response} from "express";
import Borrower from "../models/BorrowerModels";
import {Types} from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {catchAsync} from "../helpers/middlewares";
import crypto from "crypto";
import {User} from "../models/AuthModels";
import {filterBody} from "../helpers/auth_helper"

dotenv.config();

const JWT_SECRET_KEY: string = process.env.JWT_SECRET!;
const JWT_EXPIRES_DAY: string = process.env.JWT_EXPIRES_IN!;
const JWT_COOKIE_EXPIRES_IN: any = process.env.JWT_COOKIE_EXPIRES_IN!;

const signToken = (id: Types.ObjectId) => jwt.sign({id: id}, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_DAY
});

const sendToken = (user: User, statusCode: number, res: Response) => {
    const token = signToken(user._id);
    const cookieOption = {
        expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN *24 * 60 * 60 * 1000),
        // secure: true,
        httpOnly: true
    }
    res.cookie('jwt', token, cookieOption);
    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    });
}

export const loginHandler = catchAsync(async (req, res, next) => {
    let token: string | undefined;
    let jwtPayload;
    if (req.headers.authorization && req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new Error("You don't have token"));
    }
    try {
        jwtPayload = <any>jwt.verify(token, JWT_SECRET_KEY);
        res.locals.jwtPayload = jwtPayload;
    } catch (err) {
        return next(new Error("Invalid token"))
    }
    const user = await Borrower.findById(jwtPayload.id);
    if (!user) {
        next(new Error("The token doesn't exist"))
    }
    if (await user!.passwordChanged(jwtPayload.iat)) {
        return next(new Error("The password changed recently. Login again"));
    }
    res.locals.user = user;
    next();
})
/**
 * TODO: Send reset token via email
 * TODO: delete passwordResetExpires
 */
export const forgotPassword = catchAsync(async (req, res, next) => {
    const user = await Borrower.findOne({email: req.body.email});
    if (!user) {
        return next(new Error("No user with the email address"))
    }
    const resetToken = user!.issuePasswordResetToken();
    // Deactivate all validator otherwise got error
    await user.save({validateBeforeSave: false});
})

export const resetPassword = catchAsync(async (req, res, next) => {
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await Borrower.findOne(
        {passwordResetToken: hashedToken},
        {passwordResetExpires: {$gt: ["passwordResetExpires", Date.now()]}}
    );

    if (!user) {
        return next(new Error("Token is invalid or expired"))
    }

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.save();

    sendToken(user, 200, res)
})

export const register = catchAsync(async (req, res, next) => {
    const {type} = req.params;
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
    sendToken(newUser, 200, res);
})

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return next(new Error("Please input email and password"));
    }
    const borrower = await Borrower.findOne({email}).select('+password');
    if (!borrower || await borrower!.checkPassword(password)) {
        return next(new Error("invalid")); // Invalid email or password
    }
    const token = signToken(borrower._id);

    res.status(200).json({
        status: "success",
        token
    });
})

export const updatePassword = catchAsync(async (req, res, next) => {
    const user = await Borrower.findById(res.locals.user._id)
    if (!await user!.checkPassword(req.body.currentPassword)) {
        return next(new Error("Your password is wrong"))
    }
    user!.password = req.body.password;
    user!.confirmPassword = req.body.confirmPassword;

    await user!.save();
})

export const updateUserInfo = catchAsync(async (req, res, next) => {
    if (req.body.password) {
        return next(new Error("Wrong route. Please use reset password route "));
    }
    const filteredBody = filterBody(req.body, "name", "email", "avatar")
    const updatedUser = await Borrower.findByIdAndUpdate(res.locals.user._id, filteredBody, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: "success",
        data: {
            user: updatedUser
        }
    })
})

export const deleteUser = catchAsync(async (req, res, next) => {
    await Borrower.findByIdAndUpdate(res.locals.user._id, {active: false});
    res.status(204).json({
        status: "success"
    })
})

export const allUsers = catchAsync(async (req, res, next) => {
    const allUser = await Borrower.find();
    res.status(200).json({
        status: "success",
        date: allUser
    })
})