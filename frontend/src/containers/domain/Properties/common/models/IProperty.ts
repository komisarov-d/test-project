import { IFacility } from './IFacility';

export interface IProperty {
	id: number;
	name: string;
	description: string;
	owner_id: number;
	country_id: number;
	country: string;
	cityId: number;
	city: string;
	street: string;
	rating: number;
	averagePrice: number;
	type: string;
	latitude: number;
	longitude: number;
	images: { id: number; url: string }[];
	facilities: IFacility[];
	amenities: string[] | undefined;
}
