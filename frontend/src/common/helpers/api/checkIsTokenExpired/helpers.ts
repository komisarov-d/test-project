import jwtDecode from 'jwt-decode';
import { IDecodedToken } from 'common/models';

const JWT_TOKEN_TIME_MULTIPLIER = 1000;

const checkIsTokenExpired = (token: string): boolean => {
	const jwtPayload = jwtDecode<IDecodedToken>(token);
	const expirationDate = new Date(jwtPayload.exp * JWT_TOKEN_TIME_MULTIPLIER);
	const isExpired = expirationDate < new Date();

	return isExpired;
};

export { checkIsTokenExpired };
