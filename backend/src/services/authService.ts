import { CryptoHelper, TokenHelper } from '../common/utils';
import userRepository from '../data/repositories/UserRepository';
import { ICreateUser } from '../common/models';
import { UserRole } from '../common/enums/user/UserRole';

export const login = async (id: number) => {
	const accessToken = TokenHelper.generateAccessToken(id);
	const refreshToken = TokenHelper.generateRefreshToken();

	return {
		refreshToken,
		token: accessToken,
		user: await userRepository.getById(id)
	};
};

export const register = async ({ password, ...userData }: ICreateUser) => {
	const newUser = await userRepository.create({
		...userData,
		password: await CryptoHelper.encrypt(password),
		role: UserRole.USER,
	});

	return login(newUser.id);
};
