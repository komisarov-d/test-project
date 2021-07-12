import * as Knex from 'knex';

const tableName = 'properties';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.string('description').notNullable();
		table.integer('owner_id').references('id').inTable('users').onDelete('cascade').notNullable();
		table.integer('country_id').references('id').inTable('countries').onDelete('cascade').notNullable();
		table.integer('city_id').references('id').inTable('cities').onDelete('cascade').notNullable();
		table.string('street').notNullable();
		table.integer('rating').defaultTo(0);
		table.double('average_price');
		table.string('type').notNullable();
		table.specificType('amenities', 'character varying(20)[]').defaultTo('{}');
		table.float('latitude');
		table.float('longitude');
		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
