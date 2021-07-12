import React, { FunctionComponent, useState } from 'react';
import { FieldProps } from 'common/types';
import { EyeIcon } from '../../Icons';
import Field from '../Field';

const PasswordField: FunctionComponent<FieldProps> = props => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Field
			{...props}
			type={isVisible ? 'text' : 'password'}
			icon={
				<button type="button" onClick={() => setIsVisible(!isVisible)}>
					<EyeIcon />
				</button>
			}
		/>
	);
};

export default PasswordField;
