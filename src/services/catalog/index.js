import constants from 'src/modules/constants';
import axios from 'axios';

export async function getCatalogs () {
	try {
		const response = await axios({
			method: constants.API.METHODS.GET,
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CATALOG}?mocky-delay=${constants.API.MOCKY_DELAY}`,
			headers: {
				'Content-Type': 'application/json'
			},
			responseType: 'json'
		});
		return response.data;
		// return .json();
	} catch (e) {
		return e;
	}
}
