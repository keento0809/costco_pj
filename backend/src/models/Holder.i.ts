import {ReviewObj, User} from "./AuthModels";
import Borrower from "./Borrower.i";

export default interface Holder extends User{
    location: string;
    description: string;
    followers: Borrower[];
    reviews?: ReviewObj[];
}