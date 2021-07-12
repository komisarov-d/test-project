import { TokenType } from '../../enums';

export interface IVerifyTokenPayload {
	type: TokenType;
	iat: number;
	exp: number;
}
