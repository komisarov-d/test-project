import * as Knex from 'knex';

const tableName = 'property_attachments';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.integer('property_id').references('id').inTable('properties').onDelete('cascade').notNullable();
		table.integer('attachment_id').references('id').inTable('attachments').onDelete('cascade').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
