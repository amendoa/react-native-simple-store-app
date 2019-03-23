import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	BagProductCard
} from 'src/scenes/bag/components';

describe('<BagProductCard />', () => {
	const getWrapper = props => renderer.create(
		<BagProductCard
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		isLastItem: false,
		isFirstItem: false
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
