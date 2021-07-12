import * as Knex from 'knex';

const tableName = 'attachments';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();
}
