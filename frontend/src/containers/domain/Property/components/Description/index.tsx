import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { WifiIcon, ParkingIcon, LocationIcon, StarIcon, Button, BookLinkButton } from 'components';

import { description as translation } from '../../en-CA.json';
import { Description as DescriptionType } from 'common/models';

interface Props {
	description: DescriptionType;
	name: string;
	cityName: string;
}

const Description: FunctionComponent<Props> = ({ description, name, cityName }) => {
	const descriptionHighlights = 'bg-blue-100 w-2/6 p-6 float-right font-medium';
	const descriptionHighlightsList = 'list-none';
	const descriptionHighlightsListItem = 'flex justify-start items-center mt-2';
	const descriptionHighlightsListItemText = 'pt-1 pb-1 pr-2 pl-2';
	const descriptionHighlightsListItemTextHighlighted = 'bg-green-500 rounded-sm text-white';
	const descriptionHighlightsListItemIcon = 'w-5 h-5 mr-3';
	const descriptionGreatPlate = 'w-full font-bold mt-4';
	const descriptionBestseller = 'flex justify-start items-center mt-4';
	const descriptionBestsellerStar =
		'flex justify-between items-center text-white w-5 h-5 bg-yellow-300 rounded-full p-1 mr-3';
	const descriptionAbout = 'w-7/12 mt-2';

	const {
		guestsprefecences,
		topLocation,
		freeWiFi,
		freeParking,
		reserveBtn,
		saveBtn,
		centerOfCity,
		greatLocation,
		bestseller,
		propertyRegistrationDate,
		twoPersonTrip
	} = translation;

	const [twoPersonTripPart1, twoPersonTripPart2] = twoPersonTrip.split('{rating}');

	return (
		<div className="mt-5 w-full">
			<div className={descriptionHighlights}>
				{guestsprefecences}
				<ul className={descriptionHighlightsList}>
					<li className={descriptionHighlightsListItem}>
						<div className={descriptionHighlightsListItemIcon}>
							<LocationIcon />
						</div>
						<div className={descriptionHighlightsListItem}>{topLocation}</div>
					</li>
					<li className={descriptionHighlightsListItem}>
						<div className={descriptionHighlightsListItemIcon}>
							<WifiIcon />
						</div>
						<div
							className={clsx(
								descriptionHighlightsListItemText,
								descriptionHighlightsListItemTextHighlighted
							)}
						>
							{freeWiFi}
						</div>
					</li>
					<li className={descriptionHighlightsListItem}>
						<div className={descriptionHighlightsListItemIcon}>
							<ParkingIcon />
						</div>
						<div className={descriptionHighlightsListItemText}>{freeParking}</div>
					</li>
					<li className={descriptionHighlightsListItem}>
						<Button color="inherit" buttonStyle="booking" className="w-full">
							{reserveBtn}
						</Button>
					</li>
					<li className={descriptionHighlightsListItem}>
						<Button buttonStyle="booking-invert" color="inherit">
							{saveBtn}
						</Button>
					</li>
				</ul>
			</div>
			<div className={descriptionGreatPlate}>
				<h2 className="inline">
					{centerOfCity}
					{cityName} -{' '}
				</h2>
				<BookLinkButton>{greatLocation}</BookLinkButton>
			</div>
			<div className={descriptionBestseller}>
				<span className={descriptionBestsellerStar}>
					<StarIcon />
				</span>
				<span className="font-bold text-yellow-400">
					{bestseller}
					{cityName}!
				</span>
			</div>
			<div className={descriptionAbout}>
				{description.info}
				{twoPersonTripPart1}
				<strong>{description.rating}</strong>
				{twoPersonTripPart2}
				<strong>
					{name}
					{propertyRegistrationDate}
					{description.registrationDate}.
				</strong>
			</div>
		</div>
	);
};

export default Description;
