import { IFetchArgsData } from 'common/models';
import { callWebApi } from '../callWebApi/callWebApi.helper';

const callAPI = (args: IFetchArgsData): Promise<Response> => {
	return callWebApi({
		...args
	});
};

export { callAPI };
