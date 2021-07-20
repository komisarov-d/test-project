import { Reducer } from 'redux';
import { IProperty } from '../Properties/common/models';
import { ICheckmark } from '../../../common/models/review';
import { fetchPropertyRoutine } from './reviewRoutines';

type State = {
	property: IProperty;
	loaded: boolean;
	checkmarks: ICheckmark[];
};

const initialState: State = {
	property: null,
	loaded: false,
	checkmarks: [
		{
			id: 'radio_company_1',
			label: 'Alone',
			name: 'travel_company',
			value: 'Alone'
		},
		{
			id: 'radio_company_2',
			label: 'Friends',
			name: 'travel_company',
			value: 'Friends'
		},
		{
			id: 'radio_company_3',
			label: 'Partner',
			name: 'travel_company',
			value: 'Partner'
		},
		{
			id: 'radio_company_4',
			label: 'Family',
			name: 'travel_company',
			value: 'Family'
		},
		{
			id: 'radio_company_5',
			label: 'Colleagues',
			name: 'travel_company',
			value: 'Colleagues'
		}
	]
};

export const review: Reducer<State> = (state = initialState, action): State => {
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
