import Services from 'services';
import { IServerResponseError } from 'common/models';
import { HttpCode } from 'common/enums';
import { HttpError } from 'common/exceptions';

const checkResponseFailed = async (res: Response): Promise<void> => {
	if (res.ok) {
		return;
	}

	/* eslint-disable-next-line default-case */
	switch (res.status) {
		case HttpCode.Unauthorized: {
			await Services.Auth.logout();
		}
	}

	const parsedException: IServerResponseError | null = await res.json();

	throw new HttpError({
		message: parsedException?.message,
		status: parsedException?.status
	});
};

export { checkResponseFailed };
