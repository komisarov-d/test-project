/* eslint-disable global-require */
import * as yup from 'yup';
import BaseModel from './BaseModel';

class Property extends BaseModel {
	name: string;

	description: string;

	countryId: number;

	cityId: number;

	street: string;

	// number: number;

	latitude: number;

	longitude: number;

	static get schema() {
		return yup.object().shape({
			name: yup.string().required(),
			description: yup.string().required(),
			ownerId: yup.number().required().positive().integer(),
			countryId: yup.number().required().positive().integer(),
			cityId: yup.number().required().positive().integer(),
			street: yup.string().required(),
			// number: yup.number().required(),
			latitude: yup.number().required(),
			longitude: yup.number().required()
		});
	}

	static get tableName() {
		return 'properties';
	}

	static relationMappings() {
		const Attachment = require('./Attachment').default;
		const Country = require('./Country').default;
		const City = require('./City').default;
		const Facility = require('./Facility').default;

		return {
			images: {
				relation: BaseModel.ManyToManyRelation,
				modelClass: Attachment,
				join: {
					from: 'properties.id',
					through: {
						from: 'property_attachments.property_id',
						to: 'property_attachments.attachment_id'
					},
					to: 'attachments.id'
				}
			},
			country: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: Country,
				join: {
					from: 'properties.country_id',
					to: 'countries.id'
				}
			},
			city: {
				relation: BaseModel.BelongsToOneRelation,
				modelClass: City,
				join: {
					from: 'properties.city_id',
					to: 'cities.id'
				}
			},
			facilities: {
				relation: BaseModel.HasManyRelation,
				modelClass: Facility,
				join: {
					from: 'properties.id',
					to: 'facilities.property_id'
				}
			}
		};
	}
}

export default Property;
