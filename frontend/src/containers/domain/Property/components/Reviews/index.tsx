/* eslint-disable no-tabs */
import React, { FunctionComponent } from 'react';
import ReviewCard from './Card';

import { Review as ReviewType } from 'common/models';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';

interface Props {
	review: ReviewType[];
}

const Review: FunctionComponent<Props> = ({ review }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2
		}
	};

	return (
		<div className="relative">
			<Carousel
				draggable={false}
				responsive={responsive}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				containerClass="react-multi-carousel-list"
			>
				{review.map(reviewItem => (
					<ReviewCard
						key={reviewItem.name}
						name={reviewItem.name}
						country={reviewItem.country}
						image={reviewItem.image}
						text={reviewItem.text}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default Review;
