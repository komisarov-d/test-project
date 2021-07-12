import React, { FunctionComponent } from 'react';
import { Formik, Form as FForm } from 'formik';
import { FormProps } from 'common/types';

const Form: FunctionComponent<FormProps> = ({ children, isLoading, title, className, ...restProps }) => {
	return (
		<Formik {...restProps}>
			<FForm className={className}>
				{title && <div className="font-bold text-center text-2xl mb-6">{title}</div>}
				{children}
			</FForm>
		</Formik>
	);
};

export default Form;
