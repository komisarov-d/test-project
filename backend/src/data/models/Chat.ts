import * as yup from 'yup';
import BaseModel from './BaseModel';

class Chat extends BaseModel {
    name: string;

    static get schema() {
		return yup.object().shape({
			name: yup.string().required(),
		});
	}

	static get tableName() {
		return 'chats';
	}
}

export default Chat;
