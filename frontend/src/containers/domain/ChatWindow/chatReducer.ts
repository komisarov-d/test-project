import { Reducer } from 'redux';
import { getMessagesRoutine } from './chatRoutines';
import { IMessage } from 'common/models';

type State = {
	message: IMessage[];
};

const initialState: State = {
	message: []
};

export const messages: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case getMessagesRoutine.SUCCESS: {
			const { results } = action.payload;
			return {
				...state,
				message: results
			};
		}

		default:
			return state;
	}
};
