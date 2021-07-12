import * as Yup from 'yup';
import BaseModel from './BaseModel';

class BookingRoom extends BaseModel {
	booking_id: number;

	room_id: number;

	static get schema() {
		return Yup.object().shape({
			bookingId: Yup.number().required(),
			roomId: Yup.number().required()
		});
	}

	static get tableName() {
		return 'booking_rooms';
	}
}

export default BookingRoom;
