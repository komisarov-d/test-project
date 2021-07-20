import { Router } from 'express';
import { run } from '../../common/utils/routeHelper';

const router = Router();
router.get(
	'/test',
	run(async () => 'Hello World')
);

export default router;
