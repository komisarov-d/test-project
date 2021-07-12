import Knex from 'knex';
import { databaseSetup } from './databaseSetup.test';
import app from '../src/app';

let knex: Knex<any, unknown[]>;

beforeAll(async () => {
	knex = (await import('./database')).Knex;

	await knex.migrate.latest();
	return databaseSetup();
});

afterAll(async () => {
	await knex.migrate.forceFreeMigrationsLock();
	await knex.migrate.rollback(null, true);
	await knex.destroy();
	return app.emit('close');
});
