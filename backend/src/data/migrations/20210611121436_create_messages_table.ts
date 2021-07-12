import * as Knex from 'knex';

const tableName = 'messages';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.integer('author_id').references('id').inTable('users').onDelete('cascade').notNullable();
		table.integer('chat_id').references('id').inTable('chats').onDelete('cascade').notNullable();
		table.string('text', 5000) .notNullable();
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
