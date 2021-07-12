import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';
import { IconButton, FieldWithOptions, PlusIcon, MinusIcon } from 'components';
import { FieldProps } from 'common/types/';

interface ISelectRoomsProps extends FieldProps {
	fields: string[];
	boundaries: {
		[key: string]: number[];
	};
}

const SelectRoomsField: FunctionComponent<ISelectRoomsProps> = ({ fields, boundaries, ...props }) => {
	const { values, setFieldValue } = useFormikContext();

	const handleClick = (e, fieldName: string, isIncrement: boolean) => {
		e.stopPropagation();

		const value = values[fieldName];

		setFieldValue(fieldName, isIncrement ? value + 1 : value - 1);
	};

	const renderActions = fields.map(fieldName => {
		const capitalizedFiledName = `${fieldName[0].toUpperCase()}${fieldName.slice(1)}`;

		return (
			<div key={fieldName} className="px-3 w-full flex items-center justify-between my-1">
				<span className="mx-1">{capitalizedFiledName}</span>
				<div className="flex">
					<IconButton
						content={<PlusIcon />}
						disabled={values[fieldName] >= boundaries[fieldName][1]}
						onClick={e => handleClick(e, fieldName, true)}
					/>
					<div className="w-9 mx-2 flex items-center justify-center font-bold">{values[fieldName] || 0}</div>
					<IconButton
						disabled={values[fieldName] <= boundaries[fieldName][0]}
						content={<MinusIcon />}
						onClick={e => handleClick(e, fieldName, false)}
					/>
				</div>
			</div>
		);
	});

	const modifyDisplayedValue = () =>
		fields.reduce(
			(prev, fieldName, index) =>
				`${prev}${values[fieldName]} ${fieldName}${index < fields.length - 1 ? ' · ' : ''}`,
			''
		);

	return <FieldWithOptions {...props} readOnly popover={renderActions} modifyDisplayedValue={modifyDisplayedValue} />;
};

export default SelectRoomsField;
