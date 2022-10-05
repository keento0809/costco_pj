import { History } from "./HistoryModels";
import { SocialMediaLinksObj, NextScheduleObj } from "./HolderModels";
import mongoose from "mongoose";
import mongodb from "mongodb";

export interface Borrower {
  _id: mongodb.ObjectId;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  socialMediaLinks?: SocialMediaLinksObj;
  nextSchedules?: NextScheduleObj[];
  histories?: History[];
}

const borrowerSchema = new mongoose.Schema<Borrower>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
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
    avatar: {
      type: String,
      required: false,
    },
    socialMediaLinks: {
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

export default mongoose.model("Borrower", borrowerSchema);
