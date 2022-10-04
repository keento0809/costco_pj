/**
 * TODO:
 * How connect each review to users
 */

interface User {
    name: string,
    avatar ? : string
}

export interface Review {
    reviewFrom : User;
    description : string;
    rating : number;
}



