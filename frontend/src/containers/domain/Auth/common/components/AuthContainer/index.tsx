import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageContainer } from 'components';
import { AppRoute } from 'common/enums';
import { RootState } from 'common/types';

const AuthContainer: FunctionComponent = ({ children }) => {
	const isAuthorized = useSelector((state: RootState) => state.viewer.isAuthorized);

	if (isAuthorized) {
		return <Redirect to={AppRoute.ROOT} />;
	}

	return (
		<PageContainer>
			<div className="w-full p-5 sm:max-w-md sm:p-10 m-auto shadow-xl rounded bg-white">{children}</div>
		</PageContainer>
	);
};

export default AuthContainer;
