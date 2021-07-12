import supertest from 'supertest';
import app from '../../../src/app';

import { ResponseStatusCode } from '../../../src/common/enums';
import { getApiV1Route } from '../../helpers';
import { getValidCreateUserPayload } from './helpers';
import { DbTableName, AuthRoute } from '../../common/enums';
import { insert } from '../../database';
import { encrypt } from '../../../src/common/utils/cryptoHelper';

const request = supertest(app);

describe('POST /auth/login Endpoint', () => {
	const testEndpoint = getApiV1Route(AuthRoute.Login);

	test('should return token', async () => {
		const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');

		await insert({ table: DbTableName.users, data: { ...user, password: await encrypt(user.password) } });

		const response = await request.post(testEndpoint).send({ email: user.email, password: repeatPassword });

		expect(response.status).toEqual(ResponseStatusCode.Ok);
		expect(response.body).toMatchObject({
			refreshToken: expect.any(String),
			token: expect.any(String)
		});
	});
});
