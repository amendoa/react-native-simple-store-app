import {
	all
} from 'redux-saga/effects';

import catalogSagas from 'src/redux/sagas/catalog';

export default function* rootSaga() {
	yield all([
		...catalogSagas
	]);
}
