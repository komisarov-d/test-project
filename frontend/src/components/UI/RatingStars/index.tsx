/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { StarIcon } from 'components';

interface RatingStarsProps {
	className?: string;
	stars: number;
	rating: number;
}

const RatingStars: FunctionComponent<RatingStarsProps> = ({ stars = 5, rating = 0, className }) => {
	return (
		<div className={clsx('flex items-center', className)}>
			{Array(stars)
				.fill(null)
				.map((_, index) => (
					<StarIcon
						size="sm"
						key={index}
						className={clsx(index < rating ? 'text-yellow-500' : 'text-gray-500')}
					/>
				))}
		</div>
	);
};

export default RatingStars;
