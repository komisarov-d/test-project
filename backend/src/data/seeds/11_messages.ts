import * as Knex from 'knex';
import { sample, random } from 'lodash';
import faker from 'faker';

const tableName = 'messages';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const users: any = await knex('users').select('id');
	const chats: any = await knex('chats').select('id');
	console.log(chats);
	const messages: any[] = [];

	for (let i = 0; i < random(20); i++) {
		messages.push({
			author_id: sample(users).id,
			chat_id: sample(chats).id,
			text: faker.lorem.sentences(random(10)),
		});
	}

	await knex(tableName).insert(messages);
}
