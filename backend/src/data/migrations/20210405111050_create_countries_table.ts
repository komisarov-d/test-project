import * as Knex from 'knex';

const tableName = 'countries';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.string('name');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
