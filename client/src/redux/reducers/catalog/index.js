import {
	GET_CATALOGS,
	GET_CATALOGS_RECEIVED
} from 'src/redux/constants/catalog';

const initialState = {
	isRefreshing: false,
	isLoadingMore: false,
	currentPage: 1,
	result: []
};

export default function catalogReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATALOGS:
			return Object.assign({}, state, {
				isLoadingMore: true
			});

		case GET_CATALOGS_RECEIVED:
			return Object.assign({}, state, {
				isLoadingMore: false,
				result: action.params.result
			});

		default:
			return state;
	}
}
