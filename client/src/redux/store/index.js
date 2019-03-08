import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/redux/sagas';
import createRootReducer from 'src/redux/reducers';

import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';

import {
	isDevelopmentEnv
} from 'src/modules/utils';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	sagaMiddleware
];

let composeEnhancer = compose;

if (isDevelopmentEnv()) {
	composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(
	createRootReducer(),
	{},
	composeEnhancer(
		applyMiddleware(...middlewares)
	)
);

sagaMiddleware.run(rootSaga);

export default store;
