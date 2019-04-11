import {
	getCatalogs
} from 'src/services/catalog';

describe('Catalog services', () => {
	it('get catalogs', () => getCatalogs()
		.then((response) => {
			const {
				result
			} = response;
			expect(result.length > 0).toBe(true);
		}));
});
