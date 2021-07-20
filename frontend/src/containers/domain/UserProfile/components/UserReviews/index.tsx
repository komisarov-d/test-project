import React, { FunctionComponent, useEffect } from 'react';

import ReviewCard from './ReviewCard';
import { ReviewIcon } from 'components';

import { userReviews } from '../../en-US.json';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewRoutine } from './userReviewRoutines';
import { RootState } from 'common/types';

const UserReviews: FunctionComponent = () => {
	const dispatch = useDispatch();
	const allReviews = useSelector((state: RootState) => state.userReviews.reviews);

	useEffect(() => {
		dispatch(getReviewRoutine.trigger(9));
	}, [dispatch]);

	return (
		<div className="w-full flex justify-between flex-col bg-white pt-5 shadow">
			<div className="pb-5 px-6">
				<div className="flex justify-between w-full">
					<div className="flex flex-col justify-between">
						<h2 className="font-bold text-xl">{userReviews.title.main}</h2>
						<h3 className="text-lg">{userReviews.title.sub}</h3>
					</div>
					<div
						className={`w-16 h-16 border float-left rounded-full flex items-center transition-transform
				justify-center overflow-hidden focus:outline-none`}
					>
						<ReviewIcon />
					</div>
				</div>
			</div>
			<div className="float-right bg-transparent pl-6 px-4 min-h-review">
				{allReviews.map(review => (
					<ReviewCard
						key={review.id}
						hotelName={review.property.name}
						hotelImageUrl={review.images[0].url}
						rating={review.rating}
					>
						{review.generalImpressions}
					</ReviewCard>
				))}
			</div>
		</div>
	);
};

export default UserReviews;
