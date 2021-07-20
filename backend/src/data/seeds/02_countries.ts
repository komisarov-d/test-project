import * as Knex from 'knex';
import faker from 'faker';

const tableName = 'countries';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	await knex(tableName).insert(
		Array(5)
			.fill(null)
			.map(() => ({ name: faker.address.country() }))
	);
}
