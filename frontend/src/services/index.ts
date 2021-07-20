/* eslint-disable import/no-cycle */
import * as Auth from './authService';
import * as Property from './propertyService';
import * as Booking from './bookingService';
import * as Review from './reviewService';
import * as Chat from './chatService';
import Storage from './storageService';

const APP_STORAGE = window.localStorage;

const storage = new Storage({
	storage: APP_STORAGE
});

export default {
	Auth,
	Property,
	Storage: storage,
	Booking,
	Review,
	Chat
};
