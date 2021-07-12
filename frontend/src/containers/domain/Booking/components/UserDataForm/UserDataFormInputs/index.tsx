import React, { FunctionComponent } from 'react';
import { Radio, Field } from 'components';
import Label from '../../label';

const UserDataFormInputs: FunctionComponent = () => {
	return (
		<>
			<Label>
				Almost done! Just fill in the <span className="text-red-600">*</span> required info
			</Label>
			<div className="mt-2">
				<div className="font-bold ">Are you travelling for work?</div>
				<Radio name="travel_reason" label="Yes" id="radio1" value="work" />
				<Radio name="travel_reason" label="No" id="radio2" defaultChecked value="other" />
			</div>
			<div className="flex justify-start w-min mt-4">
				<Field
					name="firstname"
					markRequired
					label="First name"
					labelTextClassName="text-black"
					className="font-bold text-black"
					fullWidth={false}
					renderInput={inputProps => (
						<input
							{...inputProps}
							className="p-1 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
						/>
					)}
				/>
				<Field
					name="lastname"
					markRequired
					label="Last name"
					labelTextClassName="text-black"
					className="ml-5 font-bold"
					fullWidth={false}
					renderInput={inputProps => (
						<input
							{...inputProps}
							className="p-1 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
						/>
					)}
				/>
			</div>
			<Field
				name="email"
				markRequired
				label="Email address"
				labelTextClassName="text-black"
				className="font-bold"
				renderInput={inputProps => (
					<input
						{...inputProps}
						className="p-1 w-5/12 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
					/>
				)}
			/>
			<Field
				name="repeat_email"
				markRequired
				label="Confirm Email address"
				labelTextClassName="text-black"
				className="font-bold"
				renderInput={inputProps => (
					<input
						{...inputProps}
						className="p-1 w-5/12 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
					/>
				)}
			/>
			<div className="text-md inline-block py-1 px-2 flex flex-col items-baseline">
				<span className="font-bold">Who are you booking for?</span>
				<Radio
					name="booking_for_me"
					label="I'm the main guest"
					id="guest_me"
					defaultChecked
					className="mt-2"
					value="current_user"
				/>
				<Radio
					name="booking_for_me"
					label="I'm booking for someone else"
					id="guest_other"
					className="mt-2"
					value="other"
				/>
			</div>
		</>
	);
};

export default UserDataFormInputs;
