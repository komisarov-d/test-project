import BookingModel from '../models/Booking';
import { BaseRepository } from './BaseRepository';
import { QueryModifier } from '../../common/models';
import * as yup from 'yup';

const getListSchema = yup.object().shape({
	cityId: yup.number(),
});

export class BookingRepository extends BaseRepository {

	model = BookingModel;

	queryModifier: QueryModifier = {
		getList: (query, params = {}) => {
			getListSchema.validateSync(params);

			query
				.select('booking.*', 'city.name as city', 'property.name as property')
				.joinRelated({ property: true, city: true })
				.withGraphFetched('images')
				.where('user_id', params.userId);
		},

		getById: (query, params = {}) => {
			query
				.findById(params.id)
				.select('booking.*', 'city.name as city', 'property.name as property')
				.joinRelated({ property: true, city: true })
				.withGraphFetched('images');
		}
	};
}

export default new BookingRepository();
