export interface IBooking {
	id: number;
	isActive: string;
	user_id: number;
	property: string;
	property_id: number;
	images: { id: number; url: string }[];
	city: string;
	city_id: number;
	startDate: string;
	finishDate: string;
	price: number;
}
