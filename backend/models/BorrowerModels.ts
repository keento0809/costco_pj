// @ts-ignore
import {History} from "./HistoryModels";
import mongoose from "mongoose";

export interface Borrower {
    borrowerId: string;
    name: string;
    email: string;
    password: string;
    histories: History[];
}

const borrowerSchema = new mongoose.Schema<Borrower>(
    {
        borrowerId: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        histories: {
            type: [],
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Borrower", borrowerSchema);
