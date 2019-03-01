import {
	combineReducers,
} from 'redux';


import defaultReducer from 'src/redux/reducers/default';

export default () => combineReducers({
	defaultreducer: defaultReducer
});
