import { HttpCode } from 'common/enums';

export interface IServerResponseError {
	message?: string;
	status?: HttpCode;
}
