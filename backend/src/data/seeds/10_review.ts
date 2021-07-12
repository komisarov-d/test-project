/* eslint-disable max-len */
import * as Knex from 'knex';
import faker from 'faker';
import { sample } from 'lodash';
import { randomNum, randomBool } from '../../common/utils';

const tableName = 'reviews';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const users: any = await knex('users').select('id');
	const bookings: any = await knex('booking').select('id', 'property_id');
    const maxNumberOfPartners = 10;
    

	const reviews = Array(300)
		.fill(null)
		.map(() => {
			const booking = sample(bookings);
			return {
				user_id: sample(users).id,
				booking_id: booking.id,
				property_id: booking.property_id, 
				rating: randomNum(5),
				like: faker.commerce.productDescription(),
				dont_like: faker.commerce.productDescription(),
				meet_expectation: randomBool(),
				travell_for_work: randomBool(),
				travell_partners: Array.from(Array(randomNum(maxNumberOfPartners))).map(_=>faker.name.firstName()),
				general_impressions: faker.commerce.productDescription()
			};
		});

	await knex(tableName).insert(reviews);
}
