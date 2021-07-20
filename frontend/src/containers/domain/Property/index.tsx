/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import AvailabilityPanel from './components/AvailabilityPanel';
import Facilities from './components/Facilities';
import Description from './components/Description';
import NavigationBar from './components/NavigationBar';
import PropertySummary from './components/PropertySummary';
import Availability from './components/Availability';
import RoomsDetails from './components/RoomsDetails';
import RoomsSummary from './components/RoomsSummary';
import Review from './components/Reviews';

import { roomTypes } from './en-CA.json';
import { RootState } from 'common/types';

const Property: FunctionComponent = () => {
	// [CheckInDate:Date, checkOutDate:Date]
	const [accommodationDates, setAccommodationDates] = useState<[Date, Date]>();
	const propertyContainer = 'max-w-screen-xl p-0 my-0 mx-auto';
	const property = 'w-9/12 float-right mb-96';
	const navItems = [
		{
			href: '#availability',
			text: 'Room info & price'
		},
		{
			href: '#facilities',
			text: 'Facilities'
		},
		{
			href: '#policies',
			text: 'Good to know'
		},
		{
			href: '#reviews',
			text: 'Guest reviews'
		}
	];

	const propertyData = useSelector((state: RootState) => state.property.property);

	return (
		<div className={propertyContainer}>
			<div className={property}>
				<NavigationBar navItems={navItems} />
				<PropertySummary title={propertyData.title} address={propertyData.address} />
				<Description
					description={{ ...propertyData.description }}
					name={propertyData.title}
					cityName={propertyData.city}
				/>
				<Facilities facilities={propertyData.mostPupularFacilities} />
				<Availability availability={propertyData.availability} />
				<AvailabilityPanel onSubmit={setAccommodationDates} propertyName={propertyData.title} />
				{!accommodationDates ? (
					<RoomsSummary rooms={propertyData.rooms} />
				) : (
					<RoomsDetails rooms={propertyData.rooms} />
				)}
				<Review review={propertyData.review} />
			</div>
		</div>
	);
};

export default Property;
