import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';
import { ButtonProps } from 'common/types';
import Button from 'components/UI/Buttons/Button';

const Submit: FunctionComponent<ButtonProps> = ({ type = 'submit', ...props }) => {
	const { isValid } = useFormikContext();
	return <Button disabled={!isValid} type={type} {...props} />;
};

export default Submit;
