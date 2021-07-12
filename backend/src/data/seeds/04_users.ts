import * as Knex from 'knex';
import faker from 'faker';
import { encrypt } from '../../common/utils/cryptoHelper';
import { UserRole } from '../../common/enums/user/UserRole';

const tableName = 'users';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	await knex(tableName).insert({
		first_name: 'Test',
		last_name: 'User',
		email: 'test@radency.com',
		password: await encrypt('Pa55word'),
		role: UserRole.ADMIN,
	});

	const users = Array(100)
		.fill(null)
		.map(() => ({
			first_name: faker.name.firstName(),
			last_name: faker.name.lastName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			role: UserRole.USER,
		}));

	await knex(tableName).insert(users);
}
