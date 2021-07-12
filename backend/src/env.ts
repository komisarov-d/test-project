import * as dotenv from 'dotenv';
import { getOsEnv } from './common/utils/pathHelper';

dotenv.config();

export const env = {
	app: {
		port: getOsEnv('APP_SERVER_PORT') || 3000,
		socketPort: getOsEnv('APP_SERVER_SOCKET_PORT') || 3002,
		secret: getOsEnv('SECRET_KEY') || 'default_secret',
		env: getOsEnv('NODE_ENV')
	},
	db: {
		database: getOsEnv('DATABASE_URL') || '',
		testDatabase: getOsEnv('TEST_DB_NAME') || '',
		username: getOsEnv('RDS_USERNAME') || '',
		password: getOsEnv('RDS_PASSWORD') || '',
		host: getOsEnv('RDS_HOSTNAME') || '',
		port: getOsEnv('RDS_PORT') || 5432,
		poolMin: getOsEnv('DB_POOL_MIN') || 2,
		poolMax: getOsEnv('DB_POOL_MAX') || 10
	},
	s3files: {
		s3bucketRegion: '',
		accessKey: '',
		secretKey: ''
	}
};
