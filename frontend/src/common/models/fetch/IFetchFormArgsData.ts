export interface IFetchFormArgsData {
	endpoint: string;
	body?: FormData;
	queryParams?: Record<string, unknown>;
}
