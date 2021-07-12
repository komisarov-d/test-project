import * as Yup from 'yup';
import Attachment from './Attachment';
import BaseModel from './BaseModel';

class Booking extends BaseModel {
	first_name: string;

	last_name: string;

	email: string;

	phone: string;

	user_id: number;

	property_id: number;

	city_id: number;

	start_date: string;

	finish_date: string;

	price: number;

	travell_for_work: boolean;

	booking_for_me: boolean;

	rent_car: boolean;

	airport_shuttle: boolean;

	private_taxi: boolean;

	paperless_confirmation: boolean;

	send_promotions: boolean;

	is_active: string;

	static get schema() {
		return Yup.object().shape({
			first_name: Yup.string().required(),
			last_name: Yup.string().required(),
			email: Yup.string().required(),
			phone: Yup.string(),
			user_id: Yup.number().required(),
			property_id: Yup.number().required(),
			city_id: Yup.number().required(),
			start_date: Yup.string().required(),
			finish_date: Yup.string().required(),
			price: Yup.number().required(),
			is_active: Yup.string().required(),
			travell_for_work: Yup.boolean().default(false),
			booking_for_me: Yup.boolean().default(true),
			rent_car: Yup.boolean().default(false),
			airport_shuttle: Yup.boolean().default(false),
			private_taxi: Yup.boolean().default(false),
			paperless_confirmation: Yup.boolean().default(false),
			send_promotions: Yup.boolean().default(false),
		});
	}

	static get tableName() {
		return 'booking';
	}

	static relationMappings() {
		const City = require('./City').default;
		const Property = require('./Property').default;

		return {
			property: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: Property,
				join: {
					from: 'booking.property_id',
					to: 'properties.id'
				}
			},
			city: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: City,
				join: {
					from: 'booking.city_id',
					to: 'cities.id'
				}
			},
			images: {
				relation: BaseModel.ManyToManyRelation,
				modelClass: Attachment,
				join: {
					from: 'booking.property_id',
					through: {
						from: 'property_attachments.property_id',
						to: 'property_attachments.attachment_id'
					},
					to: 'attachments.id'
				}
			},
		};
	}
}

export default Booking;
