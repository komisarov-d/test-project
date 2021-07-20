import BaseModel from './BaseModel';

class City extends BaseModel {
	name: string;

	static get tableName() {
		return 'cities';
	}
}

export default City;
