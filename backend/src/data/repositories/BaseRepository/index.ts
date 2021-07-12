import { RequestType } from '../../../common/enums';
import { QueryBuilder, QueryModifier, IApiGetListParams, IApiGetByValueParams } from '../../../common/models';
import { StringHelper } from '../../../common/utils';
import BaseModel from '../../models/BaseModel';

export class BaseRepository {
	model: typeof BaseModel;

	queryModifier?: QueryModifier;

	private query(type: RequestType, params?: any): QueryBuilder {
		const query = this.model.query().skipUndefined();

		if (this.queryModifier && this.queryModifier[type]) {
			this.queryModifier[type](query, params);
		}

		return query;
	}

	async getList({ sortBy = 'id', sortDir = 'ASC', page = 1, limit = 10, ...restParams }: IApiGetListParams) {
		const query = this.query(RequestType.GET_LIST, restParams);

		query.orderBy(`${this.model.tableName}.${StringHelper.camelToSnakeCase(sortBy)}`, sortDir);

		return query.page(page - 1, limit);
	}

	async getByValue({ param, value }: IApiGetByValueParams) {
		const getByValueMapping = {
			[value]: this.query(RequestType.GET_BY_PARAM).where(param, value),
			min: this.query(RequestType.GET_BY_PARAM)
				.select('*')
				.where(param, 'in', this.query(RequestType.GET_BY_PARAM).min(param)),
			max: this.query(RequestType.GET_BY_PARAM)
				.select('*')
				.where(param, 'in', this.query(RequestType.GET_BY_PARAM).max(param))
		};
		return getByValueMapping[value].first();
	}

	async getById(id: number) {
		return this.query(RequestType.GET_BY_ID).findById(id);
	}

	async create(data: any) {
		if (this.model.schema) {
			await this.model.schema.validate(data);
		}
		return this.query(RequestType.CREATE).insert(data);
	}

	async update(id: number, data: any) {
		if (this.model.schema) {
			await this.model.schema.validate(data);
		}

		return this.query(RequestType.UPDATE).patchAndFetchById(id, data);
	}

	async delete(id: number) {
		return this.query(RequestType.DELETE).deleteById(id).returning('*');
	}
}
