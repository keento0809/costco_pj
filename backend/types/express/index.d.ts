import {User} from "../../models/AuthModels";

interface Locals {
    jwtPayload?: string
    user?: User | null
}
//
// declare global {
//     declare module "express" {
//         export interface Response {
//             locals: Locals
//         }
//     }
//     declare module "express" {
//         export interface Request {
//             locals: Locals
//         }
//     }
// }