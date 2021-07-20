interface Review {
	review: string;
	hotelName: string;
	hotelImageUrl: string;
	rating: number;
}

export interface IUser {
	id?: number;
	email: string;
	firstName?: string;
	lastName?: string;
	password?: string;
	profileImage?: string;
	reviews?: Review[];
	city?: string;
	age?: number;
}
