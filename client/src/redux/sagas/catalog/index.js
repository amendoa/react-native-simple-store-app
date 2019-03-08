import _ from 'lodash';

import {
	takeLatest,
	put
} from 'redux-saga/effects';

import {
	GET_CATALOGS
} from 'src/redux/constants/catalog';

import * as catalogActions from 'src/redux/actions/catalog';

const data = [
	{
		title: 'T-Shirts I',
		key: 'catalog1'
	},
	{
		title: 'T-Shirts II',
		key: 'catalog2'
	},
	{
		title: 'T-Shirts III',
		key: 'catalog3'
	},
	{
		title: 'T-Shirts IV',
		key: 'catalog4'
	},
	{
		title: 'T-Shirts V',
		key: 'catalog5'
	},
	{
		title: 'T-Shirts VI',
		key: 'catalog6'
	},
	{
		title: 'T-Shirts VII',
		key: 'catalog7'
	},
	{
		title: 'T-Shirts VIII',
		key: 'catalog8'
	},
	{
		title: 'T-Shirts IX',
		key: 'catalog9'
	}
];

const getData = () => {
	const currentPage = 1;
	const itemsByPage = 3;

	return _.drop(data, 0).slice(0, currentPage * itemsByPage);
};

function* fetchGetCatalogsSaga () {
	yield put(catalogActions.getCatalogsReceived({
		result: getData()
	}));
}

const sagas = [
	takeLatest(GET_CATALOGS, fetchGetCatalogsSaga)
];

export default sagas;
