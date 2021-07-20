import { Router, Request } from 'express';
import { run } from '../../../common/utils/routeHelper';
import { BaseRepository } from '../../../data/repositories/BaseRepository';
import { IApiGetByValueParams } from '../../../common/models';
import { RequestType } from '../../../common/enums';

function createEntityRouter<T extends BaseRepository>(
	repository: T,
	availableRoutes: RequestType[] = Object.values(RequestType)
): Router {
	const router = Router();
	if (availableRoutes.includes(RequestType.GET_LIST)) {
		router.get(
			'/',
			run((req: Request) => {
				try {
					return repository.getList(req.query);
				} catch {
					throw new Error('Parse error on query params');
				}
			})
		);
	}

	if (availableRoutes.includes(RequestType.GET_BY_PARAM)) {
		router.get(
			'/item',
			run((req: Request) => {
				try {
					return repository.getByValue((req.query as unknown) as IApiGetByValueParams);
				} catch {
					throw new Error('Parse error on query params');
				}
			})
		);
	}

	if (availableRoutes.includes(RequestType.GET_BY_ID)) {
		router.get(
			'/:id',
			run((req: Request) => repository.getById(Number(req.params.id)))
		);
	}

	if (availableRoutes.includes(RequestType.CREATE)) {
		router.post(
			'/',
			run((req: Request) => repository.create(req.body))
		);
	}

	if (availableRoutes.includes(RequestType.UPDATE)) {
		router.put(
			'/:id',
			run((req: Request) => repository.update(Number(req.params.id), req.body))
		);
	}

	if (availableRoutes.includes(RequestType.DELETE)) {
		router.delete(
			'/:id',
			run((req: Request) => repository.delete(Number(req.params.id)))
		);
	}

	return router;
}

export default createEntityRouter;
