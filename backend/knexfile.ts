import * as Knex from 'knex';

import { AppEnvironment } from './src/common/enums';
import * as dbConfig from './src/config/dbConfig';

interface IKnexFile {
	[key: string]: Knex.Config;
}

const knexConfig: IKnexFile = {
	[AppEnvironment.DEVELOPMENT]: {
		client: 'pg',
		connection: dbConfig.database,
		pool: {
			min: Number(dbConfig.poolMin),
			max: Number(dbConfig.poolMax)
		},
		migrations: {
			directory: './src/data/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './src/data/seeds'
		},
		debug: false
	},
	[AppEnvironment.DEMO]: {
		client: 'pg',
		connection: dbConfig.database,
		pool: {
			min: Number(dbConfig.poolMin),
			max: Number(dbConfig.poolMax)
		},
		migrations: {
			directory: './src/data/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './src/data/seeds'
		},
		debug: false
	},
	[AppEnvironment.STAGING]: {
		client: 'pg',
		connection: dbConfig.database,
		pool: {
			min: Number(dbConfig.poolMin),
			max: Number(dbConfig.poolMax)
		},
		migrations: {
			directory: './src/data/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './src/data/seeds'
		},
		debug: false
	},
	[AppEnvironment.TEST]: {
		client: 'pg',
		connection: {
			port: Number(dbConfig.port),
			host: dbConfig.host,
			database: dbConfig.testDatabase,
			user: dbConfig.username,
			password: dbConfig.password
		},
		pool: {
			min: Number(dbConfig.poolMin),
			max: Number(dbConfig.poolMax)
		},
		migrations: {
			directory: './src/data/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './src/data/seeds'
		},
	}
};

export default knexConfig;
