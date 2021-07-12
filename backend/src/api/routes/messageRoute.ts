import messageRepository from '../../data/repositories/MessageRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(messageRepository);

export default router;
