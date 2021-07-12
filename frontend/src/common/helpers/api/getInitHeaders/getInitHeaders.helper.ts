import { getAuthToken } from 'common/helpers/api/checkIsTokenExpired/checkIsTokenExpired.helper';
import { IInitHeaderParams } from 'common/models';
import { ApiHeader, ContentType } from 'common/enums';

const getInitHeaders = async ({
	contentType = ContentType.JSON,
	hasContent = true,
	isTokenRequired = true
}: IInitHeaderParams): Promise<Headers> => {
	const headers = new Headers();

	if (isTokenRequired) {
		const token = await getAuthToken();

		headers.append(ApiHeader.AUTHORIZATION, token ? `Bearer ${token}` : null);
	}

	if (hasContent) {
		headers.set(ApiHeader.CONTENT_TYPE, contentType);
	}

	return headers;
};

export { getInitHeaders };
