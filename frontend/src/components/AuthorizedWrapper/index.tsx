import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';

interface IProps {
	children: React.ReactElement;
}

const AuthorizedWrapper: FunctionComponent<IProps> = ({ children }) => {
	const isAuthorized = useSelector((state: RootState) => state.viewer.isAuthorized);

	if (!isAuthorized) {
		return null;
	}

	return children;
};

export default AuthorizedWrapper;
