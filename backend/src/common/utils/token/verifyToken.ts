import jwt from 'jsonwebtoken';
import { IVerifyTokenPayload } from '../../models';

const verifyToken = (token: string, secret: string): IVerifyTokenPayload | never => {
	const payload = jwt.verify(token, secret) as IVerifyTokenPayload;

	return payload;
};

export { verifyToken };
