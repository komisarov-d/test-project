import * as Knex from 'knex';

const tableName = 'reviews';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
	
		table.integer('user_id').references('id').inTable('users').onDelete('cascade').notNullable();
		table.integer('booking_id').references('id').inTable('booking').onDelete('cascade').notNullable();
		table.integer('property_id').references('id').inTable('properties').onDelete('cascade').notNullable();
		table.string('like').defaultTo('');
		table.string('dont_like').defaultTo('');
		table.integer('rating');
		table.boolean('meet_expectation');
		table.boolean('travell_for_work');
		table.specificType('travell_partners', 'character varying(100)[]').defaultTo('{}');
		table.string('general_impressions').defaultTo('');
	
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
