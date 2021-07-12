/* eslint-disable max-len */
import * as Knex from 'knex';

const tableName = 'property_attachments';

const imagesUrl = [
	'https://www.jet2holidays.com/HotelImages/Web/ALC_138_Htl_Presidente_0818_01.jpg',
	'https://cf.bstatic.com/images/hotel/max1024x768/211/211874461.jpg',
	'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg',
	'https://pix10.agoda.net/hotelImages/200524/-1/e7e36079645da64601ea20c5249c367d.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hotel_Adlon_%28Berlin%29.jpg/1200px-Hotel_Adlon_%28Berlin%29.jpg',
	'https://www.bluesunhotels.com/EasyEdit/UserFiles/PageImages/hotel-amor-supetar-brac/hotel-amor-supetar-brac-637103700072492984-1_1600_900.jpeg',
	'https://cf.bstatic.com/images/hotel/max1024x768/255/255425351.jpg',
	'https://www.leonardo-hotels.ru/octopus/Upload/images/Pages/antwerpencomfort-room.jpg'
];

export async function seed(knex: Knex): Promise<void> {
	await knex(tableName).del();

	const images = await knex('attachments')
		.insert(imagesUrl.map(url => ({ url })))
		.returning('*');

	const properties = await knex('properties').select('id');

	let attachments: any = [];

	properties.forEach(property => {
		attachments = [
			...attachments,
			...images
				.sort(() => Math.random() - 0.5)
				.map(img => ({
					property_id: property.id,
					attachment_id: img.id
				}))
		];
	});

	await knex(tableName).insert(attachments);
}
