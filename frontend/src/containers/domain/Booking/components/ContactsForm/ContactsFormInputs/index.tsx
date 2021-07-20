import React, { FunctionComponent, useState, useMemo, useEffect } from 'react';
import {
	Field,
	FieldWithOptions,
	PopoverOption,
	ChevronDownicon,
	Checkmark,
	Button,
	PersonOutlineIcon
} from 'components';
import Label from '../../label';
import countries from './countries.json';

interface Props {
	initialCountryFilter?: string;
	handleClickOption: (countryname: string) => void;
	onResetUserData: () => void;
	email: string;
	fullName: string;
}

const ContactsFormInputs: FunctionComponent<Props> = ({
	initialCountryFilter = '',
	email,
	fullName,
	handleClickOption,
	onResetUserData
}) => {
	const [countryFilter, setCountryFilter] = useState(initialCountryFilter);

	useEffect(() => {
		setCountryFilter(initialCountryFilter);
	}, [initialCountryFilter]);

	const getCountries = useMemo(
		() =>
			countries.reduce((options, country) => {
				if (country.name.toLowerCase().includes(countryFilter.toLowerCase(), 0))
					options.push(
						<PopoverOption
							key={country.name}
							primary={country.name}
							onClick={() => handleClickOption(country.name)}
						/>
					);
				return options;
			}, []),
		[countryFilter, handleClickOption]
	);

	return (
		<div className="w-full px-3">
			<div className="w-full flex justify-between relative">
				<div className="w-7/12 inline-block">
					<h2 className="text-2xl font-bold py-3">Enter your address</h2>
					<FieldWithOptions
						hideOnClick
						label="Country/Region"
						markRequired
						labelTextClassName="text-black"
						className="relative font-bold w-10/12 pr-20"
						helperClassName="text-center shadow"
						helper="contained"
						name="country"
						popoverPosition="top"
						icon={<ChevronDownicon size="sm" />}
						iconPosition="right"
						onChange={e => setCountryFilter(e.target.value)}
						popover={getCountries}
						renderInput={inputProps => (
							<input
								{...inputProps}
								className="py-1 px-3 w-full rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
							/>
						)}
					/>
					<Field
						name="phone"
						label="Telephone"
						labelTextClassName="text-black"
						className="relative font-bold w-10/12 pr-20"
						modifyDisplayedValue={value => `+${value ? value.replace('+', '') : ''}`}
						renderInput={inputProps => (
							<input
								{...inputProps}
								className="p-1 px-3 w-full rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
							/>
						)}
					/>
					<div className="mt-3 flex justify-between flex-col">
						<Checkmark
							name="paperless_confirmation"
							label="Yes, I'd like free paperless confirmation (recommended)"
							labelTextClassName="font-semibold"
						/>
						<span className="ml-7 text-sm text-gray-600 inline-block">
							We&apos;ll text you a link to download our app
						</span>
					</div>
					<div className="mt-3 flex justify-between items-center">
						<Checkmark
							name="promotions"
							label="Yes, Booking.com can send me special promotions via SMS."
							labelTextClassName="font-semibold"
						/>
					</div>
				</div>
				<div className="w-4/12 inline-block">
					<Label>
						Almost done! Just fill in the <span className="text-red-600">*</span> required info
					</Label>
					<div className="border border-blue-600 py-2 px-3 mt-2 text-lg">
						<div>
							<div className="font-bold flex justify-between">
								<span>name:</span>
								<span className="font-normal underline cursor-pointer inline-flex justify-between items-center">
									<PersonOutlineIcon size="sm" />
									<button
										type="button"
										className="text-blue-800 ml-2 focus:outline-none"
										onClick={() => onResetUserData()}
									>
										Change
									</button>
								</span>
							</div>
							<div className="">{fullName}</div>
						</div>
						<div className="mt-2">
							<div className="font-bold">email:</div>
							<div className="">{email}</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 right-0">
					<Button color="inherit" buttonStyle="booking" className="float-right" type="submit">
						Complete booking
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactsFormInputs;
