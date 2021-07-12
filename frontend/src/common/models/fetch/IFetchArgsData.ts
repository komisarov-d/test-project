/* eslint-disable @typescript-eslint/ban-types */
export interface IFetchArgsData {
	type: string;
	endpoint: string;
	requestData?: object | string;
	queryParams?: object;
	isTokenRequired?: boolean;
}
