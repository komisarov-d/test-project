/* eslint-disable max-len */
import * as Knex from 'knex';
import { sample, random } from 'lodash';
import faker from 'faker';

const tableName = 'booking';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const users = await knex('users').select('*');

	const properties = await knex('properties').select('*');

	const cities = await knex('cities').select('*');

	const booking: any[] = [];

	for (let i = 0; i < random(20); i++) {
		booking.push({
			user_id: sample(users).id,
			property_id: sample(properties).id,
			city_id: sample(cities).id,
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.internet.email(),
			phone: faker.phone.phoneNumber(),
			travell_for_work: faker.datatype.boolean(),
			booking_for_me: faker.datatype.boolean(),
			rent_car: faker.datatype.boolean(),
			airport_shuttle: faker.datatype.boolean(),
			private_taxi: faker.datatype.boolean(),
			paperless_confirmation: faker.datatype.boolean(),
			send_promotions: faker.datatype.boolean(),
			price: random(10000),
			is_active: 'Finished'
		});
	}

	await knex(tableName).insert(booking);
}
