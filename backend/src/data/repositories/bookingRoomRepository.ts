import { QueryModifier } from 'common/models';
import BookingRoomModel from '../models/BookingRoom';
import { BaseRepository } from './BaseRepository';

export class BookingRoomRepository extends BaseRepository {
	model = BookingRoomModel;

	queryModifier: QueryModifier = {};
}

export default new BookingRoomRepository();
