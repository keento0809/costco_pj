import { Request, Response, NextFunction } from "express";

export default function errorHandler (err: any, req: Request, res: Response){
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}