import { call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { fetchPropertyRoutine, postReviewRoutine } from './reviewRoutines';

const [getPropertyByIdRequest, watchGetPropertyById] = handleSaga(
	fetchPropertyRoutine,
	function* getProperties({ payload }) {
		return yield call(API.Property.getPropertyById, payload);
	}
);

const [saveReviewRequest, watchSaveReviewRequest] = handleSaga(postReviewRoutine, function* saveReview({ payload }) {
	const review = payload.reviewData;
	const reviewRoom = payload.reviewRoomData;
	const reviewResponse = yield call(API.Review.sendReviewData, review);
	const reviewRoomResponse = yield call(API.Review.sendReviewRoomData, {
		...reviewRoom,
		review_id: (reviewResponse as any).id
	});
	return { reviewResponse, reviewRoomResponse };
});

export { getPropertyByIdRequest, saveReviewRequest };
export default watchAllSagas([watchGetPropertyById, watchSaveReviewRequest]);
