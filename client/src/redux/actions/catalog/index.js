import {
	GET_CATALOGS,
	GET_CATALOGS_RECEIVED
} from 'src/redux/constants/catalog';

export function getCatalogs () {
	return {
		type: GET_CATALOGS
	};
}

export function getCatalogsReceived (params) {
	return {
		type: GET_CATALOGS_RECEIVED,
		params
	};
}
