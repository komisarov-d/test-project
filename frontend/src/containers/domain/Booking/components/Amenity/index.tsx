import React, { FunctionComponent } from 'react';
import { CheckmarkIcon, CocktailIcon, KitchenIcon, ParkingIcon, PetsIcon, SnowflakeIcon } from 'components';

interface Props {
	name: string;
}

export enum PropertyAmenity {
	Parking = 'parking',
	Restaurant = 'restaurant',
	PetsAllowed = 'pets',
	RoomService = 'service',
	Fitness = 'fitness',
	NonSmoking = 'non-smoking',
	Conditioning = 'conditioning',
	Pets = 'pets',
	Service = 'service',
	Kitchen = 'kitchen'
}

const Amenity: FunctionComponent<Props> = ({ name }) => {
	const amenityToComponentMappings = {
		// [name] - generic data for unknown amenities
		[name]: {
			label: name,
			icon: null
		},
		[PropertyAmenity.Parking]: {
			label: 'Parking',
			icon: <ParkingIcon size="sm" />
		},
		[PropertyAmenity.Restaurant]: {
			label: 'Restaurant',
			icon: <CocktailIcon size="sm" />
		},
		[PropertyAmenity.Pets]: {
			label: 'Pets allowed',
			icon: <PetsIcon size="sm" />
		},
		[PropertyAmenity.Service]: {
			label: 'Room service included',
			icon: <CheckmarkIcon size="sm" />
		},
		[PropertyAmenity.Conditioning]: {
			label: 'Air conditioning',
			icon: <SnowflakeIcon size="sm" />
		},
		[PropertyAmenity.Kitchen]: {
			label: 'Kitchen',
			icon: <KitchenIcon size="sm" />
		}
	};

	return (
		<div className="bg-green-400 border border-green-700 flex mr-2 max-w-max items-center p-1 justify-center">
			{amenityToComponentMappings[name].icon && (
				<span className="mr-1 inline-flex justify-center color-green-700">
					{amenityToComponentMappings[name].icon}
				</span>
			)}
			<span>
				<div className="text-sm text-gray-600 block">{amenityToComponentMappings[name].label}</div>
			</span>
		</div>
	);
};

export default Amenity;
