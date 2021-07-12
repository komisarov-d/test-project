import { Reducer } from 'redux';
import { IUser } from 'common/models';
import { fetchViewerRoutine, removeViewerRoutine } from './authRoutines';

type State = {
	viewer: IUser | null;
	isAuthorized: boolean;
};

const initialState: State = {
	viewer: null,
	isAuthorized: false
};

export const viewer: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case fetchViewerRoutine.SUCCESS: {
			const { payload } = action;
			return {
				...state,
				viewer: payload,
				isAuthorized: Boolean(viewer && payload.id)
			};
		}

		case removeViewerRoutine.TRIGGER:
			return {
				...state,
				isAuthorized: false,
				viewer: null
			};

		default:
			return state;
	}
};
