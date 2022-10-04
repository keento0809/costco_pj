interface User {
    name: string,
    userDescription: string,
    avatar ? : string,
    contactDetail: string,
    price: number
}

export interface Schedule {
    date: Date;
    time: string;
    place: string;
    meetupUser: User;
}
