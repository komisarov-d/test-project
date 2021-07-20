import { call } from 'redux-saga/effects';
import API from 'services';
import { handleSaga, watchAllSagas } from 'common/helpers';
import { fetchPropertyRoutine, postBookingRoutine } from './bookingRoutines';

const [getPropertyByIdRequest, watchGetPropertyById] = handleSaga(
	fetchPropertyRoutine,
	function* getProperties({ payload }) {
		return yield call(API.Property.getPropertyById, payload);
	}
);

const [saveBookingRequest, watchSaveBookingRequest] = handleSaga(
	postBookingRoutine,
	function* saveBooking({ payload }) {
		const booking = payload.bookingData;
		const bookingRoom = payload.bookingRoomData;
		const bookingResponse = yield call(API.Booking.sendBookingData, booking);
		const bookingRoomResponse = yield call(API.Booking.sendBookingRoomData, {
			...bookingRoom,
			booking_id: (bookingResponse as any).id
		});
		return { bookingResponse, bookingRoomResponse };
	}
);

export { getPropertyByIdRequest, saveBookingRequest };
export default watchAllSagas([watchGetPropertyById, watchSaveBookingRequest]);
