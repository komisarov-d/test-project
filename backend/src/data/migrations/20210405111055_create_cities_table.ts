import * as Knex from 'knex';

const tableName = 'cities';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.string('name');
		table.integer('country_id').references('id').inTable('countries').onDelete('cascade').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
