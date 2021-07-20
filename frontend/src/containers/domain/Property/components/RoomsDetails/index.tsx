/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent } from 'react';

import RoomsDetailsRow from './Row';

import { roomsDetails, roomTypes } from '../../en-CA.json';
import { Room, Bed } from 'common/models';

interface Props {
	rooms: Room[];
}

const RoomsDetails: FunctionComponent<Props> = ({ rooms }) => {
	const roomsDetailsTable = 'w-full border-collapse';
	const roomsDetailsTableTh = 'bg-blue-500 border-2 border-blue-800 text-white p-2';

	const { apartmentsType, sleeps, price, yourChoices, quantity } = roomsDetails.tableHead;
	const { standartDoubleRoom, standartTwinRoom } = roomTypes;

	return (
		<div className="mt-3">
			<table className={roomsDetailsTable}>
				<thead>
					<tr>
						<th className={roomsDetailsTableTh}>{apartmentsType}</th>
						<th className={roomsDetailsTableTh}>{sleeps}</th>
						<th className={roomsDetailsTableTh}>{price}</th>
						<th className={roomsDetailsTableTh}>{yourChoices}</th>
						<th className={roomsDetailsTableTh}>{quantity}</th>
						<th className={roomsDetailsTableTh}> </th>
					</tr>
				</thead>
				<tbody>
					{rooms.map(room => (
						<RoomsDetailsRow
							key={JSON.stringify(room)}
							facilities={room.info.facilities}
							beds={room.beds}
							persons={room.persons}
							advantages={room.info.advantages}
							rooms={room.freeAmount}
							price={room.price}
						>
							{room.name}
						</RoomsDetailsRow>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RoomsDetails;
