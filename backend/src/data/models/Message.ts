import * as yup from 'yup';
import BaseModel from './BaseModel';

class Message extends BaseModel {
	authorId: number;

	chatId: number;

	text: string;

    static get schema() {
		return yup.object().shape({
			authorId: yup.number().required().positive().integer(),
			chatId: yup.number().required().positive().integer(),
			text: yup.string().required().default(''),
		});
	}

	static get tableName() {
		return 'messages';
	}

	static relationMappings() {
		const User = require('./User').default;

		return {
			author: {
				filter: (query: any) => query.select("first_name", "last_name", "email"),
				relation: BaseModel.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'messages.author_id',
					to: 'users.id'
				}
			}
		};
	}
}

export default Message;
