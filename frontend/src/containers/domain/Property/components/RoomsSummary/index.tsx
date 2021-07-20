import React, { FunctionComponent } from 'react';

import RoomsSummaryRow from './Row';

import { roomsSummary as roomsSummaryTranslations } from '../../en-CA.json';
import { Room } from 'common/models';

interface Props {
	rooms: Room[];
}

// eslint-disable-next-line no-empty-pattern
const RoomsSummary: FunctionComponent<Props> = ({ rooms }) => {
	const roomsSummary = 'mt-3';
	const roomsSummaryTable = 'w-full border-collapse';
	const roomsSummaryTableTh = 'bg-blue-500 border-2 border-blue-800 text-white p-2';

	const { sleeps, roomType } = roomsSummaryTranslations.tableHead;

	return (
		<div className={roomsSummary}>
			<table className={roomsSummaryTable}>
				<thead>
					<tr>
						<th className={roomsSummaryTableTh}>{sleeps}</th>
						<th className={roomsSummaryTableTh}>{roomType}</th>
						<th className={roomsSummaryTableTh}> </th>
					</tr>
				</thead>
				<tbody>
					{rooms.map(room => (
						<RoomsSummaryRow key={JSON.stringify(room)} room={room}>
							{room.name}
						</RoomsSummaryRow>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RoomsSummary;
