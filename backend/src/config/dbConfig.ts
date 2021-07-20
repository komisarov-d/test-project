import { env } from '../env';

const { database, username, password, host, port, poolMin, poolMax, testDatabase } = env.db;
/* eslint-disable no-console */
console.log(`Database: ${env.app.env === 'test' ? testDatabase : database}`);
/* eslint-enable no-console */

export { database, username, password, host, port, poolMin, poolMax, testDatabase };
