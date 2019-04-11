import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	BuyedModal
} from 'src/scenes/product-details/containers';

describe('<Label />', () => {
	const getWrapper = props => renderer.create(
		<BuyedModal
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		isVisible: true,
		handleCloseModal: () => {}
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
