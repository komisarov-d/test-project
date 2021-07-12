import bookingRoomRepository from '../../data/repositories/bookingRoomRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(bookingRoomRepository);

export default router;
