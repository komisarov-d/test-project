/* eslint-disable */
import { IAuthUser } from '../../models/user';

declare global {
	namespace Express {
		interface User extends IAuthUser {}

		interface Request {
			user?: IAuthUser;
			id?: string;
			file: object;
		}
	}
}
