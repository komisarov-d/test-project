import * as Knex from 'knex';

const tableName = 'booking_rooms';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.integer('room_id').references('id').inTable('facilities').onDelete('cascade').notNullable();
        table.integer('booking_id').references('id').inTable('booking').onDelete('cascade').notNullable();
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
