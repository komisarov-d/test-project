import { call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { getReviewRoutine } from './userReviewRoutines';

const [getReviewsRequest, watchGetReviews] = handleSaga(getReviewRoutine, function* getProperties({ payload }) {
	return yield call(API.Review.getReviews, payload);
});

export { getReviewsRequest };
export default watchAllSagas([watchGetReviews]);
