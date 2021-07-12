import { Reducer } from 'redux';
import { IProperty } from './common/models';
import {
	getPropertiesRoutine,
	getCitiesRoutine,
	getPropertyItemMaxPriceRoutine,
	getPropertyItemMinPriceRoutine
} from './propertiesRoutines';

type State = {
	page: number;
	total: number;
	items: IProperty[];
	cheapestProperty: IProperty | undefined;
	pricestProperty: IProperty | undefined;
	cities: { id: number; name: string }[];
};

const initialState: State = {
	page: 1,
	total: null,
	items: [],
	cities: [],
	cheapestProperty: undefined,
	pricestProperty: undefined
};

export const properties: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		case getPropertiesRoutine.SUCCESS: {
			const { results, total } = action.payload;
			return {
				...state,
				total,
				items: results
			};
		}

		case getPropertyItemMinPriceRoutine.SUCCESS: {
			return {
				...state,
				cheapestProperty: action.payload
			};
		}

		case getPropertyItemMaxPriceRoutine.SUCCESS: {
			return {
				...state,
				pricestProperty: action.payload
			};
		}

		case getCitiesRoutine.SUCCESS: {
			const { results } = action.payload;

			return {
				...state,
				cities: results
			};
		}
		default:
			return state;
	}
};
