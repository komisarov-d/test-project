import { TokenType } from '../common/enums';
import { env } from '../env';

const { secret } = env.app;

const ACCESS_TOKEN_TME_LIFE = '6h';
const REFRESH_TOKEN_TIME_LIFE = '24h';

const JWT_CONFIG = {
	secret,
	tokens: {
		access: {
			type: TokenType.ACCESS,
			expiresIn: ACCESS_TOKEN_TME_LIFE
		},
		refresh: {
			type: TokenType.REFRESH,
			expiresIn: REFRESH_TOKEN_TIME_LIFE
		}
	}
};

export { JWT_CONFIG };
