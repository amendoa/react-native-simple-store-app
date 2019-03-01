import {
	takeLatest
} from 'redux-saga/effects';

import {
	DEFAULT_CONST
} from 'src/redux/constants/default';

function* teste () {

}

const sagas = [
	takeLatest(DEFAULT_CONST, teste),
];

export default sagas;
