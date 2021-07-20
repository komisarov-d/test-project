import jwt, { SignOptions } from 'jsonwebtoken';
import { tokenConfig } from '../../../config';

const { tokens, secret } = tokenConfig.JWT_CONFIG;

const generateAccessToken = (userId: number) => {
	const payload = {
		id: userId,
		type: tokens.access
	};

	const options: SignOptions = {
		expiresIn: tokens.access.expiresIn
	};

	const accessToken = jwt.sign(payload, secret, options);

	return accessToken;
};

export { generateAccessToken };
