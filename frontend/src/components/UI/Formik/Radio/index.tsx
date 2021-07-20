import React from 'react';

import Field from '../Field';

import { FieldProps } from 'common/types';

interface RadioProps extends FieldProps {
	name: string;
	defaultChecked?: boolean;
	flexDirection?: 'row' | 'col' | 'row-reverse';
}

const Radio: React.FunctionComponent<RadioProps> = ({
	name,
	defaultChecked,
	flexDirection = 'row-reverse',
	value,
	...restProps
}) => {
	return (
		<Field
			type="radio"
			name={name}
			value={value}
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

export default Radio;
