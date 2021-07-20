import { Router } from 'express';
import testRoute from './testRoute';
import authRoute from './authRoute';
import citiesRoute from './citiesRoute';
import propertiesRoute from './propertiesRoute';
import bookingRoute from './bookingRoute';
import bookingRoomsRoute from './bookingRoomsRoute';
import chatRoute from './chatRoute';
import messageRoute from './messageRoute';
import reviewRoute from './reviewRoute';

const router = Router();

router.use('/auth/', authRoute);
router.use('/', testRoute);
router.use('/cities/', citiesRoute);
router.use('/properties/', propertiesRoute);
router.use('/booking/', bookingRoute);
router.use('/booking-room/', bookingRoomsRoute);
router.use('/chats/', chatRoute); 
router.use('/messages/', messageRoute); 
router.use('/review/', reviewRoute);

export default router;
