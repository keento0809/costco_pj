import {User} from "../models/AuthModels";

export {}

declare global {
    namespace Express {
        export interface Request {
            user: any
        }
        export interface Response {
            user: any
        }
    }
}
