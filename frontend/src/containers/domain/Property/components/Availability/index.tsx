/* eslint-disable no-tabs */
import React, { FunctionComponent } from 'react';
import AvailabilityCard from './Card';

import { Availability as AvailabilityType } from 'common/models';

interface Props {
	availability: AvailabilityType[];
}

const Availability: FunctionComponent<Props> = ({ availability }) => {
	return (
		<div className="Availability">
			{availability.map(availabilityItem => (
				<AvailabilityCard
					key={availabilityItem.title}
					title={availabilityItem.title}
					subtitle={availabilityItem.subtitle}
					icon={availabilityItem.icon}
				/>
			))}
		</div>
	);
};

export default Availability;
