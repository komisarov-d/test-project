import { getInitHeaders } from 'common/helpers/api/getInitHeaders/getInitHeaders.helper';
import { IFetchArgs, IFetchArgsData } from 'common/models';

const getFetchArgs = async (args: IFetchArgsData): Promise<IFetchArgs> => {
	const headers = await getInitHeaders({
		isTokenRequired: args.isTokenRequired
	});
	const hasData = Boolean(args.requestData);

	return {
		method: args.type,
		headers,
		body: hasData ? JSON.stringify(args.requestData) : null
	};
};

export { getFetchArgs };
