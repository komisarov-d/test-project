import React from 'react';

import Field from '../Field';

import { FieldProps } from 'common/types';

interface CheckmarkProps {
	name: string;
	defaultChecked?: boolean;
	flexDirection?: 'row' | 'col' | 'row-reverse';
}

const Checkmark: React.FunctionComponent<CheckmarkProps & FieldProps> = ({
	name,
	defaultChecked,
	flexDirection = 'row-reverse',
	...restProps
}) => {
	return (
		<Field
			type="checkbox"
			name={name}
			defaultChecked={defaultChecked}
			className="cursor-pointer inline-flex items-center"
			inputClassName="cursor-pointer mx-2 Radio w-5 h-5"
			disableMargin
			helper="none"
			fullWidth={false}
			padding="none"
			flexDirection={flexDirection}
			{...restProps}
		/>
	);
};

export default Checkmark;
