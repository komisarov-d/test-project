import jwt from 'jsonwebtoken';

const checkIsTokenExpired = (err: Error) => {
	const isTokenExpired = err instanceof jwt.TokenExpiredError;

	return isTokenExpired;
};

export { checkIsTokenExpired };
