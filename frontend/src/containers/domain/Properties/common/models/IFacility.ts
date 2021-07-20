export interface IFacility {
	description: string;
	price: number;
	persons: number;
	rooms: number;
	beds: number;
	quantity: number;
	id: number | string;
	roomAmenities: string[];
}
