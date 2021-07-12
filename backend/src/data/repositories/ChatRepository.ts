import ChatModel from '../models/Chat';
import { BaseRepository } from './BaseRepository';

export class BookingRepository extends BaseRepository {
	model = ChatModel;
}

export default new BookingRepository();
