import { call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { getBookingRoutine } from './userBookingRoutines';

const [getBookingsRequest, watchGetBookings] = handleSaga(getBookingRoutine, function* getProperties({ payload }) {
	return yield call(API.Booking.getBookings, payload);
});

export { getBookingsRequest };
export default watchAllSagas([watchGetBookings]);
