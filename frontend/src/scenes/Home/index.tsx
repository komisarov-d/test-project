import React, { FunctionComponent } from 'react';
import API from 'services';
import { Button } from 'components/';

const App: FunctionComponent = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<h1 className="text-4xl mb-5 font-semibold">Home page</h1>
			<Button color="secondary" content="logout" onClick={() => API.Auth.logout()} />
		</div>
	);
};

export default App;
