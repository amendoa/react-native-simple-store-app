import {
	GET_CATALOGS,
	GET_CATALOGS_RECEIVED,
	REFRESH_GET_CATALOGS
} from 'src/redux/constants/catalog';

export function getCatalogs (params = {}) {
	return {
		type: GET_CATALOGS,
		params
	};
}

export function refreshGetCatalogs (params = {}) {
	return {
		type: REFRESH_GET_CATALOGS,
		params
	};
}

export function getCatalogsReceived (params = {}) {
	return {
		type: GET_CATALOGS_RECEIVED,
		params
	};
}
