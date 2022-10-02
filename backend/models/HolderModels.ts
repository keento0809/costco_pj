import { History } from "./HistoryModels";

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
