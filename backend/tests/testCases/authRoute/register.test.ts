import supertest from 'supertest';
import app from '../../../src/app';

import { ResponseStatusCode } from '../../../src/common/enums';
import { getApiV1Route } from '../../helpers';
import { getValidCreateUserPayload } from './helpers';

import { AuthRoute } from '../../common/enums';

const request = supertest(app);

describe('POST /auth/register Endpoint', () => {
	const testEndpoint = getApiV1Route(AuthRoute.Register);
	test('should return a new User', async () => {
		const payload = getValidCreateUserPayload('testMail@gmail.com');
		const response = await request.post(testEndpoint).send(payload);

		expect(response.status).toEqual(ResponseStatusCode.Ok);
	});
});
