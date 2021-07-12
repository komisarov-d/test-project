export interface IApiGetListParams {
	filter?: {
		[key: string]: string | number;
	};
	sort?: [string, string];
	pagination?: {
		page?: string;
		limit?: number;
	};
}

export interface IApiGetItemParams {
	param: string;
	value: string | number;
}
export interface IApiBookingParams {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	user_id: number;
	property_id: number;
	city_id: number;
	start_date: string;
	finish_date: string;
	price: number;
	travell_for_work: boolean;
	booking_for_me: boolean;
	rent_car: boolean;
	airport_shuttle: boolean;
	private_taxi: boolean;
	paperless_confirmation: boolean;
	send_promotions: boolean;
	is_active: string;
}

export interface IApiBookingRoomParams {
	room_id: number;
	booking_id: number;
}

export interface IApiReviewParams {
	user_id: number;
}

export interface IApiReviewRoomParams {
	room_id: number;
	review: number;
}
