/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';
import { IProperty } from '../../models';
import { RatingStars, LocationIcon } from 'components';

const PropertyItem: FunctionComponent<IProperty> = ({
	name,
	description,
	images,
	country,
	city,
	street,
	rating,
	type,
	averagePrice
}) => {
	return (
		<div className="flex flex-col w-full md:flex-row my-6 rounded overflow-hidden bg-white shadow">
			<div className="max-w-full md:max-w-xs">
				<img className="max-w-full" src={images[0].url} alt={name} />
			</div>
			<div className="flex flex-col flex-grow py-3 px-5 min-w-0">
				<div className="flex justify-between align-center w-full max-w-full">
					<div className="font-bold text-lg truncate">{name}</div>
					<RatingStars className="ml-2" stars={5} rating={rating} />
				</div>
				<span className="text-sm mt-2 inline-flex items-center">
					<LocationIcon /* size="sm" className="mr-1" */ />
					{country} · {city} · {street}
				</span>
				<div className="mt-3">{description}</div>
				<div className="flex mt-auto pt-3 justify-between border-t">
					<div className="text-sm">
						Type: <span className="font-semibold">{type}</span>
					</div>
					<div className="text-sm">
						Average price: <span className="font-semibold">${averagePrice}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyItem;
