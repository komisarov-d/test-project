import { call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { getMessagesRoutine } from './chatRoutines';

const [getMessagesByChatIdRequest, watchGetMessagesByChatId] = handleSaga(
	getMessagesRoutine,
	function* getMessagesByChatId({ payload }) {
		return yield call(API.Chat.getMessagesByChatId, payload);
	}
);

export { getMessagesByChatIdRequest };
export default watchAllSagas([watchGetMessagesByChatId]);
