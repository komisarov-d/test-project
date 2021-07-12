import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import API from 'services';
import { RootState } from 'common/types';
import { AppRoute } from 'common/enums';

const ProtectedRoute: FunctionComponent<RouteProps> = ({ component: Component, ...rest }) => {
	const viewer = useSelector((state: RootState) => state.viewer.viewer);
	const isLoading = useSelector((state: RootState) => state.requests.viewer.loading);
	const isLoaded = useSelector((state: RootState) => state.requests.viewer.loaded);
	const isUserLoaded = isLoaded && Boolean(viewer?.id);
	const isUserLoading = isLoading || !viewer?.id;

	return (
		<Route
			{...rest}
			render={props => {
				if (!API.Auth.getToken()) {
					return <Redirect to={AppRoute.LOGIN} />;
				}

				if (isUserLoading && !isUserLoaded) {
					return null;
				}

				return <Component {...props} />;
			}}
		/>
	);
};

export default ProtectedRoute;
