import * as Knex from 'knex';
import faker from 'faker';

const tableName = 'cities';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const countries: any = await knex('countries').select('id', 'name');

	let cities: any = [];

	countries.forEach((country: any) => {
		Array(10)
			.fill(null)
			.forEach(() => {
				cities = cities.concat({ name: faker.address.city(), country_id: country.id });
			});
	});

	faker.locale = 'en';

	await knex(tableName).insert(cities);
}
