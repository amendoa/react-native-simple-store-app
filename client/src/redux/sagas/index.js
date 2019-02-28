import {
	all
} from 'redux-saga/effects';

import defaultSagas from 'src/redux/sagas/default';

export default function* rootSaga() {
	yield all([
		...defaultSagas
	]);
}
