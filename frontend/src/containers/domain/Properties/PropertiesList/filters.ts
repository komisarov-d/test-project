const filters = [
	{
		label: 'Star rating',
		name: 'rating',
		items: [
			{
				label: 'unrated',
				value: 0
			},
			{
				label: '1 stars',
				value: 1
			},
			{
				label: '2 stars',
				value: 2
			},
			{
				label: '3 stars',
				value: 3
			},
			{
				label: '4 stars',
				value: 4
			},
			{
				label: '5 stars',
				value: 5
			}
		]
	},
	{
		label: 'Property type',
		name: 'type',
		items: [
			{
				label: 'Hotels',
				value: 'hotel'
			},
			{
				label: 'Apartments',
				value: 'apartment'
			},
			{
				label: 'Resorts',
				value: 'resort'
			},
			{
				label: 'Villas',
				value: 'villa'
			}
		]
	},
	{
		label: 'Amenities',
		name: 'amenities',
		items: [
			{
				label: 'Parking',
				value: 'parking'
			},
			{
				label: 'Restaurant',
				value: 'restaurant'
			},
			{
				label: 'Pets allowed',
				value: 'pets'
			},
			{
				label: 'Room service',
				value: 'service'
			},
			{
				label: 'Fitness centre',
				value: 'fitness'
			},
			{
				label: 'Non-smoking rooms',
				value: 'non-smoking'
			}
		]
	},
	{
		label: 'Room amenities',
		name: 'roomAmenities',
		items: [
			{
				label: 'Kitchen/kitchenette',
				value: 'kitchen'
			},
			{
				label: 'Private bathroom',
				value: 'private-bathroom'
			},
			{
				label: 'Air conditioning',
				value: 'conditioning'
			},
			{
				label: 'Bath',
				value: 'bath'
			},
			{
				label: 'Private pool',
				value: 'private-pool'
			}
		]
	}
];

export default filters;
