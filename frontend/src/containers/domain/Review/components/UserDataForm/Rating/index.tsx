import React, { useState, FunctionComponent } from 'react';
import Rating from '@material-ui/lab/Rating';

interface Props {
	title: string;
}

const StarRating: FunctionComponent<Props> = ({ title }) => {
	const [value, setValue] = useState<number | null>(0);

	return (
		<div className="mb-8">
			<div className="text-black text-lg pb-2 font-bold">{title}</div>
			<Rating
				name="simple-controlled"
				size="large"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
		</div>
	);
};

export default StarRating;
