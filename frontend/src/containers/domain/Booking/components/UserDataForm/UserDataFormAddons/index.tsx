import React, { FunctionComponent } from 'react';
import { AirplaneCarIcon, CarIcon, Checkmark, Field, PersonOutlineIcon } from 'components';
import { IFacility } from 'containers/domain/Properties/common/models';
import Amenity from '../../Amenity';

interface Props {
	facility: IFacility;
}

const UserDataFormAddons: FunctionComponent<Props> = ({ facility }) => {
	return (
		<div className="p-3">
			<div className="flex">
				{facility.roomAmenities &&
					facility.roomAmenities.map(amenity => <Amenity name={amenity} key={amenity} />)}
			</div>
			<div className="flex mt-3">
				<span className="font-bold mr-3">Guests:</span>
				{new Array(facility.persons).fill(null).map((_, index) => (
					// eslint-disable-next-line react/jsx-key
					// eslint-disable-next-line react/no-array-index-key
					<div className="w-5 h-5 mr-3" key={index}>
						<PersonOutlineIcon />
					</div>
				))}
			</div>
			<Field
				name="fullname"
				label="Full guest name"
				labelTextClassName="text-black"
				className="font-semibold text-black mt-4"
				fullWidth={false}
				renderInput={inputProps => (
					<input
						{...inputProps}
						className="p-1 w-5/12 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
					/>
				)}
			/>
			<div className="mt-3">
				<Checkmark name="rent_car" label="I'm interested in renting a car" labelTextClassName="font-semibold" />
				<div className="ml-7 w-9/12 text-xs text-gray-600">
					Make the most out of your trip and check car hire options in your booking confirmation.
				</div>
			</div>
			<div className="mt-3 flex justify-between">
				<div className="w-9/12">
					<Checkmark
						name="airport_shuttle"
						label="I'm interested in requesting an airport shuttle"
						labelTextClassName="font-semibold"
					/>
					<span className="ml-7 text-xs text-gray-600 inline-block">
						We’ll tell your accommodation that you’re interested so they can provide details and costs.
					</span>
				</div>
				<div className="float-right w-1/12 flex justify-center">
					<AirplaneCarIcon size="lg" />
				</div>
			</div>
			<div className="mt-3 flex justify-between items-center">
				<div className="w-9/12">
					<Checkmark
						name="book_taxi"
						label="Want to book a private taxi in advance?"
						labelTextClassName="font-semibold"
					/>
					<span className="ml-7 text-xs text-gray-600 inline-block">
						Avoid surprises - get from the airport to your accommodation without a hitch. We&apos;ll add
						taxi options to your booking confirmation.
					</span>
				</div>
				<div className="float-right w-1/12 flex justify-center">
					<CarIcon size="md" />
				</div>
			</div>
		</div>
	);
};

export default UserDataFormAddons;
