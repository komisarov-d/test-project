import * as Knex from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
		table.string('first_name').notNullable();
		table.string('last_name');
		table.string('email').notNullable();
		table.string('password').notNullable();
		table.string('role').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
