import catalogReducer from 'src/redux/reducers/catalog';
import * as catalogActions from 'src/redux/actions/catalog';

describe('Catalog actions', () => {
	it('should return initial state', () => {
		expect(catalogReducer(undefined, {})).toEqual({
			isRefreshing: false,
			isFetching: false,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});
	});

	it('should return isFetching true', () => {
		expect(catalogReducer(undefined, catalogActions.getCatalogs())).toEqual({
			isRefreshing: false,
			isFetching: true,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});
	});

	it('should return isRefreshing true', () => {
		expect(catalogReducer(undefined, catalogActions.refreshGetCatalogs())).toEqual({
			isRefreshing: true,
			isFetching: false,
			currentPage: 1,
			result: [],
			canLoadMore: false
		});
	});

	it('should return result and canloadmore true', () => {
		expect(catalogReducer(undefined, catalogActions.getCatalogsReceived({
			result: [1, 3, 4],
			canLoadMore: true
		}))).toEqual({
			isRefreshing: false,
			isFetching: false,
			currentPage: 1,
			result: [1, 3, 4],
			canLoadMore: true
		});
	});
});
