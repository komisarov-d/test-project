import * as Knex from 'knex';

const tableName = 'chats';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
