import * as Knex from 'knex';

const tableName = 'booking';

export async function up(knex: Knex): Promise<number | number[] | void> {
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.integer('user_id').references('id').inTable('users').onDelete('cascade').notNullable();
		table.integer('property_id').references('id').inTable('properties').onDelete('cascade').notNullable();
		table.integer('city_id').references('id').inTable('cities').onDelete('cascade').notNullable();

		table.dateTime('start_date').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('finish_date').notNullable().defaultTo(new Date().toISOString());

		table.string('first_name').notNullable();
		table.string('last_name').notNullable();
		table.string('email').notNullable();
		table.string('phone').notNullable();
		table.integer('price').notNullable();

		table.string('is_active').notNullable();
		table.string('travell_for_work').notNullable().defaultTo(false);
		table.string('booking_for_me').notNullable().defaultTo(true);
		table.string('rent_car').notNullable().defaultTo(false);
		table.string('airport_shuttle').notNullable().defaultTo(false);
		table.string('private_taxi').notNullable().defaultTo(false);
		table.string('paperless_confirmation').notNullable().defaultTo(false);
		table.string('send_promotions').notNullable().defaultTo(false);

		table.dateTime('created_at').notNullable().defaultTo(new Date().toISOString());
		table.dateTime('updated_at').notNullable().defaultTo(new Date().toISOString());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists(tableName);
}
