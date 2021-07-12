import React, { FunctionComponent, useEffect } from 'react';

import BookingCard from './BookingCard';
import { CheckmarkIcon, SadFaceIcon } from 'components';
import { userBookings } from '../../en-US.json';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingRoutine } from './userBookingRoutines';
import { RootState } from 'common/types';

const BookingsCard = () => {
	const allBookings = useSelector((state: RootState) => state.userBookings.bookings);
	// const userData = useSelector((state: RootState) => state.viewer.viewer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBookingRoutine.trigger());
	}, [dispatch]);

	if (allBookings.length !== 0) {
		return (
			<div className="float-right bg-transparent pb-3 pl-6 px-4 min-h-review">
				{allBookings.map((booking, index) => (
					<div key={booking.id}>
						{(index === 0 || allBookings[index].city !== allBookings[index - 1].city) && (
							<div className="py-2 font-bold text-lg">{booking.city}</div>
						)}
						<BookingCard
							hotelName={booking.property}
							hotelImageUrl={booking.images[0].url}
							startDate={booking.startDate.split('T')[0].split('-').reverse().join('.')}
							finishDate={booking.finishDate.split('T')[0].split('-').reverse().join('.')}
							city={booking.city}
							price={booking.price.toString()}
							isActive={booking.isActive}
						/>
					</div>
				))}
			</div>
		);
	}
	return (
		<div className="text-center bg-transparent py-40 px-20 border m-5 ">
			<div className="inline-block">
				<SadFaceIcon />
			</div>
			<div className="font-bold">{userBookings.error.title}</div>
			<div>{userBookings.error.text}</div>
		</div>
	);
};

const UserBookings: FunctionComponent = () => {
	return (
		<div className="w-full flex justify-between flex-col bg-white pt-5 shadow">
			<div className="pb-5 px-6">
				<div className="flex justify-between w-full">
					<div className="flex flex-col justify-between">
						<h2 className="font-bold text-xl">{userBookings.title.main}</h2>
						<h3 className="text-lg">{userBookings.title.sub}</h3>
					</div>
					<div
						className={`w-16 h-16 border float-left rounded-full flex items-center transition-transform
				justify-center overflow-hidden focus:outline-none`}
					>
						<CheckmarkIcon />
					</div>
				</div>
			</div>
			<BookingsCard />
		</div>
	);
};

export default UserBookings;
