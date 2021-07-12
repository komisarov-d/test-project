import { callAPI } from 'common/helpers';
import { IProperty } from 'containers/domain/Properties/common/models';
import { IApiReviewParams, IApiReviewRoomParams } from 'common/types';
import { IReview } from 'common/models/review/IReview';

export const getReviews = async (userId: number): Promise<IReview> => {
	const response = await callAPI({
		endpoint: `/review`,
		queryParams: {
			userId
		},
		type: 'GET'
	});
	return response.json();
};

export const sendReviewData = async (params: IApiReviewParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/review`,
		type: 'POST',
		requestData: params
	});
	return response.json();
};

export const sendReviewRoomData = async (params: IApiReviewRoomParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/review-room`,
		type: 'POST',
		requestData: params
	});
	return response.json();
};

export const getReviewById = async (id: number): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/review/${id}`,
		type: 'GET'
	});
	return response.json();
};
