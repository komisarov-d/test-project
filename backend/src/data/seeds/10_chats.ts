/* eslint-disable max-len */
import * as Knex from 'knex';
import { random } from 'lodash';
import faker from 'faker';

const tableName = 'chats';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const chats: any[] = [];

	for (let i = 0; i < random(20); i++) {
		chats.push({
			name: faker.company.companyName()
		});
	}

	await knex(tableName).insert(chats);
}
