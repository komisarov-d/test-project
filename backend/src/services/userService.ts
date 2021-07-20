import userRepository from '../data/repositories/UserRepository';
import { CryptoHelper, CustomError } from '../common/utils';
import { IUpdateUserPayload } from '../common/models';
import { ResponseErrorMessage, ResponseStatusCode } from '../common/enums';

export const getUserById = async (id: number) => userRepository.getById(id);

export const updateUser = async ({ userId, userData: { password, ...userToUpdateData } }: IUpdateUserPayload) => {
	if (userToUpdateData.email) {
		const user = await userRepository.getUserByEmail(userToUpdateData.email);
		if (user && user?.id !== userId) {
			throw new CustomError(ResponseStatusCode.BadRequest, ResponseErrorMessage.EmailAlreadyTaken);
		}
	}

	const updatedUser = password
		? await userRepository.updateUser(userId, {
				password: await CryptoHelper.encrypt(password),
				...userToUpdateData
		  })
		: await userRepository.updateUser(userId, userToUpdateData);

	return updatedUser;
};
