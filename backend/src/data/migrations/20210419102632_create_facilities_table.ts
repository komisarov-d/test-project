import * as Knex from 'knex';

const tableName = 'facilities';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.integer('property_id').references('id').inTable('properties').onDelete('cascade').notNullable();
		table.string('description');
		table.double('price');
		table.integer('quantity');
		table.integer('persons');
		table.integer('rooms');
		table.integer('beds');
		table.specificType('room_amenities', 'character varying(20)[]').defaultTo('{}');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
