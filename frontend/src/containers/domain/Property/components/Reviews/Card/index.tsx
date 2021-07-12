import React, { FunctionComponent } from 'react';
import ShowMoreText from 'react-show-more-text';

interface Props {
	image?: string;
	name: string;
	country: string;
	text: string;
}

const Card: FunctionComponent<Props> = ({ image, name, country, text }) => {
	const reviewItem = 'items-center border-2 border-grey-100 p-5 mt-3 mr-3';
	const reviewHeader = 'flex items-center';
	const reviewItemTitle = 'font-bold';
	const reviewItemIcon = 'flex justify-between items-center w-12 h-12 bg-transparent p-1 mr-3';
	const reviewItemText = 'pt-3 text-sm';
	const anchorStyle = 'text-blue-500 hover:text-blue-800';
	const circleIcon = 'rounded-full';

	return (
		<div className={reviewItem} style={{ minHeight: '300px' }}>
			<div className={reviewHeader}>
				{image && (
					<div className={reviewItemIcon}>
						<img src={image} className={circleIcon} alt="user" />
					</div>
				)}
				<div className="description">
					<div className={reviewItemTitle}>{name}</div>
					<div>{country}</div>
				</div>
			</div>
			<ShowMoreText
				lines={9}
				more="Show more"
				less="Show less"
				className={reviewItemText}
				anchorClass={anchorStyle}
				expanded={false}
			>
				{text}
			</ShowMoreText>
		</div>
	);
};

export default Card;
