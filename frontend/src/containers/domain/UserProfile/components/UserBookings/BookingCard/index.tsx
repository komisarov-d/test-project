import React, { FunctionComponent } from 'react';
import { userBookings } from '../../../en-US.json';
import { MenuIcon } from 'components';

interface Props {
	hotelName: string;
	hotelImageUrl: string;
	startDate: string;
	finishDate: string;
	city: string;
	price: string;
	isActive: string;
}

const BookingCard: FunctionComponent<Props> = ({
	hotelName,
	hotelImageUrl,
	startDate,
	finishDate,
	city,
	price,
	isActive
}) => {
	const active = isActive !== 'Booked' ? 'opacity-50' : null;
	return (
		<div className={active}>
			<div className="w-full flex bg-transparent items-center shadow-lg py-5 px-4 mb-5">
				<div className="w-24 h-24 ml-2 mr-5 border float-left flex rounded-md items-center justify-center overflow-hidden">
					<img className="h-full w-full" src={hotelImageUrl} alt="profile_img" />
				</div>
				<div className="flex  flex-grow flex-col h-full py-2">
					<div className="font-bold">{hotelName}</div>
					<div className="leading-loose">
						{startDate} - {finishDate} &#183; {city}
					</div>
					<div>{isActive}</div>
				</div>
				<div className="self-start flex h-full py-2">
					<div className="font-bold">
						{userBookings.currency}
						{price}
					</div>
					<MenuIcon />
				</div>
			</div>
		</div>
	);
};

export default BookingCard;
