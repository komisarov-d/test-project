import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import {
	DoubleBedIcon,
	SingleBedIcon,
	PersonIcon,
	CheckmarkIcon,
	Button,
	BookLinkButton,
	CreditcardIcon
} from 'components';

import { roomsDetails } from '../../../en-CA.json';

interface Bed {
	amount: number;
	type: 'full' | 'single';
}
interface Advantage {
	text: string;
	iconType: 'card' | 'checkark' | 'default';
}
interface Props {
	advantages: Advantage[];
	persons: number;
	beds: Bed[];
	facilities: string[];
	rooms: number;
	price: number;
}

const Row: FunctionComponent<Props> = ({ advantages, persons, beds, facilities, rooms, price, children }) => {
	const roomsDetailsTableTd = 'bg-blue-50 border-2 border-t-0 border-blue-200 text-black p-2';
	const roomsDetailsIcon =
		'inline-flex justify-between w-6 h-6 align-center bg-transparent rounded-full p-1 text-current';
	const roomsDetailsInfo = 'flex items-center';
	const roomsDetailsFacility = 'text-green-600';
	const roomsDetailsAdvantages = 'flex flex-col text-green-600';

	const { priceText, bookBtnText } = roomsDetails.row;

	const bedIconsMapping = {
		full: (
			<div className={clsx(roomsDetailsIcon, 'w-8 h-8')}>
				<DoubleBedIcon />
			</div>
		),
		single: (
			<div className={clsx(roomsDetailsIcon, 'w-8 h-8')}>
				<SingleBedIcon />
			</div>
		)
	};

	const PersonIconsMapping = {
		Person: (
			<div className={roomsDetailsIcon}>
				<PersonIcon />
			</div>
		),
		Child: null
	};
	const advantagesIconsMapping = {
		card: <CreditcardIcon />,
		default: <CheckmarkIcon />,
		checkmark: <CheckmarkIcon />
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
			<td className={clsx(roomsDetailsTableTd, 'w-1/6')}>
				<ul>
					<li>
						<BookLinkButton classes="underline">{children}</BookLinkButton>
					</li>
					<li className={roomsDetailsInfo}>
						{bedsIcons.map((bedIcons, index, arr) => (
							// icons are identical so order aswell as unique key doesn't matter
							// eslint-disable-next-line react/no-array-index-key
							<React.Fragment key={index}>
								{bedIcons}
								{index < arr.length - 1 && <span>+</span>}
							</React.Fragment>
						))}
					</li>
					<li>
						{facilities.map(facility => (
							<span className={roomsDetailsFacility} key={facility}>
								<span className={roomsDetailsIcon}>
									<CheckmarkIcon />
								</span>
								<span>{facility}</span>
							</span>
						))}
					</li>
				</ul>
			</td>
			<td className={clsx(roomsDetailsTableTd)}>{personsIcons}</td>
			<td className={clsx(roomsDetailsTableTd, 'w-1/6')}>
				<span>
					<strong>{price}$</strong> <br />
					{priceText.replace('{price}', price.toString())}
				</span>
			</td>
			<td className={clsx(roomsDetailsTableTd, 'w-1/6')}>
				<div className={roomsDetailsAdvantages}>
					{advantages.map(advantage => (
						<span key={advantage.text}>
							<span className={roomsDetailsIcon}>{advantagesIconsMapping[advantage.iconType]}</span>
							<span className="font-bold">{advantage.text}</span>
						</span>
					))}
				</div>
			</td>
			<td className={roomsDetailsTableTd}>
				<div className="flex items-center justify-center">
					<select className="focus:outline-none py-1 px-2 cursor-pointer bg-transparent border border-black rounded">
						{Array(rooms)
							.fill(null)
							.map((_, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<option key={price * index} value={price * (1 + index)}>{`${1 + index} (${
									price * (1 + index)
								}$)`}</option>
							))}
					</select>
				</div>
			</td>
			<td className={roomsDetailsTableTd}>
				<Button color="inherit" buttonStyle="booking" className="w-full">
					{bookBtnText}
				</Button>
			</td>
		</tr>
	);
};

export default Row;
