import {RequestHandler} from "express";
import Borrower from "../models/BorrowerModels";
import mongoose from "mongoose";

export const register: RequestHandler = async (req, res, next) => {
    try {
        const {type} = req.params;
        const newUser = await Borrower.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            type: type
        })
        res.status(200).json({
            status: "success",
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

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

