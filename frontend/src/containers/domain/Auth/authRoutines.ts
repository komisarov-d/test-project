import { createRoutine } from 'redux-saga-routines';

export const fetchViewerRoutine = createRoutine('FETCH_USER');
export const removeViewerRoutine = createRoutine('REMOVE_USER');
export const logInRoutine = createRoutine('LOG_IN');
export const registerRoutine = createRoutine('REGISTER');
