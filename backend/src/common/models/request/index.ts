import { AnyQueryBuilder } from 'objection';
import { GetListRequestParams, RequestType } from '../../enums';

export type QueryBuilder = AnyQueryBuilder;

export type QueryModifier = {
	[key in RequestType]?: (query: QueryBuilder, params?: any) => void | QueryBuilder;
};

export interface IApiGetListParams {
	[GetListRequestParams.SORT]?: string[];
	page?: number;
	limit?: number;
	[key: string]: any;
}

export interface IApiGetByValueParams {
	param: string;
	value: string | number | 'max' | 'min';
}
