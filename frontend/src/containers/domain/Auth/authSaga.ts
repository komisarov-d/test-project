import { put, call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { fetchViewerRoutine, logInRoutine, registerRoutine } from './authRoutines';

const [fetchUserRequest, watchUserRequest] = handleSaga(
	fetchViewerRoutine,
	function* fetchUser() {
		return yield call(API.Auth.getCurrentUser);
	},
	() => API.Auth.logout()
);

const [logInRequest, watchLogInRequest] = handleSaga(logInRoutine, function* login({ payload }) {
	const res = yield call(API.Auth.login, payload);
	yield put(fetchViewerRoutine.trigger());
	return res;
});

const [registerRequest, watchRegisterRequest] = handleSaga(registerRoutine, function* register({ payload }) {
	const res = yield call(API.Auth.register, payload);
	yield put(fetchViewerRoutine.trigger());
	return res;
});

export { fetchUserRequest, logInRequest, registerRequest };
export default watchAllSagas([watchUserRequest, watchLogInRequest, watchRegisterRequest]);
