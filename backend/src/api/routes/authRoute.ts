import { Router, Request } from 'express';
import { run } from '../../common/utils/routeHelper';
import { login, register } from '../../services/authService';
import { getUserById } from '../../services/userService';
import { refreshAuthToken } from '../controllers/auth';
import { authenticationMiddleware, jwtMiddleware, registrationMiddleware } from '../middlewares';

const router = Router();

router.post(
	'/login',
	authenticationMiddleware,
	run((req: Request) => login(req.user.id))
);

router.post(
	'/register',
	registrationMiddleware,
	run((req: Request) => register(req.user))
);

router.get(
	'/user',
	jwtMiddleware,
	run((req: Request) => getUserById(req.user.id))
);

router.post('/refresh-token', refreshAuthToken);

export default router;
