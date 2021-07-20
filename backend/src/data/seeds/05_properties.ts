/* eslint-disable max-len */
import * as Knex from 'knex';
import faker from 'faker';
import { sample } from 'lodash';
import { randomNum, uniqueSamples } from '../../common/utils';
import { PropertyType, PropertyAmenity } from '../../common/enums';

const tableName = 'properties';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const countries: any = await knex('countries').select('id');
	const cities: any = await knex('cities').select('id');
	const users: any = await knex('users').select('id');
	const propertyTypes = Object.values(PropertyType);
	const propertyAmenities = Object.values(PropertyAmenity);

	const properties = Array(800)
		.fill(null)
		.map(() => ({
			name: faker.company.companyName(),
			description: faker.commerce.productDescription(),
			owner_id: users[randomNum(users.length - 1)].id,
			country_id: countries[randomNum(countries.length - 1)].id,
			city_id: cities[randomNum(cities.length - 1)].id,
			street: faker.address.streetName(),
			rating: randomNum(5),
			average_price: faker.commerce.price(100, 15000),
			type: sample(propertyTypes),
			amenities: uniqueSamples(propertyAmenities, randomNum(propertyAmenities.length - 1)),
			latitude: faker.address.latitude(),
			longitude: faker.address.longitude()
		}));

	await knex(tableName).insert(properties);
}
