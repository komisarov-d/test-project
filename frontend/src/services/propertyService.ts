/* eslint-disable @typescript-eslint/no-unused-vars */
import { callAPI } from 'common/helpers';
import { IProperty } from 'containers/domain/Properties/common/models';
import { IApiGetListParams, IApiGetItemParams } from 'common/types';
import { stringify } from 'query-string';

export const getProperties = async (params: IApiGetListParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: '/properties',
		// endpoint: `/properties?${stringify(params, { arrayFormat: 'bracket' })}`,
		type: 'GET'
	});
	console.log(response.json());
	return response.json();
};

export const getPropertyItem = async (params: IApiGetItemParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/properties/item?${stringify(params)}`,
		type: 'GET'
	});
	return response.json();
};

export const getPropertyById = async ({ id }: { id: string }): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/properties/${id}`,
		type: 'GET'
	});
	return response.json();
};

export const getCities = async (params: IApiGetListParams): Promise<IProperty> => {
	const response = await callAPI({
		endpoint: `/cities/`,
		type: 'GET'
	});
	return response.json();
};
