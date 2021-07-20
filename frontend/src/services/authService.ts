/* eslint-disable import/no-cycle */
import { store } from 'store';
import { callAPI, handleResponse } from 'common/helpers';
import { ILoginData, IRegisterData } from 'containers/domain/Auth/common/models';
import { StorageKey } from 'common/enums';
import { IRefreshTokenData, IStoredAuthData, IUser } from 'common/models';
import { removeViewerRoutine as resetUser } from 'containers/domain/Auth/authRoutines';
import Services from './index';

const setToken = async (response: Response) => {
	const authUserData = await handleResponse<IStoredAuthData>(response);

	Services.Storage.setItem(StorageKey.AUTH_DATA, authUserData);
};

export const getToken = (): IStoredAuthData => {
	const authData = Services.Storage.getItem<IStoredAuthData>(StorageKey.AUTH_DATA);

	return authData;
};

export const resetToken = (): void => {
	Services.Storage.removeItem(StorageKey.AUTH_DATA);
};

const setUpdatedToken = (token: string): void => {
	const storedAuthData = Services.Storage.getItem<IStoredAuthData>(StorageKey.AUTH_DATA);

	const updatedAuthData: IStoredAuthData = {
		...storedAuthData,
		token
	};

	Services.Storage.setItem<IStoredAuthData>(StorageKey.AUTH_DATA, updatedAuthData);
};

export const login = async (request: ILoginData): Promise<void> => {
	const response = await callAPI({
		endpoint: '/auth/login',
		type: 'POST',
		requestData: request
	});
	await setToken(response);
};

export const register = async (request: IRegisterData): Promise<void> => {
	const response = await callAPI({
		endpoint: '/auth/register',
		type: 'POST',
		requestData: request
	});
	await setToken(response);
};

export const getCurrentUser = async (): Promise<IUser> => {
	const response = await callAPI({
		endpoint: '/auth/user',
		type: 'GET'
	});
	return response.json();
};

export const getUpdatedToken = async (refreshToken: string, userId: number): Promise<string> => {
	const response = await callAPI({
		type: 'POST',
		endpoint: '/auth/refresh-token',
		requestData: {
			userId,
			refreshToken
		},
		isTokenRequired: false
	});

	const { token } = (await response.json()) as IRefreshTokenData;

	setUpdatedToken(token);

	return token;
};

export const logout = (): void => {
	store.dispatch(resetUser());
	resetToken();
};
