import mongoose from "mongoose";
import Holder from "./Holder.i";

const holderSchema = new mongoose.Schema<Holder>(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
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
            select: false
        },
        avatar: {
            type: String,
            required: false,
        },
        socialMediaLinks: {
            type: {},
            required: true,
        },
        followers: {
            type: [],
            required: false,
        },
        nextSchedules: {
            type: [],
            required: false,
        },
        reviews: {
            type: [],
            required: false,
        },
        histories: {
            type: [],
            required: false,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Holder", holderSchema);
