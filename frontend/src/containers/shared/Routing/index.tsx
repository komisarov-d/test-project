import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import API from 'services';
import { AppRoute } from 'common/enums/';
import { fetchViewerRoutine } from 'containers/domain/Auth/authRoutines';
import ProtectedRoute from 'components/ProtectedRoute';
import Home from 'scenes/Home';
import Login from 'containers/domain/Auth/Login';
import Register from 'containers/domain/Auth/Register';
import Property from 'containers/domain/Property';
import UserProfile from 'containers/domain/UserProfile';
import Properties from 'containers/domain/Properties/PropertiesList';
import Booking from 'containers/domain/Booking';
import Review from 'containers/domain/Review';
import NotFound from '../NotFound';

export interface RoutingProps {
	viewer: any;
	isLoaded: boolean;
	isLoading: boolean;
	getViewer: () => void;
}

const Routing: FunctionComponent<RoutingProps> = ({ getViewer }) => {
	useEffect(() => {
		if (API.Auth.getToken()) {
			getViewer();
		}
	}, [getViewer]);

	return (
		<Switch>
			<ProtectedRoute exact path={AppRoute.ROOT} component={Home} />
			<Route exact path={AppRoute.LOGIN} component={Login} />
			<Route exact path={AppRoute.REGISTER} component={Register} />
			<ProtectedRoute exact path={AppRoute.PROPERTIES} component={Properties} />
			<ProtectedRoute exact path={AppRoute.PROPERTY} component={Property} />
			<ProtectedRoute exact path={AppRoute.USER_PROFILE} component={UserProfile} />
			<ProtectedRoute exact path={AppRoute.PROPERTY_BOOKING} component={Booking} />
			<ProtectedRoute exact path={AppRoute.PROPERTY_REVIEW} component={Review} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
};

const mapStateToProps = state => {
	const { viewer } = state.viewer;
	const { isLoading, isLoaded } = state.requests.viewer;

	return {
		viewer,
		isLoaded,
		isLoading
	};
};

const mapDispatchToProps = {
	getViewer: fetchViewerRoutine
};

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
