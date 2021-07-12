import * as yup from 'yup';
import { BaseRepository } from './BaseRepository';
import { QueryModifier } from '../../common/models';
import PropertyModel from '../models/Property';

const getListSchema = yup.object().shape({
	cityId: yup.number(),
	rating: yup.array(yup.number()),
	type: yup.array(yup.string()),
	amenities: yup.array(yup.string()),
	average_price: yup.array(yup.number()).nullable(),
	rooms: yup.number(),
	adults: yup.number(),
	children: yup.number(),
	roomAmenities: yup.array(yup.string())
});

export class PropertyRepository extends BaseRepository {
	model = PropertyModel;

	queryModifier: QueryModifier = {
		getList: (query, params = {}) => {
			getListSchema.validateSync(params);

			const facilitiesQuery = this.model.relatedQuery('facilities').skipUndefined();

			facilitiesQuery
				.where('persons', '>=', (params.adults ?? 0) + (params.children ?? 0))
				.where('rooms', '>=', params.rooms)
				.where('room_amenities', '@>', params.roomAmenities);

			query
				.select('properties.*', 'city.name as city', 'country.name as country')
				.joinRelated({ country: true, city: true })
				.withGraphFetched('images')
				.whereExists(facilitiesQuery)
				.where('city_id', params.cityId)
				.whereIn('rating', params.rating)
				.whereIn('type', params.type)
				.where('amenities', '@>', params.amenities)
				.whereBetween('average_price', params.average_price);
		},

		getById: (query, params = {}) => {
			query
				.findById(params.id)
				.joinRelated({ country: true, city: true })
				.withGraphFetched('facilities')
				.withGraphFetched('images');
		}
	};
}

export default new PropertyRepository();
