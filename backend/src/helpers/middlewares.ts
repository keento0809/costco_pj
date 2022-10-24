import {Request, Response, NextFunction, RequestHandler} from "express";

interface catchFunc {(
    req: Request,
    res: Response,
    next: NextFunction
    ): Promise<unknown>
}

export const catchAsync = (func: catchFunc) =>{
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(next)
    };
};


