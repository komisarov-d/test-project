/* eslint-disable @typescript-eslint/ban-types */
import React, { FunctionComponent } from 'react';

import { Form, Button, BookLinkButton } from 'components';
import EditableField from './EditableField';
import { UserProfileDataRow } from 'common/models';

import { dataRow } from '../../../en-US.json';

const DataRow: FunctionComponent<UserProfileDataRow> = ({
	fields,
	rowName,
	rowLabel,
	initialFieldsValues,
	isEditable,
	formikProps,
	errorText,
	onSubmit,
	onSetEditable
}) => {
	const onSubmitValues = (values: any) => {
		onSetEditable(rowName.toLowerCase(), false);
		onSubmit(values);
	};

	let UserEditField = (
		<BookLinkButton font="medium" onClick={() => onSetEditable(rowName.toLowerCase(), true)} classes="pr-4">
			{dataRow.btnEdit}
		</BookLinkButton>
	);

	if (isEditable) {
		UserEditField = (
			<>
				<Button type="submit" className="pr-1 mb-2" color="inherit" buttonStyle="booking">
					{dataRow.btnSave}
				</Button>
				<Button
					color="inherit"
					buttonStyle="booking"
					onClick={() => onSetEditable(rowName.toLowerCase(), false)}
					className="pr-1"
					type="button"
				>
					{dataRow.btnCancel}
				</Button>
			</>
		);
	}

	return (
		<div className="flex justify-between border-b pb-7 px-4 mt-7 border-gray-300 text-xl">
			<Form
				{...formikProps}
				initialValues={initialFieldsValues}
				enableReinitialize
				onSubmit={values => onSubmitValues(values)}
				className="flex justify-between w-full items-start"
			>
				<div className="w-3/12 text-left">{rowLabel}</div>
				<div className="w-7/12 flex items-center mr-10">
					{fields.map(fieldData => (
						<EditableField
							key={fieldData.name}
							name={fieldData.name}
							inactiveLabel={fieldData.fieldInactiveLabel}
							label={fieldData.fieldLabel}
							isEditable={isEditable}
							fieldType={fieldData.fieldType}
							allowedSymbols={fieldData.allowedSymbols}
							errorText={errorText}
						/>
					))}
				</div>
				<div className="font-light flex flex-col justify-between h-full">{UserEditField}</div>
			</Form>
		</div>
	);
};

export default DataRow;
