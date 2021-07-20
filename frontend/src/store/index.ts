import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import { history } from './browserHistory';

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware)));

sagaMiddleware.run(rootSaga);
