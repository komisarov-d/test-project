import { checkIsExpectedError } from 'common/helpers/exception/checkIsExpectedError/checkIsExpectedError.helper';
import { getFetchUrl } from '../getFetchUrl/getFetchUrl.helper';
import { getFetchFormArgs } from '../getFetchFormArgs/getFetchFormArgs.helper';
import { checkResponseFailed } from '../checkResponseFailed/checkResponseFailed.helper';
import { IFetchFormArgsData } from 'common/models';
import { HttpError } from 'common/exceptions';

const callApiToUploadFile = async (args: IFetchFormArgsData): Promise<Response> => {
	try {
		const fetchArgs = await getFetchFormArgs(args);
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

export { callApiToUploadFile };
