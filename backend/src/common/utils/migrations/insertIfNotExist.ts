import Knex from 'knex';

interface IOptions<T> {
	table: string;
	ifNotExists: {
		columnName: string;
		value: string | number;
	};
	data: {
		[key: string]: T;
	}[];
}

export const insertIfNotExists = async <T>(knex: Knex, options: IOptions<T>) => {
	const {
		table,
		data,
		ifNotExists: { columnName, value }
	} = options;

	const rows = await knex(table).select().where(columnName, value);
	if (rows.length === 0) {
		const inserted = await knex(table).insert(data).returning('*');
		return inserted;
	}
	return [];
};
