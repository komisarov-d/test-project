import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Field, Submit, PasswordField } from 'components/';
import AuthContainer from '../common/components/AuthContainer';
import { AppRoute } from 'common/enums';
import { registerRoutine } from '../authRoutines';

const formikProps = {
	initialValues: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirm: ''
	},
	validationSchema: Yup.object().shape({
		firstName: Yup.string().min(2, 'Minimum 2 characters').required('First name is required'),
		lastName: Yup.string().min(2, 'Minimum 2 characters').required('Last name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string().required('Password is required'),
		confirm: Yup.string()
			.required('Password is required')
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
	})
};

const Register: FunctionComponent = () => {
	const dispatch = useDispatch();
	const handleSubmit = values => {
		dispatch(registerRoutine.trigger(values));
	};

	return (
		<AuthContainer>
			<Form title="Registration" onSubmit={handleSubmit} {...formikProps}>
				<div className="flex space-x-4">
					<Field name="firstName" label="First name" />
					<Field name="lastName" label="Last name" />
				</div>
				<Field name="email" label="Email" />
				<PasswordField name="password" label="Password" />
				<PasswordField name="confirm" label="Confirm password" />
				<Submit className="w-full" content="Register" />
			</Form>
			<div className="text-center text-sm whitespace-nowrap mt-6">
				Alrady have and acount?{' '}
				<Link to={AppRoute.LOGIN} className="text-green-700 hover:underline">
					Sign in
				</Link>
			</div>
		</AuthContainer>
	);
};

export default Register;
