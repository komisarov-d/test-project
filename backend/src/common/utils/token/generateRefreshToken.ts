import jwt, { SignOptions } from 'jsonwebtoken';
import { tokenConfig } from '../../../config';

const { tokens, secret } = tokenConfig.JWT_CONFIG;

const generateRefreshToken = () => {
	const payload = {
		type: tokens.refresh.type
	};

	const options: SignOptions = {
		expiresIn: tokens.refresh.expiresIn
	};

	const refreshToken = jwt.sign(payload, secret, options);

	return refreshToken;
};

export { generateRefreshToken };
