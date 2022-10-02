import { History } from "./HistoryModels";

export interface Borrower {
  borrowerId: string;
  name: string;
  email: string;
  password: string;
  histories: History[];
}
