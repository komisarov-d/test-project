import { removeViewerRoutine as resetUser } from 'containers/domain/Auth/authRoutines';
import API from 'services';

export const handleResponse = async <T>(response: Response): Promise<T> => {
	const text = await response.text();
	const data = text && JSON.parse(text);
	if (!response.ok && [401, 403].includes(response.status)) {
		await API.Auth.logout();
		resetUser();
		const error = (data && data.message) || response.statusText;
		return Promise.reject(error);
	}
	return data;
};
