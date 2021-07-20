import * as Yup from 'yup';
import BaseModel from './BaseModel';

class Review extends BaseModel {
	userId: number;
    bookingId: number;
    propertyId: number;
    like: string;
    dontLike: string;
    rating: number;
    meetExpectation: boolean;
    travellForWork: boolean;
    travellPartners: Array<string>;
    generalImpressions: string;

	static get schema() {
		return Yup.object().shape({
			userId: Yup.number().required(),
            bookingId: Yup.number().required(),
            propertyId: Yup.number().required(),
            like: Yup.string().required().default(""),
            dontLike: Yup.string().required().default(""),
            rating: Yup.number().required().integer().positive().lessThan(6),
            meetExpectation: Yup.boolean().required(),
            travellForWork : Yup.boolean().required(),
            travellPartners: Yup.array().of(Yup.string()).required(),
            generalImpressions: Yup.string().required()
		});
	}

	static get tableName() {
		return 'reviews';
	}

    static relationMappings() {
        const Property = require('./Property').default;
        const Attachment = require('./Attachment').default;

		return {
			property: {
                filter: (query: any) => query.select("properties.id", "properties.name"),
                relation: BaseModel.BelongsToOneRelation,
				modelClass: Property,
				join: {
					from: 'reviews.property_id',
					to: 'properties.id'
				}
			},
            images: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: Attachment,
                join: {
                    from: 'reviews.property_id',
					through: {
						from: 'property_attachments.property_id',
						to: 'property_attachments.attachment_id'
					},
					to: 'attachments.id'
				}
            }
		};
	}
}

export default Review;

