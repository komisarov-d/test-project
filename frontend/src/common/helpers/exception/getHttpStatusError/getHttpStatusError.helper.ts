import { HttpError } from 'common/exceptions';

const getHttpStatusError = <T extends HttpError>(error: T): string => {
	const httpStatusError = ` ${error?.status ?? ''}`;

	return httpStatusError;
};

export { getHttpStatusError };
