import { History } from "./HistoryModels";
import mongoose from "mongoose";
import mongodb from "mongodb";
import { Borrower } from "./BorrowerModels";

export interface SocialMediaLinksObj {
  twitterLink: string;
  instagramLink: string;
  facebookLink: string;
}

export interface NextScheduleObj {
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
  _id: mongodb.ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  location: string;
  description: string;
  socialMediaLinks?: SocialMediaLinksObj;
  followers: Borrower[];
  nextSchedules?: NextScheduleObj[];
  reviews?: ReviewObj[];
  histories?: History[];
}

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
  { timestamps: true }
);

export default mongoose.model("Holder", holderSchema);
