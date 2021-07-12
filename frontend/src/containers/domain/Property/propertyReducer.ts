import { Reducer } from 'redux';
import { Property } from 'common/models';
import { roomTypes, iconsText, availabilityCard, advantages, facilities } from 'containers/domain/Property/en-CA.json';

type State = {
	property: Property;
};

const initialState: State = {
	property: {
		title: 'Hostel Vitan',
		address: 'Gazova street 26, Lviv, 7909, Ukraine',
		city: 'Lviv',
		description: {
			info: `Hostel Vitan is located about 1 km from Lviv city center and just a 10-minute walk from local bus and
            tram stops. It offers a bar, free Wi-Fi in public areas and free public parking on site. \n\n
            Some of the Vitan's rooms have a TV and shared bathroom facilities. Some also have a kitchenette
            with a microwave, electric kettle and refrigerator. \n\n Guests can prepare their own meals in
            the shared kitchen and relax in the TV lounge. Laundry facilities are also available. \n\n The
            hostel is 400 meters from the Church and Monastery of St. Onuphrius, 500 meters from the Church of St.
            Nicholas and 600 meters from the Lviv State Academic Opera and Ballet Theater. Lviv International
            Airport is 6 km away.`,
			rating: 8.3,
			registrationDate: 'Aug 22 2014'
		},
		mostPupularFacilities: [
			{ icon: 'parking', name: iconsText.parking },
			{ icon: 'wifi', name: iconsText.wifi },
			{ icon: 'family', name: iconsText.family },
			{ icon: 'nosmoking', name: iconsText.nosmoking },
			{ icon: 'heater', name: iconsText.heater },
			{ icon: 'cocktail', name: iconsText.cocktail },
			{ icon: 'pets', name: iconsText.pets },
			{ icon: 'kitchen', name: iconsText.kitchen }
		],
		availability: [availabilityCard.bookInAdvance, availabilityCard.noCard],
		rooms: [
			{
				name: roomTypes.standartDoubleRoom,
				persons: 2,
				beds: [
					{
						amount: 1,
						type: 'full'
					}
				],
				price: 299,
				freeAmount: 2,
				info: {
					advantages: [
						{
							text: advantages.noCard,
							iconType: 'card'
						},
						{
							text: advantages.noPrepayment,
							iconType: 'default'
						}
					],
					facilities: [
						facilities.allFacilities.FreeToiletries,
						facilities.allFacilities.Shover,
						facilities.allFacilities.Towels,
						facilities.allFacilities.Carpeted
					]
				}
			},
			{
				name: roomTypes.standartTwinRoom,
				persons: 3,
				beds: [
					{
						amount: 2,
						type: 'single'
					},
					{
						amount: 1,
						type: 'full'
					}
				],
				price: 399,
				freeAmount: 3,
				info: {
					advantages: [
						{
							text: advantages.noCard,
							iconType: 'card'
						},
						{
							text: advantages.noPrepayment,
							iconType: 'default'
						}
					],
					facilities: [
						facilities.allFacilities.TV,
						facilities.allFacilities.Slippers,
						facilities.allFacilities.Telephone,
						facilities.allFacilities.Hairdryer
					]
				}
			}
		],
		review: [
			{
				name: 'Anastasiya',
				country: 'Ukraine',
				text:
					'“The hotel is located in the very center of Lviv, it is very convenient to get to all the sights, you can walk from the train station, there is a trolleybus stop to the airport. Very cozy, the hotel is new and very clean. Polite staff. I liked the idea of ​​a capsule, which is why I booked this hotel. An interesting idea, inside the capsule resembles half a compartment of a train, two beds, there is a table, hangers, everything you need for a good rest before departure. Since I needed to wake up very early, the most important factor for me was the silence and the capsule fully met my expectations. Excellent sound insulation, you can sleep peacefully at least in the afternoon. There is also a kitchen where you can prepare something for yourself, drinking water, tea and coffee. Highly recommend! The most cozy hotel that I stayed in Lviv) "',
				image: 'https://cf.bstatic.com/static/img/identity/profile/b47cd0e05ec8b7831167f4f7593ead56402a6bb4.svg'
			},
			{
				name: 'Hanna',
				country: 'Ukraine',
				text:
					'“Great location, clean bed and room in general. It was quiet in the hostel, which made my stay comfortable. “',
				image:
					'https://cf.bstatic.com/static/img/review/avatars/ava-h/41b962c4f1fcefa6bb9c4a8bc7bfed064a71691b.png'
			},
			{
				name: 'Victoria',
				country: 'Ukraine',
				text:
					'“Very convenient location of the hostel. For active rest that is necessary !!! Clean bed !!! There is a kitchen where you can prepare breakfast. The bathroom, though shared, but clean. I recommend for active people. “',
				image: 'https://cf.bstatic.com/static/img/identity/profile/b47cd0e05ec8b7831167f4f7593ead56402a6bb4.svg'
			},
			{
				name: 'Serg',
				country: 'Ukraine',
				text:
					'“There is a kitchen where you can cook for yourself. There are all the amenities you need for a short trip)“',
				image:
					'https://cf.bstatic.com/static/img/review/avatars/ava-s/d321d61d78a8fa310843e1967dca38e6276b92aa.png'
			},
			{
				name: 'Olha',
				country: 'Ukraine',
				text:
					'“Comfortable beds, clean, very cool location. The staff goes to meet any questions you may have.“',
				image:
					'https://cf.bstatic.com/static/img/review/avatars/ava-o/ecc2e23c1dd875ae18fc261d4a08d35f71db9440.png'
			},
			{
				name: 'Iryna',
				country: 'Ukraine',
				text:
					'“I liked the location, the hostel itself is also quite nice, the conditions are good for its cost😊😊😊“',
				image:
					'https://cf.bstatic.com/static/img/review/avatars/ava-i/12a07b30d7fe835ea09b653635e151032bbf547a.png'
			}
		]
	}
};

export const property: Reducer<State> = (state = initialState, action): State => {
	switch (action.type) {
		default:
			return state;
	}
};
