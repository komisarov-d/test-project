import BaseModel from './BaseModel';

class Room extends BaseModel {
	propertyId: number;

	description: string;

	price: number;

	quantity: number;

	static get tableName() {
		return 'facilities';
	}
}

export default Room;
