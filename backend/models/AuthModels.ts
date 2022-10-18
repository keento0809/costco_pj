import mongodb from "mongodb";
import {History} from "./HistoryModels";

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

export interface User {
    _id: mongodb.ObjectId;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    type: string;
    avatar?: string;
    histories?: History[];
    socialMediaLinks?: SocialMediaLinksObj;
    nextSchedules?: NextScheduleObj[]
}
