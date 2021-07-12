import MessageModel from '../models/Message';
import { BaseRepository } from './BaseRepository';
import { QueryModifier } from '../../common/models';

export class BookingRepository extends BaseRepository {
	authorId: number;

	chatId: number;

	text: string;

	model = MessageModel;

	queryModifier: QueryModifier = {
		
		getList: (query, params = {}) => {
			query
				.withGraphFetched('author')
				.where('chat_id', params.chatId);
		},

		getById: (query, params = {}) => {
			query
				.findById(params.id)
				.withGraphFetched('author');
		}
	};
}

export default new BookingRepository();
