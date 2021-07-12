import React, { ReactElement, useState } from 'react';
import { Range } from 'rc-slider';
import { Field, Form } from 'components';
import * as Yup from 'yup';

import 'rc-slider/assets/index.css';
import { useHistory } from 'react-router-dom';
import { parse } from 'query-string';

const validationSchema = Yup.object().shape({
	min: Yup.number()
		.min(0, 'Cannot be negative')
		.required('Cannot be empty')
		.max(Yup.ref('max'), 'Cannot be more the max value'),
	max: Yup.number().required('Cannot be empty').min(Yup.ref('min'), 'Cannot be less the min value')
});
interface Props {
	range: {
		min: number;
		max: number;
	};
	onChange: (name: string, value: any) => void;
}

export default function Slider({ range, onChange }: Props): ReactElement {
	const history = useHistory();
	const queryParams = parse(history.location.search, { parseNumbers: true, arrayFormat: 'bracket' });
	let initialValues = range;
	// get initial range from url if provided
	if (Array.isArray(queryParams.average_price) && queryParams.average_price[0] && queryParams.average_price[1]) {
		const min = Number.isNaN(+queryParams.average_price[0]) ? 0 : +queryParams.average_price[0];
		const max = Number.isNaN(+queryParams.average_price[1]) ? 99999 : +queryParams.average_price[1];
		initialValues = {
			min,
			max
		};
	}
	// state to change Range value when inputs change
	const [sliderValue, setsliderValue] = useState([initialValues.min, initialValues.max]);
	const handleChange = (value: typeof range) => {
		validationSchema.validate(value).then(() => {
			setsliderValue([value.min, value.max]);
			onChange('average_price', [value.min, value.max]);
		});
	};
	// set initial value as in slider so inputs will change while we are moving slider
	initialValues = {
		min: sliderValue[0],
		max: sliderValue[1]
	};
	return (
		<div className="flex flex-col items-start p-4 border-b border-gray-300 space-y-3 font-semibold">
			<span>Price range</span>
			<Range
				min={range.min}
				max={range.max}
				value={sliderValue}
				pushable
				onChange={value => setsliderValue(value)}
				onAfterChange={value => handleChange({ min: value[0], max: value[1] })}
			/>
			<Form
				onSubmit={() => {}}
				initialValues={initialValues}
				className="flex justify-between"
				validationSchema={validationSchema}
				enableReinitialize
			>
				<Field
					name="min"
					className="inline-flex mr-6"
					inputClassName="text-base"
					onChange={e => handleChange({ min: +e.target.value, max: initialValues.max })}
				/>
				<Field
					name="max"
					className="inline-flex ml-6"
					inputClassName="text-base"
					onChange={e => handleChange({ max: +e.target.value, min: initialValues.min })}
				/>
			</Form>
		</div>
	);
}
