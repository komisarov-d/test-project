import { Reducer } from 'redux';
import { IUser } from 'common/models';

type State = {
	user: IUser;
};

const initialState: State = {
	user: {
		email: 'test@test.com',
		firstName: 'Adam',
		lastName: 'Joans',
		password: '1111111',
		city: 'Kiev',
		age: 23,
		profileImage: 'https://www.computerra.ru/wp-content/uploads/2020/09/1-2020-09-25T191424.380.jpg',
		reviews: [
			{
				hotelName: 'Hotel White Rose',
				hotelImageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/211/211874461.jpg',
				review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus, molestiae voluptatibus
            excepturi sit eum ullam dolore rem asperiores sapiente officiis placeat voluptates nam facere
            voluptas error culpa! Eum, quis.`,
				rating: 5
			},
			{
				hotelName: 'Hotel Black Sea',
				hotelImageUrl: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg',
				review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus, molestiae voluptatibus
            excepturi sit eum ullam dolore rem asperiores sapiente officiis placeat voluptates nam facere
            voluptas error culpa! Eum, quis.`,
				rating: 4
			},
			{
				hotelName: 'Hotel Windy field',
				hotelImageUrl:
					'https://www.bluesunhotels.com/EasyEdit/UserFiles/PageImages/hotel-amor-supetar-brac/hotel-amor-supetar-brac-637103700072492984-1_1600_900.jpeg',
				review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus, molestiae voluptatibus
            excepturi sit eum ullam dolore rem asperiores sapiente officiis placeat voluptates nam facere
            voluptas error culpa! Eum, quis.`,
				rating: 5
			},
			{
				hotelName: 'Hotel Shiny sun',
				hotelImageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/255/255425351.jpg',
				review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, natus, molestiae voluptatibus
            excepturi sit eum ullam dolore rem asperiores sapiente officiis placeat voluptates nam facere
            voluptas error culpa! Eum, quis.`,
				rating: 3
			}
		]
	}
};

export const userProfile: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		default:
			return state;
	}
};
