import {
	GET_CATALOGS,
	GET_CATALOGS_RECEIVED,
	REFRESH_GET_CATALOGS
} from 'src/redux/constants/catalog';

const initialState = {
	isRefreshing: false,
	isFetching: false,
	currentPage: 1,
	result: [],
	canLoadMore: false
};

export default function catalogReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATALOGS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case REFRESH_GET_CATALOGS:
			return Object.assign({}, state, {
				isRefreshing: true
			});

		case GET_CATALOGS_RECEIVED:
			return Object.assign({}, state, {
				isFetching: false,
				isRefreshing: false,
				result: action.params.result,
				canLoadMore: action.params.canLoadMore
			});

		default:
			return state;
	}
}
