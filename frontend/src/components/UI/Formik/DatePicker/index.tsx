/* eslint-disable indent */
import React, { FunctionComponent, forwardRef } from 'react';
import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import Field from '../Field';
import { FieldProps, InputProps } from 'common/types';
import 'react-datepicker/dist/react-datepicker.css';

interface PickerProps {
	selectsRange?: boolean;
}

const formatInputValue = (value: string | string[]) => {
	if (Array.isArray(value)) {
		const start = dayjs(value[0]).format('MMM DD, YYYY');
		const end = value[1] ? dayjs(value[1]).format('MMM DD, YYYY') : 'not selected';
		return value[0] ? `${start} - ${end}` : '';
	}

	return value ? dayjs(value).format('MMM DD, YYYY') : '';
};

const Picker: FunctionComponent<InputProps & PickerProps> = ({ value, selectsRange, ...inputProps }) => {
	const { setFieldValue } = useFormikContext();

	const Input = forwardRef<HTMLInputElement, { onClick?: () => void }>(({ onClick }, ref) => {
		return <input {...inputProps} onClick={onClick} ref={ref} value={formatInputValue(value)} />;
	});

	const handleChange = date => setFieldValue(inputProps.name, date);

	const valuesProps = selectsRange
		? {
				selected: value[0],
				startDate: value[0],
				endDate: value[1]
		  }
		: {
				selected: value
		  };

	return (
		<DatePicker
			wrapperClassName="w-full"
			customInput={<Input />}
			onChange={handleChange}
			minDate={new Date()}
			popperPlacement="bottom-center"
			popperClassName="z-20"
			selectsRange={selectsRange}
			{...valuesProps}
		/>
	);
};

const FormikDatePicker: FunctionComponent<FieldProps & PickerProps> = props => {
	return <Field {...props} renderInput={inputProps => <Picker {...inputProps} />} autoComplete="off" readOnly />;
};

export default FormikDatePicker;
