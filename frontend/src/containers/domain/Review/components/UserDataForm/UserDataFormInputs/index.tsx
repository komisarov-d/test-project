import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Radio, Checkmark, TextArea, Field } from 'components';
import StarRating from '../Rating';
import { RootState } from 'common/types';

const UserDataFormInputs: FunctionComponent = () => {
	const reviewStyle = 'mb-8 flex flex-col items-start space-y-3 text-lg';
	const checkmarks = useSelector((state: RootState) => state.review.checkmarks);

	return (
		<>
			<div className={reviewStyle}>
				<div className="font-bold ">Did you travel for work?</div>
				<Radio name="travel_reason" label="Yes" id="radio_reason_1" value="work" />
				<Radio name="travel_reason" label="No" id="radio_reason_2" defaultChecked value="other" />
			</div>
			<div className={reviewStyle}>
				<div className="font-bold ">Who did you travel with?</div>
				{checkmarks.map(checkmark => (
					<Checkmark
						key={checkmark.id}
						id={checkmark.id}
						name={checkmark.name}
						label={checkmark.label}
						value={checkmark.value}
					/>
				))}
			</div>
			<div className={reviewStyle}>
				<div className="font-bold ">Did the apartment meet your expectations?</div>
				<Radio name="travel_expectation" label="Yes" id="radio_expectation_1" value="Good" />
				<Radio name="travel_expectation" label="No" id="radio_expectation_2" defaultChecked value="Bad" />
				<Radio
					name="travel_expectation"
					label="It exceeded my expectations"
					id="radio_expectation_3"
					value="Great"
				/>
			</div>
			<TextArea
				name="likeReview"
				markRequired
				label="What did you like?"
				labelTextClassName="text-black text-lg py-2"
				className="font-bold"
				rows={5}
				inputClassName="resize-none p-1  bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
			/>
			<TextArea
				name="dislikeReview"
				markRequired
				label="What didn't you like?"
				labelTextClassName="text-black text-lg py-2"
				className="font-bold"
				rows={5}
				inputClassName="resize-none p-1 bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
			/>
			<Field
				name="generalImpressions"
				markRequired
				label="Describe the general impressions in a short sentence"
				labelTextClassName="text-black text-lg py-2"
				className="font-bold mb-8"
				fullWidth={false}
				renderInput={inputProps => (
					<input
						{...inputProps}
						className="w-full p-1 rounded-md bg-gray-50 shadow-inner placeholder-gray-400 border border-gray-300 focus:border-indigo-400 focus:outline-none"
					/>
				)}
			/>
			<StarRating title="Rate your trip" />
		</>
	);
};

export default UserDataFormInputs;
