import { QueryModifier } from '../../common/models';
import { BaseRepository } from './BaseRepository';
import ReviewModel from '../models/Review';

export class ReviewRepository extends BaseRepository {
	model = ReviewModel;

	queryModifier: QueryModifier = {
		getList: (query, params = {}) => {
			query
				.where('user_id', params.userId)
				.withGraphFetched('property')
				.withGraphFetched('images');
		}, 

		getById: (query, params = {}) => {
			query
				.findById(params.id)
				.withGraphFetched('property')
				.withGraphFetched('images');
		}
	};
}

export default new ReviewRepository();
