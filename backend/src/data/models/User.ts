import BaseModel from './BaseModel';

class User extends BaseModel {
	firstName: string;

	lastName: string;

	email: string;

	password: string;

	role: string;

	static get tableName() {
		return 'users';
	}
}

export default User;
