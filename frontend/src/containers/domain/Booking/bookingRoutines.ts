import { createRoutine } from 'redux-saga-routines';

export const fetchPropertyRoutine = createRoutine('BOOKING_FETCH_PROPERTY');
export const postBookingRoutine = createRoutine('BOOKING_POST_DATA');
export const postBookingRoomsRoutine = createRoutine('BOOKING_ROOMS_POST_DATA');
