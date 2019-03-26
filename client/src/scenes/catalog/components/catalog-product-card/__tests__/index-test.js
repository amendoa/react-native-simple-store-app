import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	CatalogProductCard
} from 'src/scenes/catalog/components';

describe('<Label />', () => {
	const getWrapper = props => renderer.create(
		<CatalogProductCard
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		imageSource: 'http://192.168.0.100:7070/images/product1.jpg',
		imageThumbnailSource: 'http://192.168.0.100:7070/thumbs/product1.jpg',
		price: '40,99$'
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
