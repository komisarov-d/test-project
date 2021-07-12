import * as queryString from 'query-string';

import { IFetchArgsData, IFetchFormArgsData } from 'common/models';
import { env } from '../../../../env';

const { apiOrigin } = env;

const getFetchUrl = ({ endpoint, queryParams }: IFetchArgsData | IFetchFormArgsData): string => {
	const fetchUrl = `${apiOrigin}${endpoint}${queryParams ? `?${queryString.stringify(queryParams)}` : ''}`;

	return fetchUrl;
};

export { getFetchUrl };
