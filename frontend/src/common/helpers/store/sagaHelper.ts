import { Routine } from 'redux-saga-routines';
import { all, put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

type SagaHandlers = [(action?: AnyAction) => Generator, () => Generator];

export function handleSaga(
	routine: Routine,
	callbackAction: (action: AnyAction) => Generator,
	onError?: (error: Error) => void
): SagaHandlers {
	function* request(action: AnyAction) {
		try {
			const res = yield callbackAction(action);
			yield put(routine.success(res));
		} catch (error) {
			if (onError) onError(error);
			yield put(routine.failure(error.message));
		}
	}

	function* watcher() {
		yield takeEvery(routine.TRIGGER, request);
	}

	return [request, watcher];
}

export function* watchAllSagas(watchers: (() => Generator)[]): Generator {
	yield all(watchers.map(watcher => watcher()));
}
