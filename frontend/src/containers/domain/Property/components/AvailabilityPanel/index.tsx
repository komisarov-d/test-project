import React, { FunctionComponent, useState } from 'react';
import clsx from 'clsx';

import SelectRoomsField from 'containers/domain/Properties/common/components/SelectRoomField';
import { Button, Form, DatePicker, CalendarIcon, PersonsIcon } from 'components';

import { availabilityPanel } from '../../en-CA.json';

interface ISelectRoomsProps {
	customerOptions: {
		adults: number;
		children: number;
		pets: number;
	};
	selectcheck: [Date, Date];
}

interface Props {
	propertyName: string;
	onSubmit: (accomodationDate: [Date, Date]) => void;
}

const AvailabilityPanel: FunctionComponent<Props> = ({ onSubmit, propertyName }) => {
	const [dateSubmitted, setDateSubmitted] = useState(false);

	const availability = 'mt-3';
	const availabilityTitle = 'font-medium font-lg';
	const availabilityForm = `flex-wrap max-w-5xl mx-auto flex flex-col md:flex-row w-full shadow text-sm mt-3 border-2 transition-all
		border-yellow-500 ${dateSubmitted ? 'bg-blue-300 border-blue-500' : 'bg-yellow-300 border-yellow-500'} p-3`;
	const availabilityFormTitle = 'mb-3 text-lg font-normal w-full';

	const { title, formTitle, checkAvailabilityBtn } = availabilityPanel;

	const onHandleSubmit = data => {
		if (data.selectcheck) {
			setDateSubmitted(true);
			onSubmit([data.selectcheck, data.selectcheck]);
		}
	};

	return (
		<div className={availability}>
			<h2 className={availabilityTitle}>{title}</h2>

			<Form
				className={clsx(availabilityForm, 'sm:mt-3')}
				onSubmit={data => onHandleSubmit(data as ISelectRoomsProps)}
				initialValues={{
					destination: '',
					adults: 2,
					children: 0,
					rooms: 1,
					selectcheck: [null, null]
				}}
			>
				<span className={availabilityFormTitle}>
					{formTitle}
					{propertyName}?
				</span>
				<DatePicker
					name="selectcheck"
					selectsRange
					placeholder="Check-in - Check-out"
					inputClassName="md:rounded-none cursor-pointer"
					helperClassName="hidden"
					className="z-20"
					padding="md"
					icon={<CalendarIcon />}
				/>
				<SelectRoomsField
					name="customerOptions"
					inputClassName="md:rounded-none cursor-pointer"
					helper="none"
					padding="md"
					icon={<PersonsIcon />}
					fields={['adults', 'children', 'rooms']}
					boundaries={{
						adults: [1, 30],
						children: [0, 10],
						rooms: [1, 30]
					}}
				/>
				<Button className="mb-4" color="inherit" buttonStyle="booking" type="submit">
					{checkAvailabilityBtn}
				</Button>
			</Form>
		</div>
	);
};

export default AvailabilityPanel;
