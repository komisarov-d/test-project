import { Reducer } from 'redux';
import { getBookingRoutine } from './userBookingRoutines';
import { IBooking } from 'common/models/booking';

type State = {
	bookings: IBooking[];
};

const initialState: State = {
	bookings: []
};

export const userBookings: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case getBookingRoutine.SUCCESS: {
			const { results } = action.payload;
			return {
				...state,
				bookings: results
			};
		}

		default:
			return state;
	}
};
