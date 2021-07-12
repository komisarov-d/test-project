import React, { FunctionComponent } from 'react';

import Title from './Title';
import Slider from './Slider';

interface Props {
	title: string;
	address: string;
}

const PropertySummary: FunctionComponent<Props> = ({ title, address }) => {
	return (
		<div>
			<Title title={title} address={address} />
			<Slider />
		</div>
	);
};

export default PropertySummary;
