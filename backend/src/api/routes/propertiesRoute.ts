import propertyRepository from '../../data/repositories/PropertyRepository';
import createEntityRouter from './helpers/createEntityRouter';

const router = createEntityRouter(propertyRepository);

export default router;
