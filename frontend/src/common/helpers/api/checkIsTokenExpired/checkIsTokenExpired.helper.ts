import Services from 'services';
import { checkIsTokenExpired } from './helpers';

const getAuthToken = async (): Promise<string | null> => {
	const authData = Services.Auth.getToken();

	if (!authData) {
		return null;
	}

	const isTokenExpired = checkIsTokenExpired(authData.token);

	if (!isTokenExpired) {
		return authData.token;
	}

	const { refreshToken, user } = authData;
	const newToken = await Services.Auth.getUpdatedToken(refreshToken, user.id);

	return newToken;
};

export { getAuthToken };
