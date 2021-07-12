import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Field, PasswordField, Submit, UserIcon } from 'components/';
import AuthContainer from '../common/components/AuthContainer';
import { AppRoute } from 'common/enums';
import { logInRoutine } from '../authRoutines';

const formikProps = {
	initialValues: { email: '', password: '' },
	validationSchema: Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string().required('Password is required')
	})
};

const Login: FunctionComponent = () => {
	const dispatch = useDispatch();
	const handleSubmit = values => {
		dispatch(logInRoutine.trigger(values));
	};

	return (
		<AuthContainer>
			<Form title="Sign in" onSubmit={handleSubmit} {...formikProps}>
				<Field name="email" label="Email" icon={<UserIcon />} />
				<PasswordField name="password" label="Password" />
				<Submit className="w-full" content="Sign in" />
			</Form>
			<div className="flex justify-around mt-6">
				<div className="text-center sm:text-left whitespace-nowrap">
					<Link to="/" className="text-green-700 text-sm hover:underline">
						Forgot password
					</Link>
				</div>
				<div className=" text-center sm:text-right  whitespace-nowrap">
					<Link to={AppRoute.REGISTER} className="text-green-700 text-sm hover:underline">
						Create account
					</Link>
				</div>
			</div>
		</AuthContainer>
	);
};

export default Login;
