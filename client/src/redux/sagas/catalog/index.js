import {
	getCatalogs
} from 'src/services/catalog';

import {
	takeLatest,
	put
} from 'redux-saga/effects';

import {
	GET_CATALOGS,
	REFRESH_GET_CATALOGS
} from 'src/redux/constants/catalog';

import * as catalogActions from 'src/redux/actions/catalog';

let currentPage = 0;

const getData = (data, resetCurrentPage) => {
	if (resetCurrentPage) {
		currentPage = 1;
	} else {
		currentPage += 1;
	}

	const itemsByPage = 3;

	const result = data.slice(0, currentPage * itemsByPage);

	return {
		result,
		canLoadMore: result.length < data.length
	};
};

function* getCatalogsSaga (action) {
	const {
		resetCurrentPage
	} = action.params;

	try {
		const response = yield getCatalogs();

		const {
			result
		} = response;

		yield put(catalogActions.getCatalogsReceived({
			...getData(result, resetCurrentPage)
		}));
	} catch (error) {
		// TODO: drop error
	}
}

const sagas = [
	takeLatest(GET_CATALOGS, getCatalogsSaga),
	takeLatest(REFRESH_GET_CATALOGS, getCatalogsSaga)
];

export default sagas;
