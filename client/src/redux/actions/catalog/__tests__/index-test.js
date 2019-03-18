import * as catalogActions from 'src/redux/actions/catalog';
import configureMockStore from 'redux-mock-store';
import _ from 'lodash';

import {
	GET_CATALOGS,
	GET_CATALOGS_RECEIVED,
	REFRESH_GET_CATALOGS
} from 'src/redux/constants/catalog';

const mockStore = configureMockStore();

describe('Catalog actions', () => {
	it('get catalogs', () => {
		const store = mockStore({
			isRefreshing: false,
			isFetching: false,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});

		const params = {
			teste: true
		};

		const result = store.dispatch(catalogActions.getCatalogs(params));

		expect(_.isEqual(result.params, params))
			.toBe(true);

		expect(result.type === GET_CATALOGS)
			.toBe(true);
	});

	it('refresh get catalogs', () => {
		const store = mockStore({
			isRefreshing: false,
			isFetching: false,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});

		const params = {
			teste: true
		};

		const result = store.dispatch(catalogActions.refreshGetCatalogs(params));

		expect(_.isEqual(result.params, params))
			.toBe(true);

		expect(result.type === REFRESH_GET_CATALOGS)
			.toBe(true);
	});

	it('get catalogs received', () => {
		const store = mockStore({
			isRefreshing: false,
			isFetching: false,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});

		const params = {
			teste: true
		};

		const result = store.dispatch(catalogActions.getCatalogsReceived(params));

		expect(_.isEqual(result.params, params))
			.toBe(true);

		expect(result.type === GET_CATALOGS_RECEIVED)
			.toBe(true);
	});
});
