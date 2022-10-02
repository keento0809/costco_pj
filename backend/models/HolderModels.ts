import { history } from "./HistoryModels";

interface socialMediaLinksObj {
  twitterLink: string;
  instagramLink: string;
  facebookLink: string;
}

interface nextScheduleObj {
  date: string;
  borrowerName: string;
  time: string;
}

interface reviewObj {
  avatarUrl: string;
  borrowerName: string;
  comment: string;
  rating: number;
}

export interface Holder {
  holderId: string;
  name: string;
  email: string;
  socialMediaLinks: socialMediaLinksObj;
  averageRating: number;
  users: number;
  followers: number;
  nextSchedules: nextScheduleObj[];
  reviews: reviewObj[];
  histories: history[];
}
