import React, { FunctionComponent } from 'react';

const NotFound: FunctionComponent = () => {
	return (
		<div className="h-screen w-screen flex items-center flex-col justify-center">
			<div className="text-9xl text-gray-400">404</div>
			<div className="text-3xl text-gray-400">Nothing there yet</div>
		</div>
	);
};

export default NotFound;
