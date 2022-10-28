import mongodb from "mongodb";
import {History} from "./HistoryModels";
import mongoose from "mongoose";

interface SocialMediaLinksObj {
    twitterLink: string;
    instagramLink: string;
    facebookLink: string;
}
interface scheduleObj {
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

export interface User extends mongoose.Document {
    //common schema
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    type: string;
    avatar?: string;
    active: boolean;
    passwordChangedAt: Date;
    passwordResetToken?: String,
    passwordResetExpires?: Date,
    histories?: History[];
    socialMediaLinks?: SocialMediaLinksObj;
    schedules?: scheduleObj[];
    // For holder schema
    description?: string;
    location?: {};
    followers?: User[];
    reviews?: ReviewObj[];
    //For Borrower schema
    favourites?: [];
    funcName?: string;

    checkPassword(userPassword: string) : Promise<boolean>;
    passwordChanged(timestamp: string) : Promise<boolean>;
    issuePasswordResetToken() : Promise<String>
}
