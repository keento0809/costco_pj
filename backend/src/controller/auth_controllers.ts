import {NextFunction, Request, Response} from "express";
import {borrowers, holders} from "../models/UserSchema";
import Borrower from "../models/BorrowerModels";
import {Types} from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {catchAsync} from "../helpers/middlewares";
import crypto from "crypto";
import {User} from "../models/UserModel";
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
        expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
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
    const {type} = req.params;
    let user;
    type === "borrower" ?
        user = await borrowers.findOne({email: req.body.email}) :
        user = await holders.findOne({email: req.body.email});

    if (!user) {
        return next(new Error("No user with the email address"))
    }
    const resetToken = user!.issuePasswordResetToken();
    // Deactivate all validator otherwise got error
    await user.save({validateBeforeSave: false});
})

export const borrower_resetPassword = catchAsync(async (req, res, next) => {
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

export const holder_resetPassword = catchAsync(async (req, res, next) => {
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await holders.findOne(
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
    const createOption = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        type
    }
    let newUser;
    type === "borrower" ? newUser = await borrowers.create(createOption) : newUser = await holders.create(createOption);
    sendToken(newUser, 200, res);
})

export const login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body;
    const {type} = req.params;
    let user;
    if (!email || !password) {
        return next(new Error("Please input email and password"));
    }
    type === "borrower" ?
        user = await borrowers.findOne({email}).select('+password') :
        user = await holders.findOne({email}).select('+password');

    if (!user || await user!.checkPassword(password)) {
        return next(new Error("invalid email or password"));
    }
    const token = signToken(user._id);

    res.status(200).json({
        status: "success",
        token,
        data: {
            user
        }
    });
})

export const updatePassword = catchAsync(async (req, res, next) => {
    const {type} = req.params;
    let user;
    type === "borrower" ? user = await borrowers.findById(res.locals.user._id) : user = await holders.findById(res.locals.user._id)

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
    const {type} = req.params;
    let updateUser;
    type === "borrower" ?
        updateUser = await borrowers.findByIdAndUpdate(
            res.locals.user._id, filteredBody,
            {
                new: true,
                runValidators: true
            }) :
        updateUser = await holders.findByIdAndUpdate(
            res.locals.user._id, filteredBody,
            {
                new: true,
                runValidators: true
            })

    res.status(200).json({
        status: "success",
        data: {
            user: updateUser
        }
    })
})

export const deleteUser = catchAsync(async (req, res, next) => {
    const {type} = req.params;
    type === "borrower" ?
        await borrowers.findByIdAndUpdate(res.locals.user._id, {active: false}) :
        await holders.findByIdAndUpdate(res.locals.user._id, {active: false})

    res.status(204).json({
        status: "success"
    })
})

export const allUsers = catchAsync(async (req, res, next) => {
    const allUser = await borrowers.find().populate<{user: User}>([{path: "holders", strictPopulate: false}])
    res.status(200).json({
        status: "success",
        date: allUser
    })
})
