import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import store from 'src/redux/store';

import {
	Provider
} from 'react-redux';

import {
	Catalog
} from 'src/scenes';

describe('<CatalogScene />', () => {
	const getWrapper = () => renderer.create(
		<Provider store={store}>
			<Catalog />
		</Provider>
	).toJSON();

	it('renders correctly', () => {
		const tree = getWrapper();
		expect(tree).toMatchSnapshot();
	});
});
