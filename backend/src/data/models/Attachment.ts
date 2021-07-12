import BaseModel from './BaseModel';

class Attachment extends BaseModel {
	url: string;

	static get tableName() {
		return 'attachments';
	}
}

export default Attachment;
