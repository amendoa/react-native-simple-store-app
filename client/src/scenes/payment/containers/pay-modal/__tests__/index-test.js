import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	PayModal
} from 'src/scenes/payment/containers';

describe('<Label />', () => {
	const getWrapper = props => renderer.create(
		<PayModal
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
