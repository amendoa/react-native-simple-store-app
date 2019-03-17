import constants from 'src/modules/constants';

export async function getCatalogs () {
	try {
		const response = await fetch(`${constants.API.ROOT}${constants.API.ACTIONS.CATALOG}?mocky-delay=${constants.API.MOCKY_DELAY}`, {
			method: constants.API.METHODS.GET,
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return response.json();
	} catch (e) {
		return e;
	}
}
