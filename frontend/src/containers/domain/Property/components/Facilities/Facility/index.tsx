import React, { FunctionComponent } from 'react';

import {
	ParkingIcon,
	WifiIcon,
	FamilyIcon,
	NoSmokingIcon,
	HeaterIcon,
	CocktailIcon,
	KitchenIcon,
	PetsIcon
} from 'components';

interface Props {
	icon: string;
}

const Facility: FunctionComponent<Props> = ({ children, icon }) => {
	const facilitiesItem = 'inline-flex justify-between items-center mr-3';
	const facilitiesItemDescription = 'text-green-700 font-bold';
	const facilitiesItemIcon =
		'flex justify-between text-white w-7 h-7 align-center bg-transparent text-green-700 rounded-full p-1 mr-1';

	const facilitiesIconsMapping = {
		parking: <ParkingIcon />,
		wifi: <WifiIcon />,
		family: <FamilyIcon />,
		nosmoking: <NoSmokingIcon />,
		heater: <HeaterIcon />,
		cocktail: <CocktailIcon />,
		kitchen: <KitchenIcon />,
		pets: <PetsIcon />
	};

	return (
		<span className={facilitiesItem}>
			<span className={facilitiesItemIcon}>{facilitiesIconsMapping[icon]}</span>
			<span className={facilitiesItemDescription}>{children}</span>
		</span>
	);
};

export default Facility;
