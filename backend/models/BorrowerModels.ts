import { history } from "./HistoryModels";

export interface Borrower {
  borrowerId: string;
  name: string;
  email: string;
  password: string;
  histories: history[];
}
