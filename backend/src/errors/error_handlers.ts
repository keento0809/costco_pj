import { Request, Response, NextFunction } from "express";

export default function errorHandler (req: Request, res: Response, err: any){
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}