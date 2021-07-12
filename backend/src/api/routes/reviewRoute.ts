import reviewRepository from '../../data/repositories/ReviewRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(reviewRepository);

export default router;
