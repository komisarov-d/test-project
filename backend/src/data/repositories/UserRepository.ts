import UserModel from '../models/User';
import { IUpdateUser } from '../../common/models';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository {
	model = UserModel;

	getUserByEmail = async (email: string) => this.model.query().where('email', 'ilike', email).first();

	updateUser = async (userId: number, data: IUpdateUser) =>
		this.model.query().patchAndFetchById(userId, data).withGraphFetched('group');
}

export default new UserRepository();
