import { callAPI } from 'common/helpers';
import { IProperty } from 'containers/domain/Properties/common/models';
import { IApiBookingParams, IApiBookingRoomParams } from 'common/types';
import { IBooking } from 'common/models/booking';

export const getBookings = async (userId: number): Promise<IBooking> => {
	const response = await callAPI({
		endpoint: `/booking`,
		queryParams: {
			userId
		},
		type: 'GET'
	});
	return response.json();
};

export const sendBookingData = async (params: IApiBookingParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/booking`,
		type: 'POST',
		requestData: params
	});
	return response.json();
};

export const sendBookingRoomData = async (params: IApiBookingRoomParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/booking-room`,
		type: 'POST',
		requestData: params
	});
	return response.json();
};

export const getBookingById = async (id: number): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/booking/${id}`,
		type: 'GET'
	});
	return response.json();
};
