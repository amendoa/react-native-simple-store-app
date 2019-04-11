import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	CatalogProductList
} from 'src/scenes/catalog/containers';

describe('<Label />', () => {
	const getWrapper = props => renderer.create(
		<CatalogProductList
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		title: 'teste'
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
