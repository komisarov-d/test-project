import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

import { Button, PersonIcon, BookLinkButton, DoubleBedIcon, SingleBedIcon } from 'components';
import { roomsSummary } from '../../../en-CA.json';
import { Room, Bed } from 'common/models';

interface Props {
	room: Room;
}

const RoomsSummaryRow: FunctionComponent<Props> = ({ children, room }) => {
	const roomsSummaryTableTd = 'bg-blue-50 border-2 border-t-0 border-blue-200 text-black p-2';
	const roomsSummaryIcon =
		'inline-flex justify-between w-7 h-7 align-center bg-transparent text-black rounded-full p-1 mr-1';
	const roomsSummaryLinkButton = 'underline hover:text-yellow-500';
	const roomsSummaryInfo = 'flex items-center';

	const { persons, beds } = room;

	const bedIconsMapping = {
		full: (
			<div className={roomsSummaryIcon}>
				<DoubleBedIcon />
			</div>
		),
		single: (
			<div className={roomsSummaryIcon}>
				<SingleBedIcon />
			</div>
		)
	};

	const PersonIconsMapping = {
		Person: (
			<div className={roomsSummaryIcon}>
				<PersonIcon />
			</div>
		),
		Child: null
	};

	const personsIcons = (
		<span>
			{Array(persons)
				.fill(null)
				.map((_, index) =>
					React.cloneElement(PersonIconsMapping.Person, {
						// eslint-disable-next-line react/no-array-index-key
						key: index
					})
				)}
		</span>
	);

	const getBedIcons = (bed: Bed) =>
		Array(bed.amount)
			.fill(null)
			.map((_, index) =>
				React.cloneElement(bedIconsMapping[bed.type], {
					// eslint-disable-next-line react/no-array-index-key
					key: index
				})
			);

	const bedsIcons = beds.map(bedData => getBedIcons(bedData));

	return (
		<tr>
			<td className={roomsSummaryTableTd}>{personsIcons}</td>
			<td className={clsx(roomsSummaryTableTd, 'w-2/3')}>
				<BookLinkButton classes={roomsSummaryLinkButton}>{children}</BookLinkButton>
				<div className={roomsSummaryInfo}>
					{bedsIcons.map((bedIcons, index, arr) => (
						// icons are identical so order aswell as unique key doesn't matter
						// eslint-disable-next-line react/no-array-index-key
						<React.Fragment key={index}>
							{bedIcons}
							{index < arr.length - 1 && <span>+</span>}
						</React.Fragment>
					))}
				</div>
			</td>
			<td className={clsx(roomsSummaryTableTd, 'text-center')}>
				<Button buttonStyle="booking-invert" color="inherit">
					{roomsSummary.showPriceBtn}
				</Button>
			</td>
		</tr>
	);
};

export default RoomsSummaryRow;
