import bookingRepository from '../../data/repositories/bookingRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(bookingRepository);

export default router;
