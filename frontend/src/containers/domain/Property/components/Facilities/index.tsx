import React, { FunctionComponent } from 'react';
import Card from './Facility';

import { facilities as facilitiesTranslation } from '../../en-CA.json';

interface Facility {
	icon: string;
	name: string;
}
interface Props {
	facilities: Facility[];
}

const Facilities: FunctionComponent<Props> = ({ facilities }) => {
	return (
		<div className="mt-3 w-8/12">
			<h2 className="font-bold text-lg mt-3">{facilitiesTranslation.mostPopularFacilities}</h2>
			{facilities.map(facility => (
				<Card key={facility.name} icon={facility.icon}>
					{facility.name}
				</Card>
			))}
		</div>
	);
};

export default Facilities;
