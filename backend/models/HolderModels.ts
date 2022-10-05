import {History} from "./HistoryModels";
import mongoose from "mongoose";

interface SocialMediaLinksObj {
    twitterLink: string;
    instagramLink: string;
    facebookLink: string;
}

interface NextScheduleObj {
    date: string;
    borrowerName: string;
    time: string;
}

interface ReviewObj {
    avatarUrl: string;
    borrowerName: string;
    comment: string;
    rating: number;
}

export interface Holder {
    holderId: string;
    name: string;
    email: string;
    socialMediaLinks: SocialMediaLinksObj;
    averageRating: number;
    users: number;
    followers: number;
    nextSchedules: NextScheduleObj[];
    reviews: ReviewObj[];
    histories: History[];
}

const holderSchema = new mongoose.Schema<Holder>(
    {
        holderId: {
            type: String,
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
        socialMediaLinks: {
            type: {},
            required: true,
        },
        averageRating: {
            type: Number,
            required: true,
        },
        users: {
            type: Number,
            required: true,
        },
        followers: {
            type: Number,
            required: true,
        },
        nextSchedules: {
            type: [],
            required: true,
        },
        reviews: {
            type: [],
            required: true,
        },
        histories: {
            type: [],
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Holder", holderSchema);
