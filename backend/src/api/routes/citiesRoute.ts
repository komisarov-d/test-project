import cityRepository from '../../data/repositories/CityRepository';
import createEntityRouter from './helpers/createEntityRouter';
import { RequestType } from '../../common/enums';

const router = createEntityRouter(cityRepository, [RequestType.GET_LIST]);

export default router;
