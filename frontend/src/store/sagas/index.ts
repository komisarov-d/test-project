import { all } from 'redux-saga/effects';

import authSagas from 'containers/domain/Auth/authSaga';
import propertySagas from 'containers/domain/Properties/propertiesSaga';
import bookingSagas from 'containers/domain/Booking/bookingSaga';
import chatSaga from 'containers/domain/ChatWindow/chatSaga';
import userBookingSaga from 'containers/domain/UserProfile/components/UserBookings/userBookingSaga';
import reviewSaga from 'containers/domain/Review/reviewSaga';
import userReviewSaga from 'containers/domain/UserProfile/components/UserReviews/userReviewSaga';

export default function* rootSaga(): Generator {
	yield all([authSagas, propertySagas, bookingSagas, userBookingSaga, reviewSaga, userReviewSaga, chatSaga]);
}
