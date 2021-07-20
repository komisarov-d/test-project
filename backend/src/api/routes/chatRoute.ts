import chatRepository from '../../data/repositories/ChatRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(chatRepository);

export default router;
