import jwt from 'jsonwebtoken';

const checkIsTokenWebError = (err: Error) => {
	const isTokenWebError = err instanceof jwt.JsonWebTokenError;

	return isTokenWebError;
};

export { checkIsTokenWebError };
