import { Reducer } from 'redux';
import { IProperty } from '../Properties/common/models';
import { fetchPropertyRoutine } from './bookingRoutines';

type State = {
	property: IProperty;
	loaded: boolean;
};

const initialState: State = {
	property: null,
	loaded: false
};

export const booking: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case fetchPropertyRoutine.SUCCESS: {
			const { payload } = action;
			return {
				...state,
				property: payload,
				loaded: true
			};
		}

		case fetchPropertyRoutine.TRIGGER:
			return {
				...state,
				property: null
			};

		case fetchPropertyRoutine.FAILURE: {
			return {
				...state,
				property: null,
				loaded: true
			};
		}

		default:
			return state;
	}
};
