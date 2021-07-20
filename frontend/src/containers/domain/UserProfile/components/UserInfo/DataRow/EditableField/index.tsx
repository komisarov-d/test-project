import React, { FunctionComponent } from 'react';

import { DatePicker, Field, PasswordField } from 'components';

interface Props {
	label: string;
	isEditable: boolean;
	name: string;
	fieldType?: string;
	inactiveLabel: string;
	allowedSymbols?: RegExp;
	errorText?: string;
}

// basically it is 2 components in one
// when active it will render input
// when inactive it will render div with inactiveLabel as inner text
const EditableField: FunctionComponent<Props> = ({
	label,
	isEditable,
	name,
	inactiveLabel,
	allowedSymbols,
	fieldType = 'input'
}) => {
	const FormComponentsMapping = {
		input: (
			<Field
				helper="contained"
				disableMargin
				label={label}
				name={name}
				inputClassName="shadow-inner"
				allowedSymbols={allowedSymbols}
				className="py-1 px-2 m-0 w-10/12"
			/>
		),
		password: (
			<PasswordField
				helper="contained"
				disableMargin
				label={label}
				name={name}
				inputClassName="shadow-inner"
				allowedSymbols={allowedSymbols}
				className="py-1 px-2 m-0 w-10/12"
			/>
		),
		datePicker: (
			<DatePicker
				name={name}
				className="py-1 pl-2 pr-2 m-0 w-10/12"
				helper="contained"
				label={label}
				disableMargin
				inputClassName="shadow-inner"
			/>
		)
	};

	if (isEditable) {
		return (
			FormComponentsMapping[fieldType] || (
				<Field
					helper="contained"
					disableMargin
					label={label}
					name={name}
					inputClassName="shadow-inner"
					allowedSymbols={allowedSymbols}
					className="py-1 px-2 m-0 w-10/12"
				/>
			)
		);
	}

	return <div className="font-medium w-full">{inactiveLabel}</div>;
};

export default EditableField;
