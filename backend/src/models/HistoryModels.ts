import mongoose from "mongoose";
import mongodb from "mongodb";

interface schedule {
    _id: mongodb.ObjectId;
    holder_id: string;
    borrower_id: string;
    date: Date;
    time: Date;
    costcoPlace: string;
}

export interface History {
    _id: mongodb.ObjectId;
    schedule_id: mongodb.ObjectId;
    review_id?: mongodb.ObjectId;
}

const historySchema = new mongoose.Schema<History>(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        schedule_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        review_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
        },
    },
    {timestamps: true}
);

export default mongoose.model("History", historySchema);
