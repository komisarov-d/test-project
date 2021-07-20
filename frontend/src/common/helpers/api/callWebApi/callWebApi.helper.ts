import { checkIsExpectedError } from 'common/helpers/exception/checkIsExpectedError/checkIsExpectedError.helper';
import { getFetchUrl } from '../getFetchUrl/getFetchUrl.helper';
import { getFetchArgs } from '../getFetchArgs/getFetchArgs.helper';
import { checkResponseFailed } from '../checkResponseFailed/checkResponseFailed.helper';
import { IFetchArgsData } from 'common/models';
import { HttpError } from 'common/exceptions';

const callWebApi = async (args: IFetchArgsData): Promise<Response> => {
	const fetchArgs = await getFetchArgs(args);

	try {
		const res = await fetch(getFetchUrl(args), fetchArgs);
		await checkResponseFailed(res);

		return res;
	} catch (err) {
		if (checkIsExpectedError(err, TypeError)) {
			throw new HttpError({});
		}

		throw err;
	}
};

export { callWebApi };
