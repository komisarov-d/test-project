import { Request, Response } from 'express';
import { tokenConfig } from '../../config';
import { TokenHelper } from '../../common/utils';
import { IRefreshToken } from '../../common/models';
import { ResponseErrorMessage, ResponseStatusCode } from '../../common/enums';

const { secret, tokens } = tokenConfig.JWT_CONFIG;

const refreshAuthToken = async (req: Request, res: Response) => {
	const { refreshToken, userId } = req.body as IRefreshToken;

	try {
		const payload = TokenHelper.verifyToken(refreshToken, secret);

		if (payload.type !== tokens.refresh.type) {
			res.status(ResponseStatusCode.Unauthorized).json({
				message: ResponseErrorMessage.InvalidToken
			});

			return;
		}
	} catch (err) {
		const isTokenExpired = TokenHelper.checkIsTokenExpired(err);
		const isTokenWebError = TokenHelper.checkIsTokenWebError(err);

		if (isTokenExpired || isTokenWebError) {
			res.status(ResponseStatusCode.Unauthorized).json({
				message: ResponseErrorMessage.InvalidToken
			});

			return;
		}
	}

	res.json({
		token: TokenHelper.generateAccessToken(userId)
	});
};

export { refreshAuthToken };
