import { createRoutine } from 'redux-saga-routines';

export const fetchPropertyRoutine = createRoutine('REVIEW_FETCH_PROPERTY');
export const postReviewRoutine = createRoutine('REVIEW_POST_DATA');
export const postReviewRoomsRoutine = createRoutine('REVIEW_ROOMS_POST_DATA');
