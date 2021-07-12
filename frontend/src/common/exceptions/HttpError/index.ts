import { CustomExceptionName, HttpCode } from 'common/enums';
import { DEFAULT_SERVER_ERROR } from './common';

type Constructor = {
	message?: string;
	status?: HttpCode;
};

class HttpError extends Error {
	status: HttpCode;

	constructor({ message = DEFAULT_SERVER_ERROR, status = HttpCode.ServerError }: Constructor) {
		super(message);
		this.name = CustomExceptionName.HTTP_ERROR;
		this.status = status;
	}
}

export default HttpError;
