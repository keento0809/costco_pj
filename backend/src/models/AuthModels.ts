import mongodb from "mongodb";
import {History} from "./HistoryModels";
import mongoose, {Document} from "mongoose";

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

export interface ReviewObj {
    avatarUrl: string;
    borrowerName: string;
    comment: string;
    rating: number;
}

/**
 * TODO: define type passwordChangedAt from number to smt
 */
export interface User extends mongoose.Document {
    // _id: mongodb.ObjectId;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    type: string;
    avatar?: string;
    active: boolean;
    passwordChangedAt: Date;
    passwordResetToken?: String,
    passwordResetExpires?: Date,
    histories?: History[];
    socialMediaLinks?: SocialMediaLinksObj;
    nextSchedules?: NextScheduleObj[];
    checkPassword(userPassword: string) : Promise<boolean>;
    passwordChanged(timestamp: string) : Promise<boolean>;
    issuePasswordResetToken() : Promise<String>
}
