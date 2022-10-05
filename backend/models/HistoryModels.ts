import mongoose from "mongoose";

export interface History {
    historyImage: string;
    costcoPlace: string;
    rating: number;
}

const historySchema = new mongoose.Schema<History>(
    {
        historyImage: {
            type: String,
            required: true,
        },
        costcoPlace: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("History", historySchema);
