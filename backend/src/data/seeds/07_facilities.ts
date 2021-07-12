/* eslint-disable max-len */
import * as Knex from 'knex';
import faker from 'faker';
import { randomNum, uniqueSamples } from '../../common/utils';
import { PropertyRoomAmenity } from '../../common/enums';

const tableName = 'facilities';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const properties = await knex('properties').select('id');
	const roomAmenities = Object.values(PropertyRoomAmenity);

	let facilities: any = [];

	properties.forEach(({ id }) => {
		for (let i = 0; i < randomNum(20); i++) {
			const rooms = randomNum(10);
			const beds = randomNum(5);

			facilities = [
				...facilities,
				{
					property_id: id,
					price: faker.commerce.price(100, 15000),
					description: faker.commerce.productDescription(),
					room_amenities: uniqueSamples(roomAmenities, randomNum(roomAmenities.length - 1)),
					quantity: randomNum(10),
					persons: beds,
					rooms,
					beds
				}
			];
		}
	});

	await knex(tableName).insert(facilities);
}
