import { getInitHeaders } from 'common/helpers/api/getInitHeaders/getInitHeaders.helper';
import { IFetchFormArgs, IFetchFormArgsData } from 'common/models';
import { ApiMethod } from 'common/enums';

const getFetchFormArgs = async (args: IFetchFormArgsData): Promise<IFetchFormArgs> => {
	const headers = await getInitHeaders({
		hasContent: false
	});

	return {
		method: ApiMethod.POST,
		headers,
		body: args.body
	};
};

export { getFetchFormArgs };
