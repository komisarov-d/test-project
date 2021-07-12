import * as Knex from 'knex';
import { sample, random } from 'lodash';

const tableName = 'booking_rooms';

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();
	// TODO: change table schema from rooms to facilities
	const booking = await knex('booking').select('*');
	const rooms = await knex('facilities').select('*');
	const booking_rooms: any[] = [];

	for (let i = 0; i < random(20); i++) {
		booking_rooms.push({
			booking_id: sample(booking).id,
			room_id: sample(rooms).id
		});
	}

	await knex(tableName).insert(booking_rooms);
}
