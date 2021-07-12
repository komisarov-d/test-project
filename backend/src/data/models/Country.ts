import BaseModel from './BaseModel';

class Country extends BaseModel {
	name: string;

	static get tableName() {
		return 'countries';
	}
}

export default Country;
