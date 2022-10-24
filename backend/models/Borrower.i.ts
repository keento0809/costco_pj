import {User} from "./AuthModels";
import Holder from "./Holder.i";

export default interface Borrower extends User {
    favourite: Holder[]
}