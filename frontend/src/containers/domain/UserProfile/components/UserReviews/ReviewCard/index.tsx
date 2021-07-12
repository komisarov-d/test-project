import React, { FunctionComponent } from 'react';
import { RatingStars } from 'components';

interface Props {
	hotelName: string;
	hotelImageUrl: string;
	rating: number;
}

const ReviewCard: FunctionComponent<Props> = ({ hotelName, hotelImageUrl, children, rating }) => {
	return (
		<div className="w-full flex bg-transparent items-center shadow-lg py-2 px-4 mb-5">
			<div className="w-24 h-24 ml-2 mr-5 border float-left rounded-full flex items-center justify-center overflow-hidden">
				<img className="h-full w-full" src={hotelImageUrl} alt="profile_img" />
			</div>
			<div className="w-10/12 flex flex-col h-full py-2">
				<div className="font-bold flex justify-between py-2">
					{hotelName} <RatingStars stars={5} rating={rating} className="scale-150" />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default ReviewCard;
