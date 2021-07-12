interface Advantage {
	text: string;
	iconType: 'card' | 'checkark' | 'default';
}

export interface FacilityIcon {
	icon: string;
	name: string;
}

export interface Availability {
	title: string;
	subtitle: string;
	icon: string;
}

export interface Review {
	name: string;
	country: string;
	image: string;
	text: string;
}

export interface Bed {
	amount: number;
	type: 'full' | 'single';
}

export interface Room {
	name: string;
	persons: number;
	beds: Bed[];
	info: {
		advantages: Advantage[];
		facilities: string[];
	};
	price: number;
	freeAmount: number;
}

export interface Description {
	info: string;
	rating: number;
	registrationDate: string | Date;
}

export interface Property {
	title: string;
	address: string;
	city: string;
	description: Description;
	mostPupularFacilities: FacilityIcon[];
	availability: Availability[];
	rooms: Room[];
	review: Review[];
}
