import {
	combineReducers,
} from 'redux';

import catalogReducer from 'src/redux/reducers/catalog';

export default () => combineReducers({
	catalog: catalogReducer
});
