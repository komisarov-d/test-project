import { IUser } from './IUser';

export interface IStoredAuthData {
	refreshToken: string;
	token: string;
	user: IUser;
}
