import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from 'store';
import { history } from 'store/browserHistory';
import ReduxToastr from 'react-redux-toastr';
import Routing from '../Routing';
import Header from 'components/Header';
import AuthorizedWrapper from 'components/AuthorizedWrapper';

const App: React.FC = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<AuthorizedWrapper>
				<Header />
			</AuthorizedWrapper>
			<Routing />
		</ConnectedRouter>
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-right"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
			closeOnToastrClick
		/>
	</Provider>
);

export default App;
