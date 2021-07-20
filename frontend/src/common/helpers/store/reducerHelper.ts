import { IRequestState } from 'common/models/request';
import { AnyAction } from 'redux';

const extractAllActionDomains = (actionTypes: string[]): string[] => actionTypes.map(type => type.split('/').shift());
const extractActionType = (actionType: string): string => actionType.split('/').pop();
const extractActionDomain = (actionType: string): string => actionType.split('/').shift();

const initialRequestState: IRequestState = {
	loading: false,
	loaded: false,
	error: null
};

export const reducerCreator = (actionTypesFromDomains: string[]) => (
	state = initialRequestState,
	action: AnyAction
): IRequestState => {
	const actionDomains = extractAllActionDomains(actionTypesFromDomains);
	if (!actionDomains.includes(extractActionDomain(action.type))) {
		return state;
	}

	const type = extractActionType(action.type);

	switch (type) {
		case 'TRIGGER':
			return {
				...state,
				loading: true,
				loaded: false
			};
		case 'SUCCESS':
			return {
				...state,
				loading: false,
				loaded: true
			};
		case 'FAILURE':
			return {
				...state,
				error: action.payload,
				loading: false,
				loaded: false
			};
		default:
			return state;
	}
};
