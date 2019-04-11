import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import store from 'src/redux/store';

import {
	Provider
} from 'react-redux';

import {
	About
} from 'src/scenes';

describe('<Catalog />', () => {
	const getWrapper = () => renderer.create(
		<Provider
			store={store}
		>
			<About />
		</Provider>
	).toJSON();

	it('renders correctly', () => {
		const tree = getWrapper();
		expect(tree).toMatchSnapshot();
	});
});
