import * as yup from 'yup';
import { BaseRepository } from './BaseRepository';
import { QueryModifier } from '../../common/models';
import CityModel from '../models/City';

const getListSchema = yup.object().shape({
	name: yup.string()
});

export class CityRepository extends BaseRepository {
	model = CityModel;

	queryModifier: QueryModifier = {
		getList: (query, filters) => {
			getListSchema.validateSync(filters);
			if (filters.name == undefined) {
				query;
			} else {
				query
					.where('name', 'ILIKE', `%${filters.name}%`);
			}
		}
	};
}

export default new CityRepository();
