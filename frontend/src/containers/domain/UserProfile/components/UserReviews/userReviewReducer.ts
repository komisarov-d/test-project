import { Reducer } from 'redux';
import { IReview } from 'common/models/review/IReview';
import { getReviewRoutine } from './userReviewRoutines';

type State = {
	reviews: IReview[];
};

const initialState: State = {
	reviews: []
};

export const userReviews: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case getReviewRoutine.SUCCESS: {
			const { results } = action.payload;
			return {
				...state,
				reviews: results
			};
		}

		default:
			return state;
	}
};
