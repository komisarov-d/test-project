import { call } from 'redux-saga/effects';
import API from 'services';
import {
	getPropertiesRoutine,
	getCitiesRoutine,
	getPropertyItemMinPriceRoutine,
	getPropertyItemMaxPriceRoutine
} from './propertiesRoutines';
import { handleSaga, watchAllSagas } from 'common/helpers';

const [getPropertiesRequest, watchGetProperties] = handleSaga(
	getPropertiesRoutine,
	function* getProperties({ payload }) {
		return yield call(API.Property.getProperties, payload);
	}
);

const [getPropertyItemMinPriceRequest, watchGetPropertyItemMinPrice] = handleSaga(
	getPropertyItemMinPriceRoutine,
	function* getPropertyItem() {
		return yield call(API.Property.getPropertyItem, { param: 'average_price', value: 'min' });
	}
);

const [getPropertyItemMaxPriceRequest, watchGetPropertyItemMaxPrice] = handleSaga(
	getPropertyItemMaxPriceRoutine,
	function* getPropertyItem() {
		return yield call(API.Property.getPropertyItem, { param: 'average_price', value: 'max' });
	}
);

const [getCitiesRequest, watchGetCities] = handleSaga(getCitiesRoutine, function* getCities({ payload }) {
	return yield call(API.Property.getCities, payload);
});

export { getPropertiesRequest, getCitiesRequest, getPropertyItemMinPriceRequest, getPropertyItemMaxPriceRequest };
export default watchAllSagas([
	watchGetProperties,
	watchGetCities,
	watchGetPropertyItemMinPrice,
	watchGetPropertyItemMaxPrice
]);
